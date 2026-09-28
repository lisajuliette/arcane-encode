import { cn } from "@/lib/cn";
import { CornerMarks } from "./corner-marks";
import { Label } from "./label";

type MediaFrameProps = {
  ratio: "4/3" | "4/5" | "1/1" | "12/11";
  label?: string;
  meta?: string;
  corners?: boolean;
  children?: React.ReactNode;
  className?: string;
};

const ratioClasses = {
  "4/3": "aspect-[4/3]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "12/11": "aspect-[12/11]",
} as const;

export function MediaFrame({
  ratio,
  label,
  meta,
  corners = false,
  children,
  className,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center border border-line bg-surface-raised",
        ratioClasses[ratio],
        className,
      )}
    >
      {label ? (
        <Label
          tone="muted"
          className="absolute top-3 left-3 lg:top-4 lg:left-4"
        >
          {label}
        </Label>
      ) : null}
      {meta ? (
        <Label
          tone="faint"
          className="absolute top-3 right-3 lg:top-4 lg:right-4"
        >
          {meta}
        </Label>
      ) : null}
      {children}
      {corners ? <CornerMarks corners={["bl", "br"]} inset={16} /> : null}
    </div>
  );
}
