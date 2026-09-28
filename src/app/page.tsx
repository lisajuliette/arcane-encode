import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { Ticker } from "@/components/sections/ticker";
import { Products } from "@/components/sections/products";
import { Studio } from "@/components/sections/studio";
import { Protocol } from "@/components/sections/protocol";

export default function HomePage() {
  return (
    <div className="bg-surface text-ink">
      <a
        href="#main"
        className="bg-accent text-on-accent type-label sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:inline-flex focus:px-6 focus:py-4"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Ticker />
        <Products />
        <Studio />
        <Protocol />
      </main>
      <SiteFooter />
    </div>
  );
}
