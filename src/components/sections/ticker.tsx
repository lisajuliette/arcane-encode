import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type TickerProps = {
  className?: string;
};

function TickerTrack() {
  return (
    <>
      {site.ticker.map((item, index) => (
        <span
          key={`${item.text}-${index}`}
          className="inline-flex items-center gap-10"
        >
          <span
            className={cn(
              "highlight" in item && item.highlight
                ? "text-ink"
                : "text-ink-muted",
            )}
          >
            {item.text}
          </span>
          <span aria-hidden className="text-glyph">
            {"///"}
          </span>
        </span>
      ))}
    </>
  );
}

export function Ticker({ className }: TickerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "type-label group relative hidden h-14 w-full max-w-full items-center overflow-x-clip whitespace-nowrap border-y border-line px-page text-ink-muted lg:flex",
        className,
      )}
    >
      <div className="animate-ticker absolute top-0 left-0 flex h-full w-max items-center gap-10 group-hover:[animation-play-state:paused]">
        <div className="flex items-center gap-10">
          <TickerTrack />
        </div>
        <div className="flex items-center gap-10">
          <TickerTrack />
        </div>
      </div>
    </div>
  );
}
