import { Grid, Heading, Label, Text } from "@/components/ui";
import { site } from "@/content/site";

export function ProductSlot() {
  const slot = site.products.emptySlot;

  return (
    <Grid className="hidden border-t border-line pt-6 lg:grid">
      <div
        aria-hidden
        className="col-span-7 flex h-[200px] flex-col justify-center gap-3 border border-dashed border-line px-10"
      >
        <div className="h-3.5 w-[70%] bg-surface-hover" />
        <div className="h-3.5 w-[45%] bg-surface-hover" />
        <div className="h-3.5 w-[58%] bg-surface-hover" />
      </div>
      <div className="col-span-4 col-start-9 flex flex-col justify-center gap-4">
        <Label tone="muted">{slot.tag}</Label>
        <Heading as="h3" size="h2" tone="muted">
          {slot.title}
        </Heading>
        <Text size="body-sm" tone="muted">
          {slot.text}
        </Text>
      </div>
    </Grid>
  );
}
