import { Container, Grid, Label, Reveal } from "@/components/ui";
import { site } from "@/content/site";
import { PrincipleRow } from "./principle-row";

export function Protocol() {
  const { protocol } = site;

  return (
    <section
      id="protocol"
      aria-labelledby="protocol-heading"
      className="border-t border-line py-section-sm lg:py-section"
    >
      <Reveal>
        <Container>
          <h2 id="protocol-heading" className="sr-only">
            Protocol
          </h2>
          <Grid>
            <div className="lg:col-span-3">
              <Label tone="muted">{protocol.index}</Label>
            </div>
            <ol className="m-0 flex list-none flex-col gap-0 p-0 lg:col-span-9 lg:col-start-4">
              {protocol.items.map((item, index) => (
                <PrincipleRow
                  key={item.no}
                  item={item}
                  isLast={index === protocol.items.length - 1}
                />
              ))}
            </ol>
          </Grid>
        </Container>
      </Reveal>
    </section>
  );
}
