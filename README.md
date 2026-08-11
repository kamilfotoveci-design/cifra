# Načas

Webová aplikácia pre vystavovanie faktúr v Česku a na Slovensku. Podporuje firemné profily, klientov, uložené položky, EUR/CZK, DPH, PDF, českú QR Platbu, slovenský PAY by square, export a synchronizáciu cez Supabase.

## Lokálny vývoj

Požiadavka: Node.js 20 alebo novší.

```bash
npm run verify
```

Príkaz skontroluje syntax, spustí regresné testy, vytvorí produkčný build a testy zopakuje nad výsledným zdrojom. Výstupom sú:

- `index.html`
- `outputs/faktury-dashboard.html`

## Supabase

SQL súbory spúšťaj v Supabase SQL Editore v tomto poradí:

1. `supabase/schema.sql`
2. migrácie v `supabase/migrations` podľa dátumu

Najnovšia migrácia `20260731_security_and_atomic_invoices.sql`:

- sprísňuje RLS položiek faktúr,
- pridáva index podľa používateľa,
- pridáva transakčné uloženie faktúry spolu s položkami.

Používaj iba verejný publishable kľúč v klientovi. Service-role kľúč ani databázové heslo nesmú byť súčasťou repozitára.

## Cloudflare Pages

- Framework preset: `None`
- Build command: `npm run build`
- Output directory: `/`

Súbory `_headers` a `_redirects` sa kopírujú aj do priečinka `outputs`.

## Testy

```bash
npm test
npm run check
npm run build
```

Automatické testy pokrývajú zaokrúhľovanie peňazí, DPH, desatinné množstvá, oddelenie cache používateľov, databázové hardening pravidlá a jazykový kód.

## Kontrola živého backendu

Po nasadení migrácií over živý Supabase projekt príkazom:

```bash
npm run backend:smoke
```

Najnovšia idempotentná migrácia je `supabase/migrations/20260803_backend_reliability.sql`. Doplňuje chýbajúce stĺpce, RLS, atómové uloženie faktúr, validačné triggery a aktualizáciu časových značiek.

## Pripomienky platby

Migrácia `supabase/migrations/20260806_payment_reminders.sql` dopĺňa stĺpec `invoices.reminder_sent_at`. Tlačidlo „Poslať pripomienku" v detaile faktúry (viditeľné iba pri faktúre po splatnosti so zadaným e-mailom klienta) volá Edge Function `supabase/functions/send-reminder`, ktorá odošle e-mail cez Resend a označí čas odoslania.

Nasadenie (jednorazovo, mimo tohto repozitára):

1. Vytvor si účet na [resend.com](https://resend.com) a over doménu, z ktorej sa budú pripomienky odosielať (alebo dočasne použi sandbox adresu `onboarding@resend.dev`).
2. `supabase login` a `supabase link --project-ref <tvoj-project-ref>` (ak ešte nie je CLI napárované na projekt).
3. `supabase secrets set RESEND_API_KEY=<tvoj_kluc>` — voliteľne aj `supabase secrets set REMINDER_FROM_EMAIL=<over-a-adresa>`.
4. `supabase functions deploy send-reminder`
5. Spusti `supabase/migrations/20260806_payment_reminders.sql` v Supabase SQL Editore (rovnaký postup ako pri predošlých migráciách vyššie).

Function nikdy nepoužíva service-role kľúč — pracuje s JWT prihláseného používateľa, takže rovnaké RLS pravidlá ako v aplikácii platia aj tu.

## Opakované faktúry, prehľad podľa veku a verejný odkaz

Migrácia `supabase/migrations/20260807_recurring_and_public_invoices.sql`:

- pridáva `invoices.is_recurring` (checkbox „Opakovaná faktúra" vo formulári faktúry) a `invoices.public_token` (náhodné UUID, jedinečné pre každú faktúru),
- znovu vytvára `save_invoice_with_items` s podporou `is_recurring`,
- pridáva funkciu `get_public_invoice(p_token)` — jediné miesto, kde má anonymný návštevník prístup k dátam faktúry, iba na základe presnej zhody tokenu. Žiadna tabuľka nemá RLS politiku pre `anon`, prístup ide vždy len cez túto funkciu.

Táto migrácia nevyžaduje žiadnu novú Edge Function ani nový secret — stačí ju spustiť v Supabase SQL Editore rovnako ako predošlé.

Na dashboarde pribudol prehľad neuhradených faktúr podľa veku (do splatnosti / 1–30 / 31–60 / 60+ dní) a panel s opakovanými faktúrami, ktoré je čas zopakovať (tlačidlo použije už existujúcu funkciu duplikácie faktúry). V detaile faktúry pribudlo tlačidlo „Kopírovať verejný odkaz" — skopíruje `/faktura/<token>`, verejne dostupnú, needitovateľnú stránku s náhľadom faktúry a QR platbou, bez prihlásenia.
