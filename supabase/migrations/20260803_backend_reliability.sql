-- VYSTAV backend reliability migration.
-- Safe to run repeatedly after all earlier migrations.
begin;

create extension if not exists pgcrypto;

alter table public.profiles add column if not exists dic text;
alter table public.profiles add column if not exists ic_dph text;
alter table public.profiles add column if not exists address text;
alter table public.profiles add column if not exists city text;
alter table public.profiles add column if not exists zip text;
alter table public.profiles add column if not exists country text;
alter table public.profiles add column if not exists phone text;
alter table public.profiles add column if not exists website text;
alter table public.profiles add column if not exists email text;
alter table public.profiles add column if not exists logo_data text;
alter table public.profiles add column if not exists stamp_data text;

alter table public.clients add column if not exists contact_person text;
alter table public.clients add column if not exists phone text;
alter table public.clients add column if not exists website text;
alter table public.clients add column if not exists address text;
alter table public.clients add column if not exists city text;
alter table public.clients add column if not exists zip text;
alter table public.clients add column if not exists country text;
alter table public.clients add column if not exists ico text;
alter table public.clients add column if not exists dic text;
alter table public.clients add column if not exists ic_dph text;
alter table public.clients add column if not exists vat_payer boolean not null default false;
alter table public.clients add column if not exists info text;
alter table public.clients add column if not exists use_delivery_address boolean not null default false;
alter table public.clients add column if not exists delivery_name text;
alter table public.clients add column if not exists delivery_address text;
alter table public.clients add column if not exists delivery_city text;
alter table public.clients add column if not exists delivery_zip text;
alter table public.clients add column if not exists delivery_country text;

alter table public.invoices add column if not exists subtotal numeric(12,2) not null default 0;
alter table public.invoices add column if not exists vat_rate numeric(5,2) not null default 0;
alter table public.invoices add column if not exists vat_amount numeric(12,2) not null default 0;
alter table public.invoices add column if not exists variable_symbol text;
alter table public.invoices add column if not exists currency text not null default 'EUR';
alter table public.invoices add column if not exists customer_email text;
alter table public.invoice_items add column if not exists vat_rate numeric(5,2) not null default 0;

create index if not exists clients_user_id_idx on public.clients(user_id);
create index if not exists items_user_id_idx on public.items(user_id);
create index if not exists invoices_user_id_idx on public.invoices(user_id);
create index if not exists invoices_issued_on_idx on public.invoices(user_id, issued_on);
create index if not exists invoices_status_idx on public.invoices(user_id, status);
create index if not exists invoice_items_invoice_id_idx on public.invoice_items(invoice_id);
create index if not exists invoice_items_user_id_idx on public.invoice_items(user_id);

alter table public.profiles enable row level security;
alter table public.clients enable row level security;
alter table public.items enable row level security;
alter table public.invoices enable row level security;
alter table public.invoice_items enable row level security;

drop policy if exists "profiles own row" on public.profiles;
create policy "profiles own row" on public.profiles for all to authenticated
using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

drop policy if exists "clients own rows" on public.clients;
create policy "clients own rows" on public.clients for all to authenticated
using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

drop policy if exists "items own rows" on public.items;
create policy "items own rows" on public.items for all to authenticated
using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

drop policy if exists "invoices own rows" on public.invoices;
create policy "invoices own rows" on public.invoices for all to authenticated
using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

drop policy if exists "invoice items own rows" on public.invoice_items;
drop policy if exists "invoice_items_own_rows" on public.invoice_items;
drop policy if exists "invoice_items_select_own" on public.invoice_items;
drop policy if exists "invoice_items_insert_own" on public.invoice_items;
drop policy if exists "invoice_items_update_own" on public.invoice_items;
drop policy if exists "invoice_items_delete_own" on public.invoice_items;

create or replace function public.invoice_item_belongs_to_user(target_invoice_id uuid, target_user_id uuid)
returns boolean language sql stable security invoker set search_path = public as $$
  select exists(select 1 from public.invoices where id = target_invoice_id and user_id = target_user_id);
$$;

create policy "invoice_items_select_own" on public.invoice_items for select to authenticated
using ((select auth.uid()) = user_id and public.invoice_item_belongs_to_user(invoice_id, user_id));
create policy "invoice_items_insert_own" on public.invoice_items for insert to authenticated
with check ((select auth.uid()) = user_id and public.invoice_item_belongs_to_user(invoice_id, user_id));
create policy "invoice_items_update_own" on public.invoice_items for update to authenticated
using ((select auth.uid()) = user_id and public.invoice_item_belongs_to_user(invoice_id, user_id))
with check ((select auth.uid()) = user_id and public.invoice_item_belongs_to_user(invoice_id, user_id));
create policy "invoice_items_delete_own" on public.invoice_items for delete to authenticated
using ((select auth.uid()) = user_id and public.invoice_item_belongs_to_user(invoice_id, user_id));

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = public as $$
begin new.updated_at = now(); return new; end;
$$;

drop trigger if exists clients_set_updated_at on public.clients;
create trigger clients_set_updated_at before update on public.clients for each row execute function public.set_updated_at();
drop trigger if exists items_set_updated_at on public.items;
create trigger items_set_updated_at before update on public.items for each row execute function public.set_updated_at();
drop trigger if exists invoices_set_updated_at on public.invoices;
create trigger invoices_set_updated_at before update on public.invoices for each row execute function public.set_updated_at();

create or replace function public.validate_invoice_client_owner()
returns trigger language plpgsql security invoker set search_path = public as $$
begin
  if auth.uid() is not null and new.client_id is not null and not exists (
    select 1 from public.clients where id = new.client_id and user_id = auth.uid()
  ) then
    raise exception 'Client not found or access denied' using errcode = '42501';
  end if;
  return new;
end;
$$;

drop trigger if exists invoices_validate_client_owner on public.invoices;
create trigger invoices_validate_client_owner before insert or update of client_id on public.invoices
for each row execute function public.validate_invoice_client_owner();

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', ''), new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
for each row execute function public.handle_new_user();

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
    qr_enabled, status
  ) values (
    p_id, current_user_id, nullif(trim(p_invoice->>'number'), ''), nullif(trim(p_invoice->>'customer'), ''),
    requested_client_id, (p_invoice->>'issued_on')::date, nullif(p_invoice->>'due_on', '')::date,
    greatest(coalesce((p_invoice->>'amount')::numeric, 0), 0), greatest(coalesce((p_invoice->>'subtotal')::numeric, 0), 0),
    greatest(coalesce((p_invoice->>'vat_rate')::numeric, 0), 0), greatest(coalesce((p_invoice->>'vat_amount')::numeric, 0), 0),
    nullif(trim(p_invoice->>'variable_symbol'), ''),
    case when upper(coalesce(p_invoice->>'currency', 'EUR')) in ('EUR','CZK') then upper(coalesce(p_invoice->>'currency', 'EUR')) else 'EUR' end,
    nullif(trim(p_invoice->>'customer_email'), ''), nullif(trim(p_invoice->>'iban'), ''),
    nullif(trim(p_invoice->>'note'), ''), coalesce((p_invoice->>'qr_enabled')::boolean, true),
    case when coalesce(p_invoice->>'status', 'waiting') in ('draft','waiting','paid','late') then coalesce(p_invoice->>'status', 'waiting') else 'waiting' end
  )
  on conflict (id) do update set
    number=excluded.number, customer=excluded.customer, client_id=excluded.client_id,
    issued_on=excluded.issued_on, due_on=excluded.due_on, amount=excluded.amount,
    subtotal=excluded.subtotal, vat_rate=excluded.vat_rate, vat_amount=excluded.vat_amount,
    variable_symbol=excluded.variable_symbol, currency=excluded.currency,
    customer_email=excluded.customer_email, iban=excluded.iban, note=excluded.note,
    qr_enabled=excluded.qr_enabled, status=excluded.status, updated_at=now()
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
grant select, insert, update, delete on public.profiles, public.clients, public.items, public.invoices, public.invoice_items to authenticated;

commit;
