import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-orange-button text-white hover:bg-brand-orange-700 shadow-sm hover:shadow-md",
        secondary:
          "bg-brand-blue-900 text-white hover:bg-brand-blue-800 dark:bg-brand-blue-600 dark:hover:bg-brand-blue-500",
        outline:
          "border border-border-strong bg-transparent text-foreground hover:bg-background-subtle",
        ghost: "bg-transparent text-foreground hover:bg-background-subtle",
        link: "underline-offset-4 hover:underline text-brand-blue-600 dark:text-brand-blue-400",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-md",
        md: "h-11 px-6 text-[15px] rounded-md",
        lg: "h-13 px-8 text-base rounded-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type CommonProps = VariantProps<typeof buttonStyles> & {
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | keyof CommonProps
  >;

type ButtonProps = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

export function Button(props: LinkProps | ButtonProps) {
  if ("href" in props && props.href !== undefined) {
    // Destructure ALL styling-related keys out of rest, so the spread below
    // cannot overwrite the computed className. Without this, a caller that
    // passes className="w-full" would erase the variant/size classes.
    const { className, variant, size, children, href, external, ...rest } =
      props;
    const styles = cn(buttonStyles({ variant, size }), className);

    const isAbsolute =
      external ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.startsWith("http");

    if (isAbsolute) {
      return (
        <a
          href={href}
          className={styles}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles} {...(rest as Record<string, unknown>)}>
        {children}
      </Link>
    );
  }

  const { className, variant, size, children, ...rest } = props as ButtonProps;
  const styles = cn(buttonStyles({ variant, size }), className);
  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
}
