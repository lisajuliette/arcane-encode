import { cn } from "@/lib/cn";

type WordmarkProps = {
  href?: string;
  size?: "md" | "sm";
  className?: string;
};

export function Wordmark({
  href = "#top",
  className,
}: WordmarkProps) {
  return (
    <a
      href={href}
      aria-label="Arcane Encode, home"
      className={cn(
        "font-display flex items-center gap-3 tracking-[-0.02em] text-ink max-lg:gap-2",
        className,
      )}
    >
      <span aria-hidden className="text-[26px] max-lg:text-[22px]">
        Æ
      </span>
      <span className="text-[20px] max-lg:text-[18px]">arcane encode</span>
    </a>
  );
}
