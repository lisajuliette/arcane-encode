import { cn } from "@/lib/cn";

type HeadingSize = "display" | "h1" | "h2" | "h3";
type HeadingMobileSize = "display-sm" | "h1-sm" | "h2" | "h2-sm" | "h3";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "div";
  size: HeadingSize;
  mobileSize?: HeadingMobileSize;
  tone?: "ink" | "muted";
} & React.HTMLAttributes<HTMLHeadingElement>;

const defaultMobile: Record<HeadingSize, HeadingMobileSize> = {
  display: "display-sm",
  h1: "h1-sm",
  h2: "h2-sm",
  h3: "h3",
};

const mobileClasses: Record<HeadingMobileSize, string> = {
  "display-sm": "type-display-sm",
  "h1-sm": "type-h1-sm",
  h2: "type-h2",
  "h2-sm": "type-h2-sm",
  h3: "type-h3",
};

const desktopClasses: Record<HeadingSize, string> = {
  display: "lg:type-display",
  h1: "lg:type-h1",
  h2: "lg:type-h2",
  h3: "lg:type-h3",
};

const toneClasses = {
  ink: "text-ink",
  muted: "text-ink-muted",
} as const;

export function Heading({
  as,
  size,
  mobileSize,
  tone = "ink",
  className,
  ...props
}: HeadingProps) {
  const Comp = as ?? (size === "display" ? "h1" : size);
  const mobile = mobileSize ?? defaultMobile[size];

  return (
    <Comp
      className={cn(
        mobileClasses[mobile],
        desktopClasses[size],
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
