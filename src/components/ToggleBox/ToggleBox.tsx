import cn from "@/utils/cn";
import React from "react";

interface ToggleBoxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const ToggleBox: React.FC<ToggleBoxProps> = ({ checked, onChange }) => {
  return (
    <label className="inline-flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        disabled={!onChange}
      />
      <div
        className={cn(
          "relative w-10 h-[22px] bg-darkmode-100 rounded-full transition-all",
          "after:absolute after:top-0.5 after:left-0.5 after:bg-darkmode-200 after:h-[18px] after:w-[18px] after:rounded-full after:transition-all",
          checked ? "bg-orange-200 after:translate-x-[18px]" : "bg-darkmode-100"
        )}
      ></div>
    </label>
  );
};

export default ToggleBox;
