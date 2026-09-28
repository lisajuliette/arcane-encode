import { Contact } from "@/components/sections/contact";
import { GiantWordmark } from "@/components/brand/giant-wordmark";
import { Container } from "@/components/ui";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-line"
    >
      <Container className="flex flex-col justify-between gap-16 py-section-sm pb-6 lg:gap-30 lg:py-section lg:pb-10">
        <Contact />
        <div className="flex flex-col gap-4 lg:gap-6">
          <GiantWordmark />
          <div className="type-label flex justify-between border-t border-line pt-3 text-ink-muted max-lg:pt-3 lg:pt-4">
            <LegalItems items={site.footer.legal} className="hidden lg:flex" />
            <LegalItems
              items={site.footer.legalShort}
              className="flex lg:hidden"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}

function LegalItems({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <div className={cn("w-full justify-between gap-4", className)}>
      {items.map((item) =>
        item === "Privacy" ? (
          <a
            key={item}
            href={site.footer.privacyHref}
            className="hover:underline"
          >
            {item}
          </a>
        ) : (
          <span key={item}>{item}</span>
        ),
      )}
    </div>
  );
}
