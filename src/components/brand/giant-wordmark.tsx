import { cn } from "@/lib/cn";

type GiantWordmarkProps = {
  className?: string;
};

export function GiantWordmark({ className }: GiantWordmarkProps) {
  return (
    <>
      <p
        aria-hidden="true"
        className={cn(
          "type-wordmark-giant hidden whitespace-nowrap text-ink lg:block lg:text-[clamp(120px,16.4vw,236px)]",
          className,
        )}
      >
        arcane encode
      </p>
      <p
        aria-hidden="true"
        className={cn(
          "type-wordmark-giant whitespace-normal text-[76px] leading-[0.85] text-ink max-[389px]:text-[64px] lg:hidden",
          className,
        )}
      >
        arcane
        <br />
        encode
      </p>
    </>
  );
}
