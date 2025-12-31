import React from "react";
interface PortalProps extends React.HTMLAttributes<HTMLDivElement> {
    container?: Element | null;
}
/**
 * Inspired by Radix UI's Portal component.
 * @see https://github.com/radix-ui/primitives/blob/main/packages/react/portal/src/portal.tsx
 */
export declare const Portal: React.ForwardRefExoticComponent<PortalProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Portal.d.ts.map