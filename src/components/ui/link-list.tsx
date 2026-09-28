import { cn } from "@/lib/cn";

type LinkListProps = {
  items: Array<{
    label: string;
    href: string;
    external?: boolean;
    hideOnMobile?: boolean;
  }>;
  className?: string;
};

export function LinkList({ items, className }: LinkListProps) {
  return (
    <ul className={cn("m-0 list-none p-0", className)}>
      {items.map((item, index) => (
        <li
          key={item.label}
          className={cn(item.hideOnMobile && "hidden lg:block")}
        >
          <a
            href={item.href}
            className={cn(
              "type-label flex justify-between border-t border-line py-3.5 text-ink lg:py-3",
              "hover:[&>span:first-child]:underline",
              index === items.length - 1 && "border-b",
            )}
            {...(item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span>
              {item.label}
              {item.external ? (
                <span className="sr-only"> (opens in new tab)</span>
              ) : null}
            </span>
            <span aria-hidden className="text-ink-muted">
              ↗
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
