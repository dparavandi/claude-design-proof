import { describe, it, expect } from "vitest"
import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"

// Guard the FONT TOKENS themselves — the one drift vector ESLint can't see,
// because it lives in CSS, not JS/TSX. A font swap (e.g. repointing
// --font-heading to "Times New Roman") happens here, in index.css, and would
// otherwise slip both nets. This test closes that gap: the primary family of
// every font token must be an approved brand family.

const APPROVED = ["Geist Variable", "Geist Mono"]

const cssPath = resolve(dirname(fileURLToPath(import.meta.url)), "../index.css")
const css = readFileSync(cssPath, "utf8")

const decls: Record<string, string> = {}
for (const m of css.matchAll(/(--font-[\w-]+)\s*:\s*([^;]+);/g)) {
  decls[m[1]] = m[2].trim()
  }

  function resolve1(value: string): string {
    const v = value.match(/^var\(\s*(--[\w-]+)\s*\)$/)
      return v && decls[v[1]] ? decls[v[1]] : value
      }

      function primaryFamily(value: string): string {
        return resolve1(value).split(",")[0].trim().replace(/^['"]|['"]$/g, "")
        }

        describe("brand fonts", () => {
          it("defines the expected font tokens", () => {
              expect(Object.keys(decls).length).toBeGreaterThan(0)
                })

                  for (const [token, value] of Object.entries(decls)) {
                      it(`${token} resolves to an approved brand family`, () => {
                            const family = primaryFamily(value)
                                  expect(
                                          APPROVED.includes(family),
                                                  `${token} primary family is "${family}" — off-brand. Approved: ${APPROVED.join(", ")}.  ` +
                                                            `Use a Geist family or point at an approved --font-* token.`
                                                                  ).toBe(true)
                                                                      })
                                                                        }
                                                                        })
