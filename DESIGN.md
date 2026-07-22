# Vystav Design Direction

## Thesis
Vystav is a calm financial workbench for Czech and Slovak freelancers and small firms. The invoice, payment details, and next action must be immediately legible. Every surface has one confident primary action.

## Visual world
A precise cobalt ledger: bright paper, deep blue-black ink, cobalt actions, and fine blue-grey rules. Hierarchy comes from typography, alignment, and spacing. Decorative gradients, glass panels, oversized rounding, ornamental shadows, fake browser chrome, and tiny uppercase labels are excluded.

## Typography
The public landing uses Bricolage Grotesque for the wordmark and display headlines, giving Vystav an individual but restrained voice. Product UI and body copy use Instrument Sans with Aptos and Segoe UI Variable fallbacks. Financial values use tabular numerals. Body and controls stay at 15–17px; metadata never falls below 13px.

## Surfaces and components
Public surfaces use Vystav Cobalt tokens from `tokens.css`. The authenticated workspace keeps its bright ledger canvas and dark navigation rail. Cards use fine rules, restrained 10–18px radii, and no default shadow. Status colors communicate payment state only. Buttons, fields, tabs, tables, and invoice previews share focus, spacing, and active-state conventions.

## Layout and behavior
The landing follows a product-first Workbench structure: three-part sticky navigation, concise hero, live invoice demo, workflow proof, capability ledger, and closing statement. The demo is real DOM with overview, invoice, and scannable Czech SPD QR states. At narrow widths, layout stacks before typography shrinks; controls remain at least 40px high.

## Motion and accessibility
Use 120–420ms ease-out transitions for hero settle, demo crossfade, button feedback, and sticky navigation only. Respect `prefers-reduced-motion`. Preserve visible keyboard focus, semantic tabs, meaningful button labels, and text alongside status color.

## Exports

`tokens.css` is the source of truth and ships beside both generated HTML files.

### Tailwind v4
```css
@theme {
  --color-paper: oklch(98% 0.008 255);
  --color-paper-2: oklch(95.5% 0.012 255);
  --color-paper-3: oklch(92% 0.016 255);
  --color-ink: oklch(18% 0.025 255);
  --color-ink-2: oklch(31% 0.028 255);
  --color-muted: oklch(49% 0.025 255);
  --color-rule: oklch(86% 0.020 255);
  --color-accent: oklch(55% 0.230 260);
  --color-focus: oklch(67% 0.180 260);
  --font-display: "Bricolage Grotesque", "Instrument Sans", sans-serif;
  --font-body: "Instrument Sans", Aptos, sans-serif;
  --spacing-xs: .5rem;
  --spacing-sm: .75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2.5rem;
  --radius-card: 14px;
  --radius-input: 10px;
  --ease-out: cubic-bezier(.16,1,.3,1);
}
```

### DTCG tokens.json
```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": {"$value":"oklch(98% 0.008 255)","$type":"color"},
    "ink": {"$value":"oklch(18% 0.025 255)","$type":"color"},
    "muted": {"$value":"oklch(49% 0.025 255)","$type":"color"},
    "rule": {"$value":"oklch(86% 0.020 255)","$type":"color"},
    "accent": {"$value":"oklch(55% 0.230 260)","$type":"color"},
    "focus": {"$value":"oklch(67% 0.180 260)","$type":"color"}
  },
  "font": {
    "display": {"$value":"Bricolage Grotesque, Instrument Sans, sans-serif","$type":"fontFamily"},
    "body": {"$value":"Instrument Sans, Aptos, sans-serif","$type":"fontFamily"}
  },
  "duration": {
    "micro": {"$value":"120ms","$type":"duration"},
    "short": {"$value":"220ms","$type":"duration"},
    "long": {"$value":"420ms","$type":"duration"}
  }
}
```

### shadcn/ui
```css
:root {
  --background: 98% 0.008 255;
  --foreground: 18% 0.025 255;
  --card: 95.5% 0.012 255;
  --card-foreground: 18% 0.025 255;
  --primary: 55% 0.230 260;
  --primary-foreground: 98% 0.006 255;
  --secondary: 92% 0.016 255;
  --secondary-foreground: 31% 0.028 255;
  --muted: 86% 0.020 255;
  --muted-foreground: 49% 0.025 255;
  --border: 86% 0.020 255;
  --input: 86% 0.020 255;
  --ring: 67% 0.180 260;
  --radius: 0.875rem;
}
```
