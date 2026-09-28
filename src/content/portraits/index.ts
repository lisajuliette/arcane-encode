import { readFileSync } from "node:fs";
import { join } from "node:path";

export type PortraitSlug = "tumma" | "maxi" | "lisa";

const cache = new Map<PortraitSlug, string>();

/** Load ASCII portrait text (server-only, build/runtime). */
export function getAsciiPortrait(slug: PortraitSlug): string {
  const cached = cache.get(slug);
  if (cached !== undefined) return cached;

  const text = readFileSync(
    join(process.cwd(), "src/content/portraits", `${slug}.txt`),
    "utf8",
  );
  cache.set(slug, text);
  return text;
}
