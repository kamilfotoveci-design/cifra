-- Adds the invoice visual template choice to the company profile.
-- Idempotent: safe to run again.
alter table public.profiles add column if not exists invoice_template text not null default 'classic';
