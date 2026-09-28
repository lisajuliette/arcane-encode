import Image from "next/image";
import { cn } from "@/lib/cn";
import { Label } from "@/components/ui";

type PhoneFrameProps = {
  size: "lg" | "sm";
  title: string;
  placeholder: string;
  progress?: number;
  progressLabel?: string;
  image?: string | null;
  imageAlt?: string;
  className?: string;
};

export function PhoneFrame({
  size,
  title,
  placeholder,
  progress = 0,
  progressLabel,
  image,
  imageAlt,
  className,
}: PhoneFrameProps) {
  const hasImage = Boolean(image);

  return (
    <div
      className={cn(
        "box-border flex flex-col justify-between border border-line-strong bg-surface",
        size === "lg" ? "h-[520px] w-[250px] p-4" : "h-[360px] w-[180px] p-3",
        className,
      )}
    >
      {hasImage ? (
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <Image
            src={image!}
            alt={imageAlt ?? ""}
            fill
            className="object-cover"
            sizes={size === "lg" ? "250px" : "180px"}
          />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <Label tone="muted">{title}</Label>
            {size === "lg" ? (
              <span aria-hidden className="type-label text-ink-muted">
                •••
              </span>
            ) : null}
          </div>
          <Label tone="faint" className="text-center">
            {placeholder}
          </Label>
        </>
      )}
      <div className={cn("flex flex-col", size === "lg" && "gap-2")}>
        <div className="h-1 w-full bg-line" aria-hidden>
          <div
            className="h-1 bg-accent"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
        {size === "lg" && progressLabel ? (
          <Label tone="muted">{progressLabel}</Label>
        ) : null}
      </div>
    </div>
  );
}
