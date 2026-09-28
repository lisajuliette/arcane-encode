/**
 * Deterministic glyph field for the hero "Signal / encode.sys" panel.
 *
 * Must stay deterministic (same seed -> same output) so server and client
 * render identical text and there is no hydration mismatch.
 * Output is plain text; render it inside <pre> as a React text child
 * (React escapes "<" and ">", which matters: this string contains them).
 */

const GLYPHS = ["·", "·", "·", ":", "/", "+", "0", "1", "_", "=", "<", ">", " ", " "] as const;

export type GlyphMark = { row: number; col: number; text: string };

export type GlyphFieldOptions = {
  rows: number;
  cols: number;
  seed?: number;
  marks?: GlyphMark[];
};

export function generateGlyphField({ rows, cols, seed = 7, marks = [] }: GlyphFieldOptions): string {
  let s = seed;
  const lines: string[] = [];

  for (let r = 0; r < rows; r++) {
    let line = "";
    for (let c = 0; c < cols; c++) {
      s = (s * 9301 + 49297) % 233280;
      line += GLYPHS[Math.floor((s / 233280) * GLYPHS.length)];
    }
    lines.push(line);
  }

  for (const { row, col, text } of marks) {
    if (row < 0 || row >= lines.length) continue;
    const l = lines[row];
    lines[row] = (l.slice(0, col) + text + l.slice(col + text.length)).slice(0, cols);
  }

  return lines.join("\n");
}

/** Presets that reproduce the design exactly. */
export const GLYPH_PRESETS = {
  desktop: {
    rows: 24,
    cols: 46,
    seed: 7,
    marks: [
      { row: 6, col: 4, text: "ARCANE" },
      { row: 7, col: 12, text: "ENCODE" },
      { row: 15, col: 3, text: ">> STEPCRAFT.BUILD" },
      { row: 18, col: 14, text: "OPERATORS=3" },
    ],
  },
  mobile: {
    rows: 12,
    cols: 36,
    seed: 11,
    marks: [
      { row: 3, col: 3, text: "ARCANE" },
      { row: 4, col: 11, text: "ENCODE" },
      { row: 9, col: 2, text: ">> STEPCRAFT.BUILD" },
    ],
  },
} satisfies Record<string, GlyphFieldOptions>;

/**
 * Optional motion (see docs/05-motion-and-a11y.md): returns a copy of the
 * field with `count` random non-mark, non-space cells swapped for another glyph.
 * Only call on the client, after mount, and never when reduced motion is on.
 */
export function flickerGlyphField(field: string, count: number, protectedText: string[] = []): string {
  const chars = field.split("");
  const protectedRanges: Array<[number, number]> = [];
  for (const t of protectedText) {
    let i = field.indexOf(t);
    while (i !== -1) {
      protectedRanges.push([i, i + t.length]);
      i = field.indexOf(t, i + 1);
    }
  }
  const isProtected = (i: number) => protectedRanges.some(([a, b]) => i >= a && i < b);

  for (let n = 0; n < count; n++) {
    const i = Math.floor(Math.random() * chars.length);
    if (chars[i] === "\n" || chars[i] === " " || isProtected(i)) continue;
    chars[i] = GLYPHS[Math.floor(Math.random() * (GLYPHS.length - 2))];
  }
  return chars.join("");
}
