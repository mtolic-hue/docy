import { twJoin } from "tailwind-merge";
import { Link } from "wasp/client/router";
export function Button({ children, className, type = "button", size = "md", variant = "primary", ...props }) {
    return (<button type={type} className={getButtonClasses({
            size,
            variant,
            className,
        })} {...props}>
      {children}
    </button>);
}
export function ButtonLink({ children, className, size = "md", variant = "primary", ...props }) {
    return (<Link className={getButtonClasses({
            size,
            variant,
            className,
        })} {...props}>
      {children}
    </Link>);
}
function getButtonClasses({ size, variant, className, }) {
    return twJoin("rounded-md font-semibold", variantStyles[variant], sizeStyles[size], className);
}
const sizeStyles = {
    md: "px-4 py-2",
    sm: "px-3 py-1.5 text-sm",
    xs: "px-2 py-1 text-xs",
};
const variantStyles = {
    primary: "bg-primary-500 hover:bg-primary-400 active:bg-primary-300 text-neutral-800",
    danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
    ghost: "bg-transparent text-neutral-800 hover:bg-neutral-100 active:bg-neutral-200",
};
//# sourceMappingURL=Button.jsx.map