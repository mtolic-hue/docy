import React from "react";
interface ColorRadioButtonProps extends Required<Pick<React.InputHTMLAttributes<HTMLInputElement>, "name" | "checked" | "value" | "onChange" | "title">> {
    bgColor: string;
}
export declare function ColorRadioButton({ checked, bgColor, title, ...props }: ColorRadioButtonProps): React.JSX.Element;
export {};
//# sourceMappingURL=ColorRadioButton.d.ts.map