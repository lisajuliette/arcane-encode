import { Button, Heading, Label } from "@/components/ui";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="bg-surface text-ink">
      <SiteHeader />
      <main id="main" className="py-section-sm lg:py-section">
        <Container className="flex flex-col items-start gap-6">
          <Label tone="muted">[ 404 ] Signal lost</Label>
          <Heading as="h1" size="h1">
            Nothing encoded here.
          </Heading>
          <Button variant="ghost" size="md" href="/">
            Back to base
          </Button>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
