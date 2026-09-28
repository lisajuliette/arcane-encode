import { cn } from "@/lib/cn";

type AsciiPortraitProps = {
  art: string;
  name: string;
  className?: string;
};

/**
 * Renders ASCII art as an SVG so it scales to any frame size without
 * wrapping, clipping unevenly, or changing glyph proportions.
 */
export function AsciiPortrait({ art, name, className }: AsciiPortraitProps) {
  const lines = art.replace(/\s+$/u, "").split("\n");
  const cols = Math.max(1, ...lines.map((line) => line.length));
  const rows = Math.max(1, lines.length);

  // Monospace metrics in viewBox units (char cell ≈ 0.6em wide × 1em tall)
  const charW = 6;
  const charH = 10;
  const vbW = cols * charW;
  const vbH = rows * charH;
  const fontSize = charH * 0.92;

  return (
    <svg
      viewBox={`0 0 ${vbW} ${vbH}`}
      className={cn("h-full w-full text-glyph", className)}
      role="img"
      aria-label={`Portrait of ${name}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <text
        fill="currentColor"
        fontFamily="var(--font-geist-mono), ui-monospace, monospace"
        fontSize={fontSize}
        xmlSpace="preserve"
      >
        {lines.map((line, i) => (
          <tspan key={i} x={0} y={(i + 0.85) * charH}>
            {line.padEnd(cols, " ")}
          </tspan>
        ))}
      </text>
    </svg>
  );
}
