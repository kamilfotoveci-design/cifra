# Vystav

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
