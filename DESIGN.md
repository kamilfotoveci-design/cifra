# Cifra Design Direction

## Thesis
Cifra is a calm financial workbench for getting paid, not a generic dashboard. The interface should make the invoice and its payment state feel immediately legible, with one confident action per surface.

## Visual world
The visual language is based on a precise blue ledger: warm white paper surfaces, ink-black text, cobalt actions, and fine blue-grey rules. Structure comes from alignment, spacing, and typography; decorative gradients, floating glass, and ornamental shadows are excluded.

## Typography
Use Instrument Sans when available, then Aptos/Segoe UI Variable/system fallbacks. Financial values use tabular Instrument Sans numerals for a consistent, humanist reading rhythm. Use a restrained scale: 13px metadata, 15–16px body and controls, 18–20px section titles, 36px app titles, and fluid display type only on the landing page. Use 400/500/600/700 weights with generous line-height for reading and tighter line-height for display numbers.

## Surfaces and components
Public surfaces use deep ink `#091426` with cobalt signal `#2457ff`; the authenticated workspace uses a bright ledger canvas `#f6f8fb` and paper `#ffffff`. Ink `#101828`, muted `#667085`, rule `#dbe2ec`, and deep navy `#10213f` keep the system grounded. Cards use a 16px radius and a 1px rule, with no default shadow. Status colors are reserved for payment state. Buttons, fields, navigation, tables, and the invoice modal share the same radius, focus ring, and spacing rhythm.

## Layout and behavior
Landing is a two-column proof-first composition that collapses to one column. Auth is a focused single-card flow. The app is a persistent dark navigation rail plus a bright operational workspace. Dashboard content uses a flexible stat grid, a wider income panel, a quick-action rail, and a responsive invoice table. At narrow widths, controls wrap or stack before text shrinks; the table scrolls as a bounded region.

## Motion and accessibility
Use short ease-out transitions for controls and a restrained modal/toast entrance. Respect `prefers-reduced-motion`. Keep body text at or above 15px, preserve visible focus states, and communicate payment state with text as well as color.
