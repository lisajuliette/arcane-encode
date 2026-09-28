"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import {
  generateGlyphField,
  GLYPH_PRESETS,
  flickerGlyphField,
} from "@/lib/glyph-field";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type GlyphFieldProps = {
  preset: "desktop" | "mobile";
  animate?: boolean;
  className?: string;
};

const PROTECTED = ["ARCANE", "ENCODE", ">> STEPCRAFT.BUILD", "OPERATORS=3"];

export function GlyphField({
  preset,
  animate = false,
  className,
}: GlyphFieldProps) {
  const initial = generateGlyphField(GLYPH_PRESETS[preset]);
  const [text, setText] = useState(initial);
  const reduced = useReducedMotion();
  const preRef = useRef<HTMLPreElement>(null);
  const visibleRef = useRef(true);

  useEffect(() => {
    if (!animate || reduced) return;

    const el = preRef.current;
    let observer: IntersectionObserver | undefined;
    if (el) {
      observer = new IntersectionObserver(
        ([entry]) => {
          visibleRef.current = entry.isIntersecting;
        },
        { threshold: 0 },
      );
      observer.observe(el);
    }

    const id = window.setInterval(() => {
      if (document.hidden || !visibleRef.current) return;
      setText((current) => flickerGlyphField(current, 6, PROTECTED));
    }, 120);

    return () => {
      window.clearInterval(id);
      observer?.disconnect();
    };
  }, [animate, reduced]);

  return (
    <pre
      ref={preRef}
      aria-hidden="true"
      className={cn(
        "type-glyph overflow-hidden text-glyph",
        preset === "desktop" ? "px-4 py-5" : "p-4 text-[11px] leading-[15px]",
        className,
      )}
    >
      {text}
    </pre>
  );
}
