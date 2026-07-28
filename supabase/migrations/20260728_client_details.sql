-- Rich client records for Vystav. Run once in Supabase SQL Editor.
alter table public.clients add column if not exists phone text;
alter table public.clients add column if not exists address text;
alter table public.clients add column if not exists city text;
alter table public.clients add column if not exists zip text;
alter table public.clients add column if not exists country text;
alter table public.clients add column if not exists ico text;
alter table public.clients add column if not exists dic text;
alter table public.clients add column if not exists ic_dph text;
alter table public.clients add column if not exists vat_payer boolean not null default false;
alter table public.clients add column if not exists info text;
