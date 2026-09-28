import { cn } from "@/lib/cn";

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section";
};

export function Grid({ as: Comp = "div", className, ...props }: GridProps) {
  return (
    <Comp
      className={cn("grid grid-cols-1 gap-x-gutter lg:grid-cols-12", className)}
      {...props}
    />
  );
}
