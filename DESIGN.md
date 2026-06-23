# Design System — composition rules & inventory

This file is the contract Claude Design and Claude Code must honor. The proof of
this repo depends on output that *composes these components and tokens* rather
than inventing new markup. Treat this as enforceable policy, not guidance.

## Enforced rules

- Application code (pages, sections, `App.tsx`) may **only** use components from
  `src/components/ui` (generic primitives) or `src/components/publishing`
  (domain components).
- **No hardcoded** colors, font sizes, spacing, radii, shadows, or breakpoints in
  application code. Use Tailwind utilities bound to the tokens below.
- **No new generic UI components** invented in application code. If a needed
  pattern does not exist, it is a **design-system change first** (add to
  `publishing/` or `ui/`), then composed — never hand-rolled inline.
- Every change must pass `lint`, `typecheck`, `build`, and `test`. CI
  (`.github/workflows/ci.yml`) blocks merges that don't.

## Token vocabulary (defined in `src/index.css`)

Color roles (OKLCH, light + dark): `background`, `foreground`, `card`,
`popover`, `primary` (brand teal), `secondary`, `muted`, `accent`,
`destructive`, `border`, `input`, `ring`, `chart-1..5`, `sidebar-*`.
Radius scale: `--radius` with `--radius-sm/md/lg/xl` derived from it.
Type: `--font-sans` (Geist Variable), `--font-heading`.

Reference these as utility classes (`bg-primary`, `text-muted-foreground`,
`border-border`, `rounded-lg`) — never as raw hex/px.

## Component inventory

### Generic primitives — `src/components/ui`
avatar, badge, button, card, dialog, input, label, pagination, select,
separator, tabs.
(Variant definitions live in sibling `*-variants.ts` files so component files
export components only — required for React Fast Refresh and clean lint.)

### Domain components — `src/components/publishing`
| Component | Composes | Key props |
| --- | --- | --- |
| `JournalHeader` | Avatar, Badge, Separator, SearchBar | `journal`, `showSearch` |
| `ArticleCard` | Card, Button, ArticleMeta, CitationActions | `article`, `variant` (`default`/`featured`/`compact`), `showAbstract`, `showActions` |
| `ArticleMeta` | Badge, Separator | `article` |
| `CitationActions` | Button | `article` |
| `SearchBar` | Input, Select, Button | `defaultScope`, `onSearch` |
| `IssueNavigation` | Button, Separator | `current`, `hasPrevious`, `hasNext`, `onNavigate` |

All domain components are typed against the contracts in
`src/components/publishing/types.ts` (`Article`, `Author`, `Journal`, `Issue`).

## What "engineering-ready" means for this repo

A handoff PASSES if the generated code:
- imports real components from `@/components/ui/*` or `@/components/publishing/*`
  (e.g. an actual `<ArticleCard variant="featured" … />`), not re-implemented markup;
- uses token-bound utilities, not hardcoded values;
- passes the CI gate above.

Left to engineering (logic, never design's job): data binding, state, routing,
API wiring, accessibility verification, tests for new behavior, release concerns.

## Honest limit

Import fidelity is only as good as this source. This is an illustrative domain
layer — swap `publishing/` for the real product component library to run the
same proof against production code. Visual-regression checks (Playwright/Chromatic)
are the recommended next CI gate for full drift protection.
