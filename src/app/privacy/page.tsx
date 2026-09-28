import type { Metadata } from "next";
import { Container, Heading, Label, Text } from "@/components/ui";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <div className="bg-surface text-ink">
      <SiteHeader />
      <main id="main" className="py-section-sm lg:py-section">
        <Container className="flex flex-col gap-6 lg:gap-10">
          <Label tone="muted">[ ∅ ] Legal</Label>
          <Heading as="h1" size="h1" mobileSize="h1-sm">
            Privacy
          </Heading>
          <Text className="max-w-[640px]">[Privacy policy text]</Text>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
