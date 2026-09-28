import {
  Button,
  Container,
  Grid,
  Heading,
  Label,
  StatusDot,
  Text,
} from "@/components/ui";
import { SignalPanel } from "@/components/brand/signal-panel";
import { MetaStrip } from "./meta-strip";
import { site } from "@/content/site";

export function Hero() {
  const { hero } = site;

  return (
    <section id="top" aria-labelledby="hero-heading" className="relative">
      <span
        aria-hidden
        className="type-label pointer-events-none absolute top-6 left-page hidden select-none text-glyph lg:inline"
      >
        +
      </span>
      <span
        aria-hidden
        className="type-label pointer-events-none absolute top-6 right-page hidden select-none text-glyph lg:inline"
      >
        +
      </span>

      <Container className="relative pt-hero-sm pb-16 lg:pt-hero lg:pb-0">
        <Grid>
          <div className="col-span-1 flex flex-col gap-6 lg:col-span-7 lg:gap-10">
            <Label tone="muted" className="hidden lg:inline">
              {hero.eyebrow}
            </Label>
            <div className="flex items-center gap-2 lg:hidden">
              <StatusDot pulse />
              <Label tone="muted">{site.status.label}</Label>
            </div>

            <Heading as="h1" size="display" id="hero-heading">
              {hero.headline.before}
              <span className="text-accent-text">{hero.headline.accent}</span>
              {hero.headline.after}
            </Heading>

            <Text tone="muted" measure className="max-lg:max-w-none">
              {hero.intro}
            </Text>

            <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
              <Button
                variant="primary"
                size="md"
                href={hero.primaryCta.href}
                className="hidden lg:inline-flex"
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                variant="ghost"
                size="md"
                href={hero.secondaryCta.href}
                className="hidden lg:inline-flex"
              >
                {hero.secondaryCta.label}
              </Button>
              <Button
                variant="primary"
                size="sm"
                block
                href={hero.primaryCta.href}
                className="lg:hidden"
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                block
                href={hero.secondaryCta.href}
                className="lg:hidden"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="col-span-4 col-start-9 hidden self-start lg:block">
            <SignalPanel {...hero.signal} preset="desktop" animate />
          </div>

          <div className="col-span-12 mt-hero hidden lg:block">
            <MetaStrip />
          </div>
        </Grid>
      </Container>

      <div className="mx-4 lg:hidden">
        <SignalPanel {...hero.signal} preset="mobile" animate />
      </div>

      <div className="mt-16 lg:hidden">
        <MetaStrip mobile />
      </div>
    </section>
  );
}
