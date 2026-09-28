"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Button, Container, Label, StatusDot } from "@/components/ui";
import { site } from "@/content/site";

type MobileMenuProps = {
  className?: string;
};

export function MobileMenu({ className }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        triggerRef.current?.focus();
      }
      if (e.key === "Tab") {
        const panel = document.getElementById(panelId);
        if (!panel) return;
        const focusable = panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        close();
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, close, panelId]);

  useEffect(() => {
    if (!open) return;
    // Return focus to trigger when closing via link click handled below
  }, [open]);

  return (
    <div className={cn("lg:hidden", className)}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        className="type-label inline-flex h-11 items-center justify-center border border-line-strong px-4 text-ink transition-colors duration-150 hover:bg-surface-hover"
        onClick={() => {
          setOpen((v) => {
            const next = !v;
            if (!next) {
              // focus returns on close via Escape path; for toggle close:
              queueMicrotask(() => triggerRef.current?.focus());
            }
            return next;
          });
        }}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div
          id={panelId}
          className="fixed inset-x-0 top-16 bottom-0 z-30 bg-surface"
        >
          <Container className="flex h-full flex-col py-6">
            <nav aria-label="Primary" className="flex flex-col">
              {site.nav.map((item, i) => (
                <a
                  key={item.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  className="type-h1-sm border-t border-line py-4 text-ink last:border-b"
                  onClick={() => {
                    close();
                    queueMicrotask(() => triggerRef.current?.focus());
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <StatusDot />
                <Label tone="muted">{site.status.label}</Label>
              </div>
              <Button
                variant="primary"
                size="sm"
                block
                href={site.headerCta.href}
                onClick={() => {
                  close();
                  queueMicrotask(() => triggerRef.current?.focus());
                }}
              >
                {site.headerCta.label}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </div>
  );
}
