import React from "react";
import { ControllerFieldState } from "react-hook-form";
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "children" | "id"> {
    label: string;
    fieldState: ControllerFieldState;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Input.d.ts.map