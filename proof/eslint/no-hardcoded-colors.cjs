/**
 * ESLint (flat-config) plugin: ban hardcoded colors in application code.
 *
 * This is the enforcement half of DESIGN.md: colors must come from tokens —
 * Tailwind utilities bound to the OKLCH tokens (bg-primary, text-muted-foreground,
 * border-border) or `var(--token)` — never raw values. Wiring this into the repo's
 * eslint.config.js makes `npm run lint` (and therefore CI) reject drift.
 *
 * Flags
 *  - Raw color literals:  #rgb / #rrggbb / #rrggbbaa, and rgb()/rgba()/hsl()/hsla()/
 *    oklch()/oklab()/lab()/lch()/color() function literals.
 *  - Tailwind arbitrary color values in class strings: bg-[#fff], text-[rgb(...)],
 *    border-[oklch(...)].
 *
 * Allows
 *  - Token utilities (no brackets): bg-primary, text-muted-foreground, …
 *  - CSS variables: var(--primary). (color-mix(in oklch, var(--x) …) is not flagged.)
 *
 * Note: ESLint only lints JS/TS/JSX, so the token *definitions* in your CSS
 * (tokens/*.css, src/index.css) are never touched — only application code.
 */

const HEX = /#[0-9a-fA-F]{3,8}\b/;
const COLOR_FN = /\b(?:rgb|rgba|hsl|hsla|oklch|oklab|lab|lch|color)\(/;
const TW_ARBITRARY_COLOR =
  /-\[\s*(?:#[0-9a-fA-F]{3,8}|(?:rgb|rgba|hsl|hsla|oklch|oklab|lab|lch|color)\()/;

function inspect(context, node, raw) {
  if (typeof raw !== "string" || raw.length === 0) return;
  if (TW_ARBITRARY_COLOR.test(raw)) {
    context.report({ node, messageId: "arbitrary" });
    return;
  }
  if (HEX.test(raw) || COLOR_FN.test(raw)) {
    context.report({ node, messageId: "literal" });
  }
}

const noHardcodedColors = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow hardcoded colors in application code; use design tokens.",
    },
    messages: {
      literal:
        "Hardcoded color. Use a design token — a Tailwind utility bound to a --token (e.g. bg-primary) or var(--token).",
      arbitrary:
        "Tailwind arbitrary color value. Use a token utility (e.g. bg-primary) instead of bg-[#…].",
    },
    schema: [],
  },
  create(context) {
    return {
      Literal(node) {
        if (typeof node.value === "string") inspect(context, node, node.value);
      },
      TemplateElement(node) {
        inspect(context, node, node.value && node.value.raw);
      },
    };
  },
};

module.exports = {
  rules: { "no-hardcoded-colors": noHardcodedColors },
};
