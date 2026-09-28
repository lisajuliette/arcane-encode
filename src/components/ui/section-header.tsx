import { cn } from "@/lib/cn";
import { Heading } from "./heading";
import { Label } from "./label";

type SectionHeaderProps = {
  index: string;
  title?: string;
  meta?: string;
  className?: string;
  titleId?: string;
  titleClassName?: string;
  titleAs?: "h2" | "div";
};

export function SectionHeader({
  index,
  title,
  meta,
  className,
  titleId,
  titleClassName,
  titleAs = "h2",
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-end justify-between", className)}>
      <div className="flex flex-col gap-4">
        <Label tone="muted">{index}</Label>
        {title ? (
          <Heading
            as={titleAs}
            size="h1"
            id={titleId}
            className={titleClassName}
          >
            {title}
          </Heading>
        ) : null}
      </div>
      {meta ? <Label tone="muted">{meta}</Label> : null}
    </div>
  );
}
