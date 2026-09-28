import { Container, Grid, Heading, Label, Reveal, Text } from "@/components/ui";
import { site } from "@/content/site";
import { TeamCard } from "./team-card";

export function Studio() {
  const { studio } = site;

  return (
    <section
      id="studio"
      aria-labelledby="studio-heading"
      className="border-t border-line py-section-sm lg:py-section"
    >
      <Reveal>
        <Container>
          <Grid className="gap-y-6 lg:gap-y-16">
            <div className="lg:col-span-3">
              <Label tone="muted">{studio.index}</Label>
            </div>
            <div className="flex flex-col gap-6 lg:col-span-8 lg:col-start-4 lg:gap-6">
              <Heading
                as="h2"
                size="h1"
                mobileSize="h2"
                id="studio-heading"
              >
                {studio.statement}
              </Heading>
              <Text tone="muted" className="hidden max-w-[560px] lg:block">
                {studio.intro}
              </Text>
              <Text tone="muted" className="lg:hidden">
                {studio.introShort}
              </Text>
            </div>
            <div className="mt-4 flex flex-col lg:col-span-12 lg:mt-0 lg:grid lg:grid-cols-3 lg:gap-6">
              {studio.team.map((member) => (
                <TeamCard
                  key={member.no}
                  member={member}
                  badge={studio.memberBadge}
                />
              ))}
            </div>
          </Grid>
        </Container>
      </Reveal>
    </section>
  );
}
