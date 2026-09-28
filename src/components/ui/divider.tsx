import { cn } from "@/lib/cn";

type DividerProps = React.HTMLAttributes<HTMLHRElement> & {
  vertical?: boolean;
};

export function Divider({ vertical, className, ...props }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0",
        vertical ? "border-r border-line h-auto self-stretch" : "border-t border-line w-full",
        className,
      )}
      {...props}
    />
  );
}
