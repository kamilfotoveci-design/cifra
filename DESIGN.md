# Vystav — locked product design system

Vystav is a calm invoicing workspace for Czech and Slovak freelancers and small firms. Every surface should feel precise, legible and composed. The product earns trust through clarity, not decoration.

## Genre

Modern-minimal with a restrained financial-product character.

## Structure

- Marketing: one decisive hero, one live product canvas, one concise capability sequence and one closing action.
- Product: stable navigation, divided information bands, clear tables and forms, one primary action per screen.
- Documents: white paper, typographic hierarchy, generous margins and quiet Vystav icon.

## Brand

- Primary blue: `#1D4ED8`.
- Accent turquoise: `#35D2C3`.
- Dark text: `#1E293B`.
- Light background: `#F8FAFC`.
- Supporting colour is semantic only: green for paid, amber for waiting, red for overdue.
- No decorative gradients, glass panels, floating pills, oversized rounding, ornamental shadows or icon confetti.

## Typography

- Display and body: Inter.
- Supporting emphasis: Manrope, used sparingly.
- Weights: 400 for reading, 500 for controls and data, 700 for headings and primary actions.
- Financial values use tabular numerals.
- Body copy is 16–18 px. Operational metadata never falls below 13 px.
- Headlines are compact, sentence case and tightly tracked. Tiny all-caps labels are not part of the brand.

## Components

- Controls: 48 px standard height, 8 px radius.
- Panels: 12–14 px radius, 1 px cool rule, no default shadow.
- Primary buttons: brand-blue fill, white text, compact copy tied to a real action.
- Turquoise is a signature detail, not a second competing CTA colour.
- Secondary actions: text or hairline border, never a competing filled colour.
- Product previews use real DOM and real states rather than decorative device frames.

## Layout

- Maximum content width: 1240 px.
- The landing page uses generous vertical rhythm and no more than one enriched product composition per viewport.
- App layouts stack before typography shrinks.
- Repeated equal cards are replaced by divided bands, ledgers or tables.

## Motion

- Micro feedback: 140–180 ms.
- Section and product transitions: 320–520 ms with `cubic-bezier(0.16, 1, 0.3, 1)`.
- Motion changes opacity and transform only.
- Reduced-motion mode removes spatial movement and keeps short opacity feedback.

## Voice

- Direct, useful and local.
- Prefer concrete verbs: Vystaviť, odoslať, skontrolovať, zaplatiť.
- Never use inflated claims, invented metrics, technical theatre or “AI” language.
- Slovak and Czech copy have equal status and are written naturally, not mechanically translated.

## Logo rules

- Use the supplied primary logo and standalone icon without distortion or recolouring.
- Minimum wordmark width: 120 px.
- Clear space: at least the visual height of the letter V around the mark.
- Monochrome is reserved for one-colour documents.

## Source of truth

`tokens.css` contains shared tokens. `brand.css` is the final identity layer. `work/vystav-ui.css` retains the established application components and behaviour.

```css
/* Hallmark · genre: modern-minimal · marketing: product canvas · app: calm workspace · theme: Vystav Blue + Turquoise · designed-as-app */
```
## Iconography and support

- Interface icons use one 24 px, 1.8 px stroke SVG language with rounded caps and joins.
- Icons support visible labels; they never replace meaning on their own.
- Product support is available from the footer and authenticated navigation at `kamil.hortik@gmail.com`.
- The cookie notice describes only necessary storage, persists acknowledgement and does not imply unused analytics.

## Motion signature

- The authored landing moment is the invoice trace: the VYSTAV signature line draws, the product surface receives one restrained light pass and QR payment gets one short scan when opened.
- Authenticated navigation uses a 190 ms continuity transition; frequent controls use only immediate pressed feedback.
- Motion uses transform, opacity and clip-path, with a complete `prefers-reduced-motion` path in `enhancements.css`.