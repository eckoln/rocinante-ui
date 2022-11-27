import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const buttonStyles: (props?: ({
    intent?: "primary" | "secondary" | "danger" | "ghost" | null | undefined;
    size?: "sm" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ButtonProps = {
    startIcon?: React.FC<React.ComponentProps<"svg">>;
    endIcon?: React.FC<React.ComponentProps<"svg">>;
};
interface Props$1 extends ButtonProps, React.ComponentProps<"button">, VariantProps<typeof buttonStyles> {
}
declare function Button({ intent, size, startIcon, endIcon, className, children, ...props }: Props$1): JSX.Element;

declare const headingStyles: (props?: ({
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    defaultVariants?: "variant" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type HeadingProps = {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
interface Props extends HeadingProps, React.ComponentProps<"h1">, VariantProps<typeof headingStyles> {
}
declare function Heading({ variant, as, className, children, ...props }: Props): JSX.Element;

export { Button, Heading };
