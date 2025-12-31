import { Link } from "wasp/client/router";
type ButtonSize = "md" | "sm" | "xs";
type ButtonVariant = "primary" | "danger" | "ghost";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant?: ButtonVariant;
}
export declare function Button({ children, className, type, size, variant, ...props }: ButtonProps): import("react").JSX.Element;
type ButtonLinkProps = React.ComponentProps<typeof Link> & {
    size?: ButtonSize;
    variant?: ButtonVariant;
};
export declare function ButtonLink({ children, className, size, variant, ...props }: ButtonLinkProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map