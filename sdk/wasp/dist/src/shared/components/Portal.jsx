import React from "react";
import ReactDOM from "react-dom";
/**
 * Inspired by Radix UI's Portal component.
 * @see https://github.com/radix-ui/primitives/blob/main/packages/react/portal/src/portal.tsx
 */
export const Portal = React.forwardRef(function Portal({ container: containerProp, ...portalProps }, forwardRef) {
    const [mounted, setMounted] = React.useState(false);
    React.useLayoutEffect(() => setMounted(true), []);
    const container = containerProp || (mounted && globalThis?.document?.body);
    return container
        ? ReactDOM.createPortal(<div {...portalProps} ref={forwardRef}/>, container)
        : null;
});
//# sourceMappingURL=Portal.jsx.map