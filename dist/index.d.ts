import { W } from 'windstitch';

declare const Button: W.Component<"button", {
    color: {
        gray: string;
        violet: string;
    };
    size: {
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
    };
}, {
    color: "gray";
    size: "base";
}>;

export { Button };
