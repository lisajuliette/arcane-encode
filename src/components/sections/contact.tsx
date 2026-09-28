import { Grid, Heading, Label, LinkList } from "@/components/ui";
import { site } from "@/content/site";

export function Contact() {
  const { contact, email } = site;

  return (
    <Grid>
      <div className="lg:col-span-3">
        <Label tone="muted">{contact.index}</Label>
      </div>
      <div className="mt-6 flex flex-col gap-6 lg:col-span-5 lg:col-start-4 lg:mt-0 lg:gap-6">
        <Heading as="h2" size="h1" mobileSize="h1-sm" id="contact-heading">
          {contact.title}
        </Heading>
        <a
          href={`mailto:${email}`}
          className="type-body text-accent-text transition-colors duration-150 lg:type-body-lg"
        >
          {email}
        </a>
      </div>
      <div className="mt-6 lg:col-span-3 lg:col-start-10 lg:mt-0">
        <LinkList
          items={contact.links.map((link) => ({
            label: link.label,
            href: link.href,
            external: link.href.startsWith("http"),
            hideOnMobile: !link.mobile,
          }))}
        />
      </div>
    </Grid>
  );
}
