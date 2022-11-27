import React from "react";

import type { VariantProps } from "class-variance-authority";
import { cva, cx } from "class-variance-authority";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus:outline-none text-sm text-center disabled:opacity-30 disabled:cursor-not-allowed space-x-2",
  {
    variants: {
      intent: {
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
      intent: "primary",
      size: "sm",
    },
  }
);
const iconStyles = cx("h-4 w-4");

type ButtonProps = {
  startIcon?: React.FC<React.ComponentProps<"svg">>;
  endIcon?: React.FC<React.ComponentProps<"svg">>;
};

export interface Props
  extends ButtonProps,
    React.ComponentProps<"button">,
    VariantProps<typeof buttonStyles> {}

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
      className={buttonStyles({
        intent,
        size,
        className,
      })}
      {...props}
    >
      {StartIconComponent && (
        <span>
          <StartIconComponent className={iconStyles} />
        </span>
      )}
      <span>{children}</span>
      {EndIconComponent && (
        <span>
          <EndIconComponent className={iconStyles} />
        </span>
      )}
    </button>
  );
}
