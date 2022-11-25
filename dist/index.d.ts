import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const button: (props?: ({
    intent?: null | undefined;
    size?: null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ButtonProps = {
    startIcon?: React.FC<React.ComponentProps<"svg">>;
    endIcon?: React.FC<React.ComponentProps<"svg">>;
};
interface Props extends ButtonProps, React.ComponentProps<"button">, VariantProps<typeof button> {
}
declare function Button({ intent, size, startIcon, endIcon, className, children, ...props }: Props): JSX.Element;

export { Button };
