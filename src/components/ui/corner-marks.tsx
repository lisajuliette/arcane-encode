import { cn } from "@/lib/cn";

type Corner = "tl" | "tr" | "bl" | "br";

type CornerMarksProps = {
  corners?: Corner[];
  inset?: 16 | 24 | 40;
  className?: string;
};

const insetClasses = {
  16: {
    tl: "top-4 left-4",
    tr: "top-4 right-4",
    bl: "bottom-4 left-4",
    br: "bottom-4 right-4",
  },
  24: {
    tl: "top-6 left-6",
    tr: "top-6 right-6",
    bl: "bottom-6 left-6",
    br: "bottom-6 right-6",
  },
  40: {
    tl: "top-10 left-10",
    tr: "top-10 right-10",
    bl: "bottom-10 left-10",
    br: "bottom-10 right-10",
  },
} as const;

export function CornerMarks({
  corners = ["tl", "tr", "bl", "br"],
  inset = 16,
  className,
}: CornerMarksProps) {
  return (
    <>
      {corners.map((corner) => (
        <span
          key={corner}
          aria-hidden
          className={cn(
            "type-label pointer-events-none absolute select-none text-glyph",
            insetClasses[inset][corner],
            className,
          )}
        >
          +
        </span>
      ))}
    </>
  );
}
