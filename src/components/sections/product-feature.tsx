import {
  Button,
  Grid,
  Heading,
  MediaFrame,
  SpecList,
  Tag,
  Text,
} from "@/components/ui";
import { PhoneFrame } from "@/components/brand/phone-frame";
import { site } from "@/content/site";

type Product = (typeof site.products.items)[number];

type ProductFeatureProps = {
  product: Product;
};

export function ProductFeature({ product }: ProductFeatureProps) {
  const { figure } = product;

  return (
    <>
      {/* Desktop */}
      <Grid className="hidden border-t border-line pt-6 lg:grid">
        <div className="col-span-7 flex flex-col gap-4">
          <MediaFrame
            ratio="4/3"
            label={figure.label}
            meta={figure.dims}
            corners
          >
            <PhoneFrame
              size="lg"
              title={product.name}
              placeholder={figure.placeholder}
              progress={figure.progress}
              progressLabel={figure.progressLabel}
              image={figure.image}
              imageAlt={figure.imageAlt}
            />
          </MediaFrame>
          <div className="type-body-sm flex justify-between text-ink-muted">
            <span>{figure.caption}</span>
            <span>{figure.captionRight}</span>
          </div>
        </div>
        <div className="col-span-4 col-start-9 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Tag>{product.tag}</Tag>
            <Heading as="h3" size="h1">
              {product.name}
            </Heading>
            <Text>{product.description}</Text>
          </div>
          <SpecList items={[...product.specs]} />
          <div className="flex gap-4">
            {product.links.map((link) => (
              <Button key={link.label} variant="ghost" size="md" href={link.href}>
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </Grid>

      {/* Mobile */}
      <div className="flex flex-col gap-6 lg:hidden">
        <MediaFrame ratio="4/5" label={figure.label}>
          <PhoneFrame
            size="sm"
            title={product.name}
            placeholder="[ Screenshot ]"
            progress={figure.progress}
            image={figure.image}
            imageAlt={figure.imageAlt}
          />
        </MediaFrame>
        <Tag>{product.tag}</Tag>
        <Heading as="h3" size="h1" mobileSize="h1-sm">
          {product.name}
        </Heading>
        <Text>{product.description}</Text>
        <SpecList items={[...product.specs]} />
        <div className="grid grid-cols-2 gap-2">
          {product.links.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="sm"
              block
              href={link.href}
              className="px-2 py-[13px]"
            >
              {link.labelShort}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
