import React from "react";

import { cva, cx } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const button = cva(
  "inline-flex items-center justify-center text-center font-medium space-x-2 rounded focus:outline-none disabled:opacity-30",
  {
    variants: {
      intent: {},
      size: {},
    },
    compoundVariants: [{}],
    defaultVariants: {},
  }
);
const icon = cx("h-4 w-4");

type ButtonProps = {
  startIcon?: React.FC<React.ComponentProps<"svg">>;
  endIcon?: React.FC<React.ComponentProps<"svg">>;
};

export interface Props
  extends ButtonProps,
    React.ComponentProps<"button">,
    VariantProps<typeof button> {}

export default function Button({
  intent,
  size,
  startIcon,
  endIcon,
  className,
  children,
  ...props
}: Props) {
  const StartIconComponent = startIcon;
  const EndIconComponent = endIcon;

  return (
    <button
      className={button({
        intent,
        size,
        className,
      })}
      {...props}
    >
      {StartIconComponent && (
        <span>
          <StartIconComponent className={icon} />
        </span>
      )}
      <span>{children}</span>
      {EndIconComponent && (
        <span>
          <EndIconComponent className={icon} />
        </span>
      )}
    </button>
  );
}
