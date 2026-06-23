# Project context for Claude (Design + Code)

This repo is a real React + Tailwind v4 design system used to prove the
Claude Design <-> Claude Code loop: design from real coded components, and
have the output be engineering-ready with no UI re-implementation.

## Read first
`DESIGN.md` is the enforceable contract — composition rules, token vocabulary,
and the component inventory. Follow it exactly.

## Structure
- Tokens: CSS variables in `src/index.css` (OKLCH). Brand primary is teal.
- Generic primitives: `src/components/ui/*.tsx` (real source in-repo).
- Domain components: `src/components/publishing/*` (typed against
  `publishing/types.ts`) — this is the product vocabulary to compose with.
- Demo page: `src/App.tsx` (a journal homepage built from domain components).
- Alias: `@/*` -> `./src/*`.

## Rules when building or syncing
- Compose existing components by name (prefer `publishing/` domain components,
  e.g. `ArticleCard`, `JournalHeader`, `ArticleMeta`).
- Reference tokens via utilities (`bg-primary`, `text-muted-foreground`).
- Never hardcode colors/sizes; never hand-roll a component that already exists;
  never invent a new generic component in page code.
- Output must pass `npm run lint`, `npm run typecheck`, `npm run build`, `npm test`.
