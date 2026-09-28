import { cn } from "@/lib/cn";

type LabelProps = {
  as?: "span" | "div" | "p";
  tone?: "ink" | "muted" | "faint" | "accent";
} & React.HTMLAttributes<HTMLElement>;

const toneClasses = {
  ink: "text-ink",
  muted: "text-ink-muted",
  faint: "text-glyph",
  accent: "text-accent-text",
} as const;

export function Label({
  as: Comp = "span",
  tone = "ink",
  className,
  ...props
}: LabelProps) {
  return (
    <Comp className={cn("type-label", toneClasses[tone], className)} {...props} />
  );
}
