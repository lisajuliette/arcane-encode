import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * Class-name helper. tailwind-merge is taught about the custom `type-*`
 * utilities so `cn("type-body", "type-label")` keeps only the last one.
 */
const twMerge = extendTailwindMerge<"ae-type">({
  extend: {
    classGroups: {
      "ae-type": [
        {
          type: [
            "display",
            "display-sm",
            "h1",
            "h1-sm",
            "h2",
            "h2-sm",
            "h3",
            "body",
            "body-lg",
            "body-sm",
            "label",
            "glyph",
            "wordmark-giant",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
