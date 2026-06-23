// OFF-SYSTEM: hand-rolled card — intentional lint violation for CI gate demo.
// This file uses hardcoded hex colors instead of design tokens.
// Expected: ds/no-hardcoded-colors error on lint.

export function OffSystemCard() {
    return (
          <div style={{ backgroundColor: "#1a1a2e", color: "#e0e0e0", padding: "24px", borderRadius: "8px" }}>
                  <h2 style={{ color: "#ff6b6b" }}>Off-System Heading</h2>h2>
                  <p className="text-[#e0e0e0]">
                          This card was hand-rolled outside the design system.
                          It uses hardcoded hex values instead of token utilities.
                  </p>p>
                <button
                          style={{ background: "#4ecdc4", color: "#ffffff" }}
                          className="bg-[#4ecdc4] px-4 py-2 rounded"
                        >
                        Off-system button
                </button>button>
          </div>div>
        );
}</p>
