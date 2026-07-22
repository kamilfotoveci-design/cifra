-- Vystav billing expansion. Run once in Supabase SQL Editor.
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

alter table public.invoices add column if not exists subtotal numeric(12,2) not null default 0;
alter table public.invoices add column if not exists vat_rate numeric(5,2) not null default 0;
alter table public.invoices add column if not exists vat_amount numeric(12,2) not null default 0;
alter table public.invoices add column if not exists variable_symbol text;
alter table public.invoices add column if not exists currency text not null default 'EUR';
alter table public.invoices add column if not exists customer_email text;

alter table public.invoice_items add column if not exists vat_rate numeric(5,2) not null default 0;

-- Useful indexes for the invoice list and reports.
create index if not exists invoices_issued_on_idx on public.invoices(user_id, issued_on);
create index if not exists invoices_status_idx on public.invoices(user_id, status);
