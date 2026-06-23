// OFF-SYSTEM: intentional ds/no-hardcoded-colors violations for CI gate demo.
// Each hex literal and Tailwind arbitrary color below should be a token reference.

// Raw hex literals — each triggers ds/no-hardcoded-colors (literal)
export const CARD_BG = "#1a1a2e";
export const CARD_FG = "#e0e0e0";
export const ACCENT = "#ff6b6b";
export const BTN_BG = "#4ecdc4";
export const BTN_FG = "#ffffff";

// Tailwind arbitrary color values — triggers ds/no-hardcoded-colors (arbitrary)
export const cardClasses = "bg-[#1a1a2e] text-[#e0e0e0] p-6 rounded-lg";
export const headingClasses = "text-[#ff6b6b] text-xl font-bold";
export const buttonClasses = "bg-[#4ecdc4] text-[#ffffff] px-4 py-2 rounded";
