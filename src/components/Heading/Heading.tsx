import { classed, DerivedComponentType } from "@tw-classed/react";
import React from "react";

const StyledHeading = classed("h6", {
  base: "font-bold",
  variants: {
    size: {
      h6: "text-base",
      h5: "text-lg",
      h4: "text-xl",
      h3: "text-2xl",
      h2: "text-3xl",
      h1: "text-4xl tablet:text-5xl",
    },
  },
  defaultVariants: {
    size: "h6",
  },
});

export type HeadingProps = React.ComponentProps<typeof StyledHeading>;

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ ...props }, ref) {
    return <StyledHeading {...props} ref={ref} />;
  }
) as DerivedComponentType<typeof StyledHeading, HeadingProps>;

() => {
  <Heading as="h1" size="h1">
    My Title
  </Heading>;
};
