import { Heading, Label, Text } from "@/components/ui";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type Item = (typeof site.protocol.items)[number];

type PrincipleRowProps = {
  item: Item;
  isLast?: boolean;
};

export function PrincipleRow({ item, isLast }: PrincipleRowProps) {
  return (
    <li
      className={cn(
        "border-t border-line py-6 lg:grid lg:grid-cols-[80px_1fr_1fr] lg:items-baseline lg:gap-6 lg:py-8",
        "flex flex-col gap-2",
        isLast && "border-b",
      )}
    >
      <Label tone="muted">{item.no}</Label>
      <Heading as="h3" size="h2" mobileSize="h2-sm">
        {item.title}
      </Heading>
      <Text size="body-sm" tone="muted" className="lg:type-body">
        {item.text}
      </Text>
    </li>
  );
}
