import React from "react";
interface DialogProps extends React.PropsWithChildren {
    open: boolean;
    onClose: () => void;
    closeOnClickOutside?: boolean;
}
export declare function Dialog({ open, onClose, children, closeOnClickOutside, }: DialogProps): React.JSX.Element;
export {};
//# sourceMappingURL=Dialog.d.ts.map