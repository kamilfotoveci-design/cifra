-- Complete client contact and delivery details for Vystav.
alter table public.clients add column if not exists contact_person text;
alter table public.clients add column if not exists website text;
alter table public.clients add column if not exists use_delivery_address boolean not null default false;
alter table public.clients add column if not exists delivery_name text;
alter table public.clients add column if not exists delivery_address text;
alter table public.clients add column if not exists delivery_city text;
alter table public.clients add column if not exists delivery_zip text;
alter table public.clients add column if not exists delivery_country text;