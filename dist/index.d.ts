import * as _tw_classed_react from '@tw-classed/react';
import { DerivedComponentType } from '@tw-classed/react';
import React from 'react';

declare const StyledButton: _tw_classed_react.ClassedComponentType<"button", Partial<{
    variant: "primary" | "secondary" | "danger" | "ghost";
    size: "sm";
}>, Pick<{
    base: string;
    variants: {
        variant: {
            primary: string;
            secondary: string;
            danger: string;
            ghost: string;
        };
        size: {
            sm: string;
        };
    };
    defaultVariants: {
        variant: "primary";
        size: "sm";
    };
}, "variants" | "defaultVariants">>;
type ButtonProps = {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
} & React.ComponentProps<typeof StyledButton>;
declare const Button: DerivedComponentType<_tw_classed_react.ClassedComponentType<"button", Partial<{
    variant: "primary" | "secondary" | "danger" | "ghost";
    size: "sm";
}>, Pick<{
    base: string;
    variants: {
        variant: {
            primary: string;
            secondary: string;
            danger: string;
            ghost: string;
        };
        size: {
            sm: string;
        };
    };
    defaultVariants: {
        variant: "primary";
        size: "sm";
    };
}, "variants" | "defaultVariants">>, ButtonProps, {}>;

declare const Heading: DerivedComponentType<_tw_classed_react.ClassedComponentType<"h6", Partial<{
    size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}>, Pick<{
    base: string;
    variants: {
        size: {
            h6: string;
            h5: string;
            h4: string;
            h3: string;
            h2: string;
            h1: string;
        };
    };
    defaultVariants: {
        size: "h6";
    };
}, "variants" | "defaultVariants">>, Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "key" | keyof React.HTMLAttributes<HTMLHeadingElement>> & {
    ref?: ((instance: HTMLHeadingElement | null) => void) | React.RefObject<HTMLHeadingElement> | null | undefined;
}, "size" | "as"> & Partial<{
    size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}> & {
    as?: "h6" | undefined;
}, {}>;

export { Button, Heading };
