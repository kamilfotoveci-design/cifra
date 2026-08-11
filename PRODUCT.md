# Načas — produktový rámec

## Pre koho

Načas je fakturačná aplikácia pre českých a slovenských živnostníkov a malé firmy, ktoré chcú vystaviť profesionálny doklad bez zložitého účtovného systému.

## Hlavná úloha

Používateľ má vedieť:

1. uložiť kompletné firemné a klientske údaje,
2. vytvoriť alebo duplikovať faktúru,
3. pridať položky, DPH, splatnosť, účet a variabilný symbol,
4. skontrolovať reprezentatívny náhľad a PDF,
5. pridať funkčný český QR Platba alebo slovenský PAY by square kód,
6. odoslať doklad a sledovať stav úhrady,
7. exportovať dáta do CSV alebo Excelu.

## Produktový prísľub

**Od práce k platbe. Načas.**

Rozhranie má znižovať prepisovanie a opakovanie. Uložený klient a položka majú urýchliť ďalšiu faktúru; duplikovanie má zachovať údaje a nechať používateľa meniť iba to, čo sa zmenilo.

## Jazyk a lokalizácia

- Používateľ môže kedykoľvek prepnúť SK/CZ.
- Faktúra v EUR používa slovenské pomenovania a PAY by square, ak sú platobné údaje platné.
- Faktúra v CZK používa české pomenovania a QR Platba, ak sú platobné údaje platné.
- Formát dátumu, meny a stavov sa riadi jazykom dokumentu.

## Dôvera a dáta

- Účty a dáta sú uložené v Supabase a oddelené pravidlami RLS.
- Aplikácia nesmie predstierať uloženie, odoslanie ani synchronizáciu.
- Každá akcia musí mať loading, úspech, chybu a bezpečné opakovanie.
- Lokálne kľúče zostávajú spätne kompatibilné počas rebrandu, aby sa nestratili rozpracované dáta.

## Definition of done

Funkcia je hotová až vtedy, keď funguje s myšou aj klávesnicou, na mobile aj desktope, v slovenčine aj češtine, pri prázdnych aj reálnych dátach a zobrazuje zrozumiteľnú chybu pri zlyhaní backendu.
