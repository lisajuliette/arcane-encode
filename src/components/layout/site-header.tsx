import {
  Button,
  Container,
  Label,
  StatusDot,
} from "@/components/ui";
import { Wordmark } from "@/components/brand/wordmark";
import { MobileMenu } from "./mobile-menu";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Wordmark />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 lg:flex"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="type-label text-ink hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-2">
            <StatusDot pulse />
            <Label tone="muted">{site.status.label}</Label>
          </div>
          <Button variant="ghost" size="sm" href={site.headerCta.href}>
            {site.headerCta.label}
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
