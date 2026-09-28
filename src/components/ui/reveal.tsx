"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [inView, setInView] = useState(false);
  const [jsReady, setJsReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setJsReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (reduced || !jsReady) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced, jsReady]);

  const hideUntilInView = jsReady && !reduced && !inView;

  return (
    <div
      ref={ref}
      data-inview={inView || reduced ? "true" : undefined}
      className={cn(
        jsReady &&
          !reduced &&
          "transition-[opacity,transform] duration-300 ease-out",
        hideUntilInView && "translate-y-2 opacity-0",
        (inView || reduced || !jsReady) && "translate-y-0 opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
