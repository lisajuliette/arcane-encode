import { Container, Reveal, SectionHeader, Label } from "@/components/ui";
import { site } from "@/content/site";
import { ProductFeature } from "./product-feature";
import { ProductSlot } from "./product-slot";

export function Products() {
  const { products } = site;

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="py-section-sm lg:py-section"
    >
      <Reveal>
        <Container className="flex flex-col gap-6 lg:gap-16">
          <Label tone="muted" className="lg:hidden">
            {products.index}
          </Label>
          <h2 id="products-heading" className="sr-only">
            {products.title}
          </h2>
          <SectionHeader
            index={products.index}
            title={products.title}
            meta={products.count}
            className="hidden lg:flex"
            titleAs="div"
          />

          {products.items.map((product) => (
            <ProductFeature key={product.slug} product={product} />
          ))}

          <ProductSlot />
        </Container>
      </Reveal>
    </section>
  );
}
