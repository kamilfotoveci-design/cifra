-- Vystav: tenant-safe invoice items and atomic invoice writes.
-- Run once in Supabase SQL Editor after the earlier migrations.

create index if not exists invoice_items_user_id_idx
  on public.invoice_items (user_id);

create or replace function public.invoice_item_belongs_to_user(
  target_invoice_id uuid,
  target_user_id uuid
)
returns boolean
language sql
stable
security invoker
set search_path = public
as $$
  select exists (
    select 1
    from public.invoices
    where id = target_invoice_id
      and user_id = target_user_id
  );
$$;

drop policy if exists "invoice_items_own_rows" on public.invoice_items;

create policy "invoice_items_select_own"
on public.invoice_items
for select
using (
  auth.uid() = user_id
  and public.invoice_item_belongs_to_user(invoice_id, user_id)
);

create policy "invoice_items_insert_own"
on public.invoice_items
for insert
with check (
  auth.uid() = user_id
  and public.invoice_item_belongs_to_user(invoice_id, user_id)
);

create policy "invoice_items_update_own"
on public.invoice_items
for update
using (
  auth.uid() = user_id
  and public.invoice_item_belongs_to_user(invoice_id, user_id)
)
with check (
  auth.uid() = user_id
  and public.invoice_item_belongs_to_user(invoice_id, user_id)
);

create policy "invoice_items_delete_own"
on public.invoice_items
for delete
using (
  auth.uid() = user_id
  and public.invoice_item_belongs_to_user(invoice_id, user_id)
);

create or replace function public.save_invoice_with_items(
  p_id uuid,
  p_invoice jsonb,
  p_items jsonb default '[]'::jsonb
)
returns public.invoices
language plpgsql
security invoker
set search_path = public
as $$
declare
  current_user_id uuid := auth.uid();
  saved public.invoices;
begin
  if current_user_id is null then
    raise exception 'Authentication required' using errcode = '42501';
  end if;

  insert into public.invoices (
    id, user_id, number, customer, client_id, issued_on, due_on,
    amount, subtotal, vat_rate, vat_amount, variable_symbol, currency,
    customer_email, iban, note, qr_enabled, status
  )
  values (
    p_id,
    current_user_id,
    nullif(trim(p_invoice->>'number'), ''),
    nullif(trim(p_invoice->>'customer'), ''),
    nullif(p_invoice->>'client_id', '')::uuid,
    (p_invoice->>'issued_on')::date,
    (p_invoice->>'due_on')::date,
    (p_invoice->>'amount')::numeric,
    (p_invoice->>'subtotal')::numeric,
    (p_invoice->>'vat_rate')::numeric,
    (p_invoice->>'vat_amount')::numeric,
    nullif(trim(p_invoice->>'variable_symbol'), ''),
    coalesce(nullif(trim(p_invoice->>'currency'), ''), 'EUR'),
    nullif(trim(p_invoice->>'customer_email'), ''),
    nullif(trim(p_invoice->>'iban'), ''),
    nullif(trim(p_invoice->>'note'), ''),
    coalesce((p_invoice->>'qr_enabled')::boolean, true),
    coalesce(nullif(trim(p_invoice->>'status'), ''), 'waiting')
  )
  on conflict (id) do update set
    number = excluded.number,
    customer = excluded.customer,
    client_id = excluded.client_id,
    issued_on = excluded.issued_on,
    due_on = excluded.due_on,
    amount = excluded.amount,
    subtotal = excluded.subtotal,
    vat_rate = excluded.vat_rate,
    vat_amount = excluded.vat_amount,
    variable_symbol = excluded.variable_symbol,
    currency = excluded.currency,
    customer_email = excluded.customer_email,
    iban = excluded.iban,
    note = excluded.note,
    qr_enabled = excluded.qr_enabled,
    status = excluded.status
  where public.invoices.user_id = current_user_id
  returning * into saved;

  if saved.id is null then
    raise exception 'Invoice not found or access denied' using errcode = '42501';
  end if;

  delete from public.invoice_items
  where invoice_id = saved.id
    and user_id = current_user_id;

  insert into public.invoice_items (
    invoice_id, user_id, description, quantity, unit, unit_price, total
  )
  select
    saved.id,
    current_user_id,
    nullif(trim(item->>'description'), ''),
    (item->>'quantity')::numeric,
    coalesce(nullif(trim(item->>'unit'), ''), 'ks'),
    (item->>'unit_price')::numeric,
    (item->>'total')::numeric
  from jsonb_array_elements(coalesce(p_items, '[]'::jsonb)) as item
  where nullif(trim(item->>'description'), '') is not null;

  return saved;
end;
$$;

revoke all on function public.save_invoice_with_items(uuid, jsonb, jsonb) from public;
grant execute on function public.save_invoice_with_items(uuid, jsonb, jsonb) to authenticated;
