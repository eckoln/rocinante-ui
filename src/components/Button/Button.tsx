import { classed, DerivedComponentType } from "@tw-classed/react";
import React from "react";

const StyledButton = classed("button", {
  base: "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus:outline-none text-sm text-center disabled:opacity-30 disabled:cursor-not-allowed space-x-2",
  variants: {
    variant: {
      primary: "text-white bg-green-600 hover:bg-green-700",
      secondary: "text-white bg-gray-600 hover:bg-gray-700",
      danger: "text-white bg-red-600 hover:bg-red-700",
      ghost: "text-gray-400 bg-transparent hover:text-white hover:bg-white/5",
    },
    size: {
      sm: "px-3 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export type ButtonProps = {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & React.ComponentProps<typeof StyledButton>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ startIcon, endIcon, ...props }, ref) {
    return (
      <StyledButton {...props} ref={ref}>
        {startIcon && <span className="mr-2">{startIcon}</span>}
        {props.children}
        {endIcon && <span className="ml-2">{endIcon}</span>}
      </StyledButton>
    );
  }
) as DerivedComponentType<typeof StyledButton, ButtonProps>;

() => (
  <Button variant="danger" as="a" href="/">
    Click me
  </Button>
);
