# Product
<!-- impeccable:product-schema 1 -->

## Platform
web

## Users
Primárne živnostníci, freelanceri a malé firmy v Česku a na Slovensku. Používatelia často nie sú účtovníci; potrebujú vystaviť správnu faktúru rýchlo, bez zbytočnej administratívy a bez učenia sa zložitého systému.

## Product Purpose
Cifra je jednoduchý fakturačný nástroj na tvorbu, úpravu, odoslanie a sledovanie faktúr. Pomáha používateľovi dostať faktúru od prázdneho formulára k zákazníkovi v priebehu pár minút a pridať QR platbu bez manuálneho prepisovania údajov.

## Positioning
Rýchla, pokojná a dôveryhodná fakturácia pre ľudí, ktorí chcú mať podnikanie pod kontrolou bez účtovníckeho chaosu. Cifra má byť zrozumiteľnejšia a priamejšia než robustné účtovné systémy, pričom pôsobí profesionálne pred zákazníkom.

## Operating Context
Webová aplikácia používaná najmä na notebooku a desktope, s použiteľným mobilným zobrazením. Trh je Česko a Slovensko, preto musí rozhranie počítať s lokálnymi formátmi dát, mien, bankových údajov, variabilného symbolu a QR platby. Verejná landing page má viesť k registrácii; prihlásená časť má sústrediť používateľa na prehľad faktúr a ďalší jasný krok.

## Capabilities and Constraints
- Vytvorenie a úprava faktúry.
- Údaje dodávateľa, odberateľa, položiek, DPH, splatnosti a platby.
- Automatický výpočet súm a generovanie QR platby.
- Náhľad, export/odoslanie faktúry a evidencia stavu úhrady.
- Priamy onboarding s krátkym návodom a zrozumiteľnými prázdnymi stavmi.
- Rozhranie musí zostať jednoduché aj pri rozširovaní o kontakty, nastavenia a platby.
- Prototyp je samostatný HTML súbor; interakcie majú byť funkčné bez narušenia vizuálnej stability, responzivity alebo čitateľnosti.

## Brand Commitments
- Jasnosť pred dekoráciou.
- Profesionálny, moderný a pokojný dojem bez low-cost SaaS estetiky.
- Veľkorysá typografia, silná hierarchia a čitateľný text.
- Dôvera, presnosť a kontrola pri finančných údajoch.
- Každá obrazovka má používateľovi ukázať, čo sa stalo a čo môže urobiť ďalej.

## Evidence on Hand
- Používateľ definoval cieľ ako fakturáciu s QR kódom, úpravami a funkčným loginom, landing page a dashboardom.
- Používateľ opakovane označil malé texty, náhodné fonty, tiene, rozpadnutý layout a AI-slop estetiku za problémy.
- Existujúci prototyp je v `outputs/faktury-dashboard.html` a používa značku Cifra.
- Referenčný smer: vizuálne pokojná produktová aplikácia podobná SubSentry, doménovo inšpirovaná jednoduchou fakturáciou ako FaktuRyWeb.

## Product Principles
1. Jeden hlavný krok na obrazovku.
2. Faktúra musí byť rýchlejšia než tabuľka alebo dokument.
3. Peniaze a termíny zobrazovať výrazne, jednoznačne a bez vizuálneho šumu.
4. Predvolené hodnoty a automatizácia znižujú prepisovanie, nie kontrolu.
5. Komponenty, spacing a typografia tvoria jeden konzistentný systém.
6. Prístupnosť a responzivita sú súčasťou kvality, nie dodatočná oprava.

## Accessibility & Inclusion
Text a ovládacie prvky musia zostať čitateľné pri bežnom zväčšení, mať dostatočný kontrast a jasné focus/hover/disabled stavy. Klikateľné plochy majú byť pohodlné aj na dotyk. Stav faktúry, chyba ani úspech nesmú byť komunikované iba farbou; používateľ musí dostať aj textové vysvetlenie.
