import { cn } from "@/lib/cn";

type TextProps = {
  as?: "p" | "span" | "div";
  size?: "body" | "body-sm" | "body-lg";
  tone?: "ink" | "muted";
  measure?: boolean;
} & React.HTMLAttributes<HTMLElement>;

const sizeClasses = {
  body: "type-body",
  "body-sm": "type-body-sm",
  "body-lg": "type-body-lg",
} as const;

const toneClasses = {
  ink: "text-ink",
  muted: "text-ink-muted",
} as const;

export function Text({
  as: Comp = "p",
  size = "body",
  tone = "ink",
  measure = false,
  className,
  ...props
}: TextProps) {
  return (
    <Comp
      className={cn(
        sizeClasses[size],
        toneClasses[tone],
        measure && "max-w-[540px]",
        className,
      )}
      {...props}
    />
  );
}
