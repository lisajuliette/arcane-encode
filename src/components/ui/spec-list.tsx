import { cn } from "@/lib/cn";

type SpecListProps = {
  items: Array<{ label: string; value: string; hideOnMobile?: boolean }>;
  className?: string;
};

export function SpecList({ items, className }: SpecListProps) {
  return (
    <dl className={cn(className)}>
      {items.map((item, index) => (
        <div
          key={item.label}
          className={cn(
            "type-body-sm flex justify-between border-t border-line py-3",
            index === items.length - 1 && "border-b",
            item.hideOnMobile && "hidden lg:flex",
          )}
        >
          <dt className="text-ink-muted">{item.label}</dt>
          <dd className="m-0 text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
