import type { Metadata } from "next";
import {
  Button,
  Container,
  CornerMarks,
  Heading,
  Label,
  LinkList,
  MediaFrame,
  SectionHeader,
  SpecList,
  StatusDot,
  Tag,
  Text,
} from "@/components/ui";
import { GiantWordmark } from "@/components/brand/giant-wordmark";
import { PhoneFrame } from "@/components/brand/phone-frame";
import { SignalPanel } from "@/components/brand/signal-panel";
import { Wordmark } from "@/components/brand/wordmark";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const colorTokens = [
  { name: "surface", className: "bg-surface" },
  { name: "surface-raised", className: "bg-surface-raised" },
  { name: "surface-hover", className: "bg-surface-hover" },
  { name: "line", className: "bg-line" },
  { name: "line-strong", className: "bg-line-strong" },
  { name: "ink", className: "bg-ink" },
  { name: "ink-muted", className: "bg-ink-muted" },
  { name: "accent", className: "bg-accent" },
  { name: "accent-text", className: "bg-accent-text" },
  { name: "accent-tint", className: "bg-accent-tint" },
  { name: "glyph", className: "bg-glyph" },
  { name: "danger", className: "bg-danger" },
] as const;

const typeSamples = [
  { name: "type-display", className: "type-display", spec: "88 / 0.95 / -0.03em" },
  { name: "type-display-sm", className: "type-display-sm", spec: "48 / 0.95 / -0.03em" },
  { name: "type-h1", className: "type-h1", spec: "56 / 1 / -0.025em" },
  { name: "type-h1-sm", className: "type-h1-sm", spec: "40 / 1 / -0.025em" },
  { name: "type-h2", className: "type-h2", spec: "32 / 1.1 / -0.015em" },
  { name: "type-h2-sm", className: "type-h2-sm", spec: "24 / 1.1 / -0.01em" },
  { name: "type-h3", className: "type-h3", spec: "20 / 1.25 / -0.005em" },
  { name: "type-body", className: "type-body", spec: "14 / 24" },
  { name: "type-body-lg", className: "type-body-lg", spec: "20 / 28" },
  { name: "type-body-sm", className: "type-body-sm", spec: "12 / 20" },
  { name: "type-label", className: "type-label", spec: "11 / 16 / 0.08em" },
  { name: "type-glyph", className: "type-glyph", spec: "12 / 16 / 0.12em" },
] as const;

const spacingSteps = [
  { name: "1", px: 4 },
  { name: "2", px: 8 },
  { name: "3", px: 12 },
  { name: "4", px: 16 },
  { name: "6", px: 24 },
  { name: "8", px: 32 },
  { name: "10", px: 40 },
  { name: "16", px: 64 },
  { name: "20", px: 80 },
  { name: "30", px: 120 },
  { name: "40", px: 160 },
  { name: "50", px: 200 },
] as const;

export default function DesignSystemPage() {
  return (
    <div className="bg-surface text-ink">
      <SiteHeader />
      <main id="main" className="py-section-sm lg:py-section">
        <Container className="flex flex-col gap-16 lg:gap-30">
          <SectionHeader index="[ DS ]" title="Design system" />

          <section aria-labelledby="ds-colour" className="flex flex-col gap-8">
            <SectionHeader index="[ 01 ]" title="Colour" titleId="ds-colour" />
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {colorTokens.map((token) => (
                <div key={token.name} className="flex flex-col gap-2">
                  <div
                    className={`aspect-square border border-line ${token.className}`}
                  />
                  <Label>{token.name}</Label>
                  <Text size="body-sm" tone="muted">
                    semantic
                  </Text>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="ds-type" className="flex flex-col gap-8">
            <SectionHeader index="[ 02 ]" title="Type" titleId="ds-type" />
            <div className="flex flex-col gap-6">
              {typeSamples.map((sample) => (
                <div
                  key={sample.name}
                  className="flex flex-col gap-2 border-t border-line pt-4 lg:flex-row lg:items-baseline lg:justify-between"
                >
                  <span className={sample.className}>{sample.name}</span>
                  <Text size="body-sm" tone="muted">
                    {sample.spec}
                  </Text>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="ds-space" className="flex flex-col gap-8">
            <SectionHeader index="[ 03 ]" title="Spacing" titleId="ds-space" />
            <div className="flex flex-col gap-3">
              {spacingSteps.map((step) => (
                <div key={step.name} className="flex items-center gap-4">
                  <Label tone="muted" className="w-16">
                    {step.px}px
                  </Label>
                  <div
                    className="h-4 bg-accent-tint"
                    style={{ width: step.px }}
                  />
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="ds-components" className="flex flex-col gap-10">
            <SectionHeader
              index="[ 04 ]"
              title="Components"
              titleId="ds-components"
            />

            <div className="flex flex-col gap-4">
              <Label tone="muted">Buttons</Label>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="md">
                  Primary md
                </Button>
                <Button variant="ghost" size="md">
                  Ghost md
                </Button>
                <Button variant="primary" size="sm">
                  Primary sm
                </Button>
                <Button variant="ghost" size="sm">
                  Ghost sm
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Label tone="muted">Tag / StatusDot / Labels</Label>
              <div className="flex flex-wrap items-center gap-4">
                <Tag>Product 001</Tag>
                <StatusDot pulse />
                <Label tone="ink">Ink</Label>
                <Label tone="muted">Muted</Label>
                <Label tone="faint">Faint</Label>
                <Label tone="accent">Accent</Label>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Label tone="muted">SpecList</Label>
              <SpecList
                items={[
                  { label: "Type", value: "Mobile game", hideOnMobile: true },
                  { label: "Genre", value: "Fitness RPG" },
                  { label: "Status", value: "Alpha" },
                ]}
              />
            </div>

            <div className="flex flex-col gap-4">
              <Label tone="muted">LinkList</Label>
              <LinkList
                items={[
                  { label: "Discord", href: "#" },
                  { label: "GitHub", href: "#", external: true },
                ]}
              />
            </div>

            <div className="flex flex-col gap-4">
              <Label tone="muted">MediaFrame + PhoneFrame</Label>
              <div className="max-w-md">
                <MediaFrame ratio="4/3" label="Fig. 01" meta="390 × 844" corners>
                  <PhoneFrame
                    size="lg"
                    title="Stepcraft"
                    placeholder="[ Screenshot ]"
                    progress={0.62}
                    progressLabel="Steps / XP"
                  />
                </MediaFrame>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Label tone="muted">SignalPanel</Label>
              <div className="max-w-md">
                <SignalPanel
                  titleLeft="Signal"
                  titleRight="encode.sys"
                  footerLeft="Operators 03 / 03"
                  footerRight="Online"
                  preset="desktop"
                />
              </div>
            </div>

            <div className="relative flex flex-col gap-4 border border-line p-10">
              <Label tone="muted">CornerMarks</Label>
              <CornerMarks />
              <Text tone="muted">Crosshair motif demo</Text>
            </div>

            <div className="flex flex-col gap-4">
              <Label tone="muted">Wordmark</Label>
              <Wordmark />
            </div>

            <div className="flex flex-col gap-4 overflow-hidden">
              <Label tone="muted">GiantWordmark</Label>
              <GiantWordmark />
            </div>

            <div className="flex flex-col gap-4">
              <Label tone="muted">Heading / Text</Label>
              <Heading as="h3" size="h2">
                Sample heading
              </Heading>
              <Text tone="muted" measure>
                Sample body text with measure.
              </Text>
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
