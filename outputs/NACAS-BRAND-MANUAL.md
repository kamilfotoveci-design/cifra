# Načas — brand manuál

Načas je pokojná fakturačná aplikácia pre živnostníkov a malé firmy v Česku a na Slovensku. Značka nehrá na „účtovnícky softvér“. Jej prísľub je jednoduchší: práca sa zmení na profesionálny doklad a platbu bez zdržania.

## 1. Značková myšlienka

**Od práce k platbe. Načas.**

Názov sa píše `Načas`. Verzálky používame iba tam, kde sú prirodzenou súčasťou exportovaného loga. V texte nikdy nepíšeme `NAČAS` ako krikľavý nadpis.

Hodnoty značky:

- presnosť bez úradníckeho tónu,
- pokoj namiesto zahltenia,
- rýchlosť bez pocitu lacnej skratky,
- lokálnosť pre české a slovenské podnikanie.

## 2. Logo a symbol

Primárne logo je slovná značka `načas` s plynulým symbolom malého `n`. Modrý súvislý ťah predstavuje cestu od práce k platbe; samostatný tmavý bod nad koncom ťahu je presný termín — malý, ale nezameniteľný moment dokončenia.

- Primárne logo: `outputs/assets/nacas-logo.svg`.
- Samostatná značka: `outputs/assets/nacas-icon.svg`.
- Minimálna šírka loga: 112 px.
- Ochranná zóna: najmenej výška písmena `n` zo všetkých strán.
- Logo nenaťahujeme, neotáčame, nevkladáme do farebného štvorca a nepridávame tieň.
- Symbol faktúry, fajka ani hodiny nie sú súčasťou identity.

## 3. Farby

| Úloha | Farba | Použitie |
| --- | --- | --- |
| Načas Blue | `#3157D5` | primárne akcie, aktívny stav, linky |
| Deep Ink | `#172033` | nadpisy, navigácia, tmavé plochy |
| Warm Paper | `#F6F5F1` | marketingové pozadie a dokumentový tón |
| App Background | `#F7F8FA` | pracovná plocha aplikácie |
| White | `#FFFFFF` | formuláre, tabuľky, PDF |
| Rule | `#D8DEE8` | deliace čiary a hranice |
| Muted | `#667085` | sekundárny text |
| Paid | `#087A55` | uhradené |
| Waiting | `#A65C00` | čaká na úhradu |
| Overdue | `#C43D36` | po splatnosti a chyby |

Nepoužívame tyrkysové akcenty, gradienty ani náhodné dekoratívne farby. Stavové farby označujú iba stav, nie značku.

## 4. Typografia

- Display a marketingové nadpisy: **Instrument Sans**, 600–700.
- Rozhranie a text: **Inter**, 400–700.
- Čísla vo faktúrach používajú tabuľkové číslice, kde ich prehliadač podporuje.
- Bežný text má minimálne 16 px, pomocný text 14 px. Menší text je vyhradený iba pre zákonné alebo dokumentové metadáta.
- Nadpisy majú tesnejší rytmus, nie extrémne hrubé rezy ani násilné zalamovanie.

## 5. Jazyk značky

Píšeme priamo, ľudsky a konkrétne. Jedna veta má niesť jednu informáciu.

**Áno:** „Pridať klienta“, „Skontrolovať doklad“, „Stiahnuť PDF“, „Čaká na úhradu“.

**Nie:** „Odomknite svoj finančný potenciál“, „Revolučná fakturácia“, „Váš ultimátny nástroj“.

Slovenský produktový slogan: **Faktúry načas. Platby bez prepisovania.**

Český produktový slogan: **Faktury včas. Platby bez přepisování.**

## 6. Rozhranie

- Jedna primárna modrá akcia na pohľad.
- Hierarchiu tvorí typografia, priestor a tenké deliace čiary, nie tiene a karty v kartách.
- Rohy sú striedme: 8 px ovládacie prvky, 12–14 px väčšie plochy.
- Ikony sú jednoduché líniové SVG s jednotnou hrúbkou 1.75–2 px.
- Prázdne stavy vždy vysvetlia situáciu a ponúknu jeden ďalší krok.
- Landing používa reálne produktové rozhranie, nie falošný browser chrome, 3D objekty alebo stockové fotografie.

## 7. Pohyb

Pohyb vysvetľuje zmenu stavu. Charakteristickým motívom je termínová čiara, ktorá sa krátko doplní pri potvrdení alebo prechode.

- Mikrointerakcie: 140–170 ms.
- Zmena obrazovky, menu, dialóg: 200–260 ms.
- Landing reveal: najviac 420 ms.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Bez poskakovania, nekonečných animácií a veľkého parallaxu.
- `prefers-reduced-motion` vypína všetok nepodstatný pohyb.

## 8. Faktúry a PDF

Na faktúre má prednosť značka dodávateľa. Symbol Načas je malý, monochromatický a umiestnený vľavo hore ako podpis nástroja. Nikdy nesmie súperiť s logom firmy, sumou ani QR platbou.

Dokument používa biely papier, jasnú typografickú hierarchiu, dostatok miesta a minimum farebných plôch. Stav faktúry nesie zelenú, oranžovú alebo červenú iba v digitálnom náhľade.

## 9. Kontrolný zoznam

- Je názov napísaný `Načas`?
- Je hlavná akcia modrá a jediná dominantná?
- Je text čitateľný bez malých kapitálok a technického žargónu?
- Má každý stav jasnú odozvu?
- Je rozhranie funkčné pri 320 px aj na veľkom monitore?
- Je pri animáciách rešpektovaný reduced motion?
