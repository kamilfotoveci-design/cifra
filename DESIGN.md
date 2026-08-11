# Načas — produktový dizajnový systém

## Smer

Modern minimal. Marketing rozpráva krátky príbeh od práce po platbu; aplikácia je sústredený pracovný nástroj. Dôveryhodnosť vzniká z typografie, konzistentných rozostupov, funkčných stavov a reálneho produktu.

## Základné pravidlá

- Paleta, typografia a tón sú definované v `BRAND.md` a `tokens.css`.
- Používame 4/8 px rytmus. Bežné medzery sú 8, 12, 16, 24, 40 a 64 px.
- Obsah landing page má maximum 1240 px. Aplikácia využíva dostupnú plochu, no formuláre drží v čitateľnej šírke.
- Telo textu má 16 px a riadkovanie približne 1.55. Form labels neklesajú pod 14 px.
- Rozhranie je border-first. Tieň je povolený iba na dočasne zdvihnutých prvkoch, napríklad menu alebo dialóg.
- Modrá znamená značku, odkaz a primárnu akciu. Zelená, oranžová a červená patria iba stavom.

## Povrchy

- Landing: Warm Paper `#F6F5F1` a biela.
- App shell: App Background `#F7F8FA`.
- Sidebar: Deep Ink `#172033`.
- Formuláre, tabuľky a faktúry: biela s hranou Rule `#D8DEE8`.
- Aktívna navigácia: tónovaná modrá plocha, nie žiariaci rám.

## Komponenty

- Tlačidlo: výška najmenej 44 px, radius 8 px, jasný hover, focus, active a disabled stav.
- Input: viditeľná hranica, label nad poľom, focus ring s dostatočným kontrastom; placeholder nikdy nenahrádza label.
- Panel: jeden súvislý obsahový celok, nie dekoratívna karta.
- Tabuľka: pravé zarovnanie súm, konzistentné dátumy, celý riadok môže byť cieľom iba ak je zjavne klikateľný.
- Dialóg: jedna úloha, jasný titul, primárna akcia vpravo a bezpečné zavretie cez Escape.
- Toast: stručný výsledok akcie; nesmie zakrývať navigáciu ani hlavný CTA.

## Responzivita

- 320–479 px: jedna kolóna, 16 px okraje, ovládacie prvky na celú šírku podľa potreby.
- 480–767 px: stále jedna hlavná kolóna, kompaktné riadky a spodná/mobilná navigácia.
- 768–1199 px: adaptívna mriežka a zbaliteľný sidebar.
- 1200 px a viac: plný pracovný shell bez orezaných rámov.
- Tabuľky na mobile prechádzajú na čitateľné riadky/karty; horizontálny scroll je posledná možnosť.

## Pohyb a interakcia

- Hover: 150 ms; mierna zmena farby alebo posun najviac 1 px.
- Menu a popover: 200 ms, opacity + translateY 4 px.
- Dialóg: 230 ms, opacity + scale 0.985.
- Zmena pohľadu: 230 ms, opacity + translateY 6 px.
- Landing reveal: 360–420 ms; bez nekonečných dekoratívnych slučiek.
- Všetky animácie používajú transform a opacity a musia byť prerušeniteľné.
- Pri reduced motion sa prechody skracujú alebo vypnú.

## Zakázané vzory

- gradientové hero pozadia,
- svietiace orby a sklenené panely,
- stocková fotografia ako náhrada produktového dôkazu,
- ikonka dokumentu s fajkou,
- texty v malých verzálkach s veľkým trackingom,
- tri a viac rovnako výrazných CTA,
- tieň na každom paneli,
- falošné dáta vydávané za živé používateľské dáta.

/* Hallmark · genre: modern-minimal · marketing: Narrative Workflow · app: Workbench · theme: Načas Blue / Deep Ink / Warm Paper · enrichment: real product UI · nav: N9 · footer: Ft5 · designed-as-app */
