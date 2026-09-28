import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "type-label inline-flex items-center justify-center whitespace-nowrap transition-colors duration-150 min-h-11",
  {
    variants: {
      variant: {
        primary: "bg-accent text-on-accent hover:opacity-90 border-0",
        ghost:
          "border border-line-strong text-ink hover:bg-surface-hover bg-transparent",
      },
      size: {
        md: "",
        sm: "",
      },
      block: {
        true: "w-full text-center",
        false: "",
      },
    },
    compoundVariants: [
      { variant: "primary", size: "md", class: "px-6 py-4" },
      { variant: "primary", size: "sm", class: "px-4 py-3.5" },
      { variant: "ghost", size: "md", class: "px-6 py-[15px]" },
      { variant: "ghost", size: "sm", class: "px-4 py-[13px]" },
    ],
    defaultVariants: {
      variant: "ghost",
      size: "md",
      block: false,
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type SharedProps = ButtonVariantProps & {
  className?: string;
  children?: React.ReactNode;
};

type AnchorButtonProps = SharedProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

function isInternalRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function Button(props: ButtonProps) {
  const {
    variant,
    size,
    block,
    className,
    children,
    href,
    ...rest
  } = props as ButtonProps & { href?: string };

  const classes = cn(buttonVariants({ variant, size, block }), className);

  if (href) {
    if (isInternalRoute(href)) {
      return (
        <Link
          href={href}
          className={classes}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
