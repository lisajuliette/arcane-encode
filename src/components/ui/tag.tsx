import { cn } from "@/lib/cn";

type TagProps = React.HTMLAttributes<HTMLSpanElement>;

export function Tag({ className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "type-label inline-flex self-start rounded-tag bg-accent-tint px-2 py-1 text-accent-text",
        className,
      )}
      {...props}
    />
  );
}
