import { cn } from "@/lib/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "header" | "footer";
};

export function Container({
  as: Comp = "div",
  className,
  ...props
}: ContainerProps) {
  return (
    <Comp
      className={cn("mx-auto w-full max-w-site px-page-sm lg:px-page", className)}
      {...props}
    />
  );
}
