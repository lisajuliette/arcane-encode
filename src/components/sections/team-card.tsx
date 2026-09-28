import Image from "next/image";
import { Heading, Label, MediaFrame, Text } from "@/components/ui";
import { AsciiPortrait } from "@/components/brand/ascii-portrait";
import { getAsciiPortrait } from "@/content/portraits";
import { site } from "@/content/site";

type Member = (typeof site.studio.team)[number];

type TeamCardProps = {
  member: Member;
  badge: string;
};

function Portrait({ member }: { member: Member }) {
  if (member.image) {
    return (
      <Image
        src={member.image}
        alt={`Portrait of ${member.name}`}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 33vw, 96px"
      />
    );
  }

  if (member.ascii) {
    return (
      <div className="absolute inset-0 flex items-center justify-center px-2 pt-6 pb-2 lg:px-3 lg:pt-7 lg:pb-3">
        <AsciiPortrait art={getAsciiPortrait(member.ascii)} name={member.name} />
      </div>
    );
  }

  return <Label tone="faint">[ Portrait ]</Label>;
}

export function TeamCard({ member, badge }: TeamCardProps) {
  const frameRatio = member.ascii ? "12/11" : "4/5";

  return (
    <>
      {/* Desktop vertical card */}
      <div className="hidden flex-col gap-4 lg:flex">
        <MediaFrame ratio={frameRatio} label={`Operator ${member.no}`}>
          <Portrait member={member} />
        </MediaFrame>
        <div className="flex items-baseline justify-between gap-2">
          <Heading as="h3" size="h3" className="min-w-0 break-all">
            {member.name}
          </Heading>
          <Label tone="muted" className="shrink-0">
            {badge}
          </Label>
        </div>
        <Text size="body-sm" tone="muted">
          {member.role}
        </Text>
      </div>

      {/* Mobile horizontal row */}
      <div className="grid grid-cols-[96px_1fr] gap-4 border-t border-line py-4 lg:hidden">
        <div
          className={
            member.ascii
              ? "relative aspect-[12/11] overflow-hidden border border-line bg-surface-raised"
              : "relative aspect-[4/5] overflow-hidden border border-line bg-surface-raised"
          }
        >
          <Portrait member={member} />
        </div>
        <div className="flex min-w-0 flex-col justify-center gap-1">
          <Label tone="muted">{badge}</Label>
          <Heading as="h3" size="h3" className="break-all">
            {member.name}
          </Heading>
          <Text size="body-sm" tone="muted">
            {member.roleShort}
          </Text>
        </div>
      </div>
    </>
  );
}
