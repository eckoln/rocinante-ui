import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import React from "react";

const headingStyles = cva("font-bold !leading-snug", {
  variants: {
    variant: {
      h1: "text-4xl tablet:text-5xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-base",
    },
    defaultVariants: {
      variant: "h6",
    },
  },
});

type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export interface Props
  extends HeadingProps,
    React.ComponentProps<"h1">,
    VariantProps<typeof headingStyles> {}

export default function Heading({
  variant,
  as,
  className,
  children,
  ...props
}: Props) {
  const Heading = ({ ...props }: React.ComponentProps<"h1">) => {
    return React.createElement(as, props, children);
  };

  return (
    <Heading className={headingStyles({ variant, className })} {...props} />
  );
}
