# Design System Proof — real coded components → Claude Design → engineering-ready code

A **real** React + Tailwind v4 design system, built to prove one claim:

> You can design from real coded components, and what Claude Design produces is
> the actual components composed correctly — so engineering wires logic instead
> of re-implementing UI.

This is the *honest* version of the claim: not "ships with zero engineering," but
"the view-layer translation step is gone — no component re-implementation, no
pixel-matching rework."

## What's in here
- **Tokens** — CSS variables in `src/index.css` (OKLCH). Brand `--primary` is a
  distinctive teal so you can *see* it carried through the loop, not hardcoded hex.
- **Generic primitives** — `src/components/ui/*` (11 real components).
- **Domain layer** — `src/components/publishing/*`: `JournalHeader`,
  `ArticleCard` (featured/default/compact), `ArticleMeta`, `CitationActions`,
  `SearchBar`, `IssueNavigation` — typed against `publishing/types.ts`. This is
  what turns the proof from "AI can use buttons" into "AI composes a real product
  component system."
- **Demo page** — `src/App.tsx`, a journal homepage built entirely from the
  domain components.
- **`DESIGN.md`** — the enforceable composition rules + token/component inventory.
- **CI** — `.github/workflows/ci.yml` gates lint, typecheck, build, tests. This is
  the drift barrier: off-system output fails the merge.

## Quality gate (all green)
```
npm install
npm run lint        # off-system markup / fast-refresh hygiene
npm run typecheck   # component contracts hold
npm run build       # production build
npm test            # components render + compose correctly
```

## The cloud-only loop (no local terminal)
1. Push this repo to **GitHub** (private is fine).
2. In **Claude Design** → create/select an org project → **Import → From GitHub**
   → select this repo (point at `src/components` + `src/index.css` + `DESIGN.md`).
   For a team proof, have an admin approve + lock it as the standard system.
3. Build one real page on the canvas, naming domain components explicitly:
   *"Use ArticleCard variant=featured for the lead, JournalHeader for the masthead."*
4. **Hand off to Claude Code (web)** → target this repo + a new branch.
5. CI runs on the branch. **Diff the branch against `main`** — this is the proof.

## What the diff must show (the PASS condition)
- imports real components — an actual `<ArticleCard variant="featured" … />`,
  not re-implemented card markup;
- token-bound utilities (`bg-primary`, the teal), not hardcoded values;
- CI green.

Legitimately left to engineering: data binding, state, routing, API wiring,
accessibility verification, release. That's logic — never design's job.

## Honest limits (so nothing ambushes the demo)
- Import is a **snapshot**, not a watcher — re-import after any component/token change.
- Import fidelity is only as good as the source. `publishing/` is an *illustrative*
  domain layer; swap in the real product component library to run the same proof
  against production code.
- Visual-regression (Playwright/Chromatic) is the recommended next CI gate for
  full drift protection.
