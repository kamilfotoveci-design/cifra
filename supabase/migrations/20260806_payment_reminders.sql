-- VYSTAV payment reminder tracking.
-- Safe to run repeatedly after all earlier migrations.
begin;

alter table public.invoices add column if not exists reminder_sent_at timestamptz;

commit;
