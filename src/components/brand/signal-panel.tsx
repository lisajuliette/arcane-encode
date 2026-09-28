import { cn } from "@/lib/cn";
import { GlyphField } from "./glyph-field";

type SignalPanelProps = {
  titleLeft: string;
  titleRight: string;
  footerLeft: string;
  footerRight: string;
  preset: "desktop" | "mobile";
  animate?: boolean;
  className?: string;
};

export function SignalPanel({
  titleLeft,
  titleRight,
  footerLeft,
  footerRight,
  preset,
  animate = false,
  className,
}: SignalPanelProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex flex-col border border-line bg-surface-raised",
        className,
      )}
    >
      <div className="type-label flex justify-between border-b border-line px-4 py-3 text-ink-muted">
        <span>{titleLeft}</span>
        <span>{titleRight}</span>
      </div>
      <GlyphField preset={preset} animate={animate} />
      <div className="type-label flex justify-between border-t border-line px-4 py-3 text-ink-muted">
        <span>{footerLeft}</span>
        <span className="text-ink">{footerRight}</span>
      </div>
    </div>
  );
}
