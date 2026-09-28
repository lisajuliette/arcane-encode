import { cn } from "@/lib/cn";

type StatusDotProps = React.HTMLAttributes<HTMLSpanElement> & {
  pulse?: boolean;
};

export function StatusDot({ className, pulse, ...props }: StatusDotProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block size-1.5 rounded-pill bg-accent",
        pulse && "animate-status-pulse",
        className,
      )}
      {...props}
    />
  );
}
