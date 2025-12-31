import React from "react";
import { twJoin } from "tailwind-merge";
export function ColorRadioButton({ checked, bgColor, title, ...props }) {
    const id = React.useId();
    return (<div className="relative flex items-center">
      <label htmlFor={id} className={twJoin("duration-500-sm flex h-8 w-8 cursor-pointer items-center justify-center rounded-full drop-shadow-lg transition-all", "hover:scale-105 hover:ring-[1px] hover:ring-black", checked && "scale-105 ring-[1px] ring-black")} style={{ background: bgColor }} title={title}>
        <input type="radio" className="hidden" id={id} checked={checked} {...props}/>
      </label>
    </div>);
}
//# sourceMappingURL=ColorRadioButton.jsx.map