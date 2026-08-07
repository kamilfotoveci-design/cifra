-- VYSTAV recurring-invoice flag and public invoice link.
-- Safe to run repeatedly after all earlier migrations.
begin;

alter table public.invoices add column if not exists is_recurring boolean not null default false;
alter table public.invoices add column if not exists public_token uuid not null default gen_random_uuid();

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'invoices_public_token_key') then
    alter table public.invoices add constraint invoices_public_token_key unique (public_token);
  end if;
end $$;

-- Re-issue save_invoice_with_items (unchanged from 20260803 except for
-- is_recurring) so the recurring flag actually persists - the function has an
-- explicit column list, so a new column is invisible to it until re-declared.
create or replace function public.save_invoice_with_items(p_id uuid, p_invoice jsonb, p_items jsonb default '[]'::jsonb)
returns public.invoices language plpgsql security invoker set search_path = public as $$
declare
  current_user_id uuid := auth.uid();
  saved public.invoices;
  requested_client_id uuid := nullif(p_invoice->>'client_id', '')::uuid;
begin
  if current_user_id is null then raise exception 'Authentication required' using errcode = '42501'; end if;
  if nullif(trim(p_invoice->>'number'), '') is null then raise exception 'Invoice number is required' using errcode = '22023'; end if;
  if nullif(trim(p_invoice->>'customer'), '') is null then raise exception 'Customer is required' using errcode = '22023'; end if;
  if requested_client_id is not null and not exists (select 1 from public.clients where id = requested_client_id and user_id = current_user_id) then
    raise exception 'Client not found or access denied' using errcode = '42501';
  end if;

  insert into public.invoices (
    id, user_id, number, customer, client_id, issued_on, due_on, amount, subtotal,
    vat_rate, vat_amount, variable_symbol, currency, customer_email, iban, note,
    qr_enabled, status, is_recurring
  ) values (
    p_id, current_user_id, nullif(trim(p_invoice->>'number'), ''), nullif(trim(p_invoice->>'customer'), ''),
    requested_client_id, (p_invoice->>'issued_on')::date, nullif(p_invoice->>'due_on', '')::date,
    greatest(coalesce((p_invoice->>'amount')::numeric, 0), 0), greatest(coalesce((p_invoice->>'subtotal')::numeric, 0), 0),
    greatest(coalesce((p_invoice->>'vat_rate')::numeric, 0), 0), greatest(coalesce((p_invoice->>'vat_amount')::numeric, 0), 0),
    nullif(trim(p_invoice->>'variable_symbol'), ''),
    case when upper(coalesce(p_invoice->>'currency', 'EUR')) in ('EUR','CZK') then upper(coalesce(p_invoice->>'currency', 'EUR')) else 'EUR' end,
    nullif(trim(p_invoice->>'customer_email'), ''), nullif(trim(p_invoice->>'iban'), ''),
    nullif(trim(p_invoice->>'note'), ''), coalesce((p_invoice->>'qr_enabled')::boolean, true),
    case when coalesce(p_invoice->>'status', 'waiting') in ('draft','waiting','paid','late') then coalesce(p_invoice->>'status', 'waiting') else 'waiting' end,
    coalesce((p_invoice->>'is_recurring')::boolean, false)
  )
  on conflict (id) do update set
    number=excluded.number, customer=excluded.customer, client_id=excluded.client_id,
    issued_on=excluded.issued_on, due_on=excluded.due_on, amount=excluded.amount,
    subtotal=excluded.subtotal, vat_rate=excluded.vat_rate, vat_amount=excluded.vat_amount,
    variable_symbol=excluded.variable_symbol, currency=excluded.currency,
    customer_email=excluded.customer_email, iban=excluded.iban, note=excluded.note,
    qr_enabled=excluded.qr_enabled, status=excluded.status, is_recurring=excluded.is_recurring, updated_at=now()
  where public.invoices.user_id = current_user_id
  returning * into saved;

  if saved.id is null then raise exception 'Invoice not found or access denied' using errcode = '42501'; end if;

  delete from public.invoice_items where invoice_id = saved.id and user_id = current_user_id;
  insert into public.invoice_items (invoice_id, user_id, description, quantity, unit, unit_price, total, vat_rate)
  select saved.id, current_user_id, nullif(trim(item->>'description'), ''),
    greatest(coalesce((item->>'quantity')::numeric, 1), 0.001),
    coalesce(nullif(trim(item->>'unit'), ''), 'ks'),
    greatest(coalesce((item->>'unit_price')::numeric, 0), 0),
    greatest(coalesce((item->>'total')::numeric, 0), 0),
    greatest(coalesce((item->>'vat_rate')::numeric, 0), 0)
  from jsonb_array_elements(coalesce(p_items, '[]'::jsonb)) item
  where nullif(trim(item->>'description'), '') is not null;
  return saved;
end;
$$;

revoke all on function public.save_invoice_with_items(uuid, jsonb, jsonb) from public;
revoke all on function public.save_invoice_with_items(uuid, jsonb, jsonb) from anon;
grant execute on function public.save_invoice_with_items(uuid, jsonb, jsonb) to authenticated;

-- Sole anon-facing surface: looks up exactly one invoice by its unguessable
-- token and returns only the fields already sent to that client via PDF/email
-- today. No table-level anon policy exists or is added - RLS on public.invoices
-- stays "for all to authenticated" (schema.sql), unchanged by this migration.
create or replace function public.get_public_invoice(p_token uuid)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  inv public.invoices;
  result jsonb;
begin
  select * into inv from public.invoices where public_token = p_token;
  if not found then
    return null;
  end if;

  select jsonb_build_object(
    'invoice', jsonb_build_object(
      'number', inv.number,
      'customer', inv.customer,
      'issued_on', inv.issued_on,
      'due_on', inv.due_on,
      'amount', inv.amount,
      'subtotal', inv.subtotal,
      'vat_rate', inv.vat_rate,
      'vat_amount', inv.vat_amount,
      'currency', inv.currency,
      'variable_symbol', inv.variable_symbol,
      'iban', inv.iban,
      'note', inv.note,
      'qr_enabled', inv.qr_enabled,
      'status', inv.status
    ),
    'items', coalesce((
      select jsonb_agg(jsonb_build_object(
        'description', ii.description,
        'quantity', ii.quantity,
        'unit', ii.unit,
        'unit_price', ii.unit_price,
        'total', ii.total
      ) order by ii.created_at)
      from public.invoice_items ii where ii.invoice_id = inv.id
    ), '[]'::jsonb),
    'profile', (
      select jsonb_build_object(
        'company_name', p.company_name,
        'full_name', p.full_name,
        'address', p.address,
        'city', p.city,
        'zip', p.zip,
        'country', p.country,
        'ico', p.ico,
        'dic', p.dic,
        'ic_dph', p.ic_dph,
        'email', p.email,
        'phone', p.phone,
        'iban', p.iban,
        'logo_data', p.logo_data,
        'stamp_data', p.stamp_data
      )
      from public.profiles p where p.id = inv.user_id
    )
  ) into result;

  return result;
end;
$$;

revoke all on function public.get_public_invoice(uuid) from public;
grant execute on function public.get_public_invoice(uuid) to anon;
grant execute on function public.get_public_invoice(uuid) to authenticated;

commit;
