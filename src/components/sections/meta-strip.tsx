import { Label, Text } from "@/components/ui";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type MetaStripProps = {
  mobile?: boolean;
};

/** Desktop order from site.meta; mobile reorders: Team, Studio, In production, Base */
const mobileOrder = [1, 0, 2, 3] as const;

export function MetaStrip({ mobile = false }: MetaStripProps) {
  if (mobile) {
    const items = mobileOrder.map((i) => site.meta[i]);
    return (
      <div className="grid grid-cols-2 border-y border-line">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={cn(
              "flex flex-col gap-1 p-4",
              index === 0 && "border-r border-b border-line",
              index === 1 && "border-b border-line",
              index === 2 && "border-r border-line",
            )}
          >
            <Label tone="muted">{item.label}</Label>
            <Text size="body-sm">
              {"valueShort" in item && item.valueShort
                ? item.valueShort
                : item.value}
            </Text>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 border-t border-line">
      {site.meta.map((item, index) => (
        <div
          key={item.label}
          className={cn(
            "flex flex-col gap-2 px-6 pt-6 pb-10",
            index === 0 && "pl-0",
            index === site.meta.length - 1 && "pr-0",
            index < site.meta.length - 1 && "border-r border-line",
          )}
        >
          <Label tone="muted">{item.label}</Label>
          <Text>{item.value}</Text>
        </div>
      ))}
    </div>
  );
}
