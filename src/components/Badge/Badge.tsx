import React from "react";
import CustomCard from "@/components/CustomCard/customCard";
import cn from "@/utils/cn";

interface BadgeProps {
  text: string;
  variant: "SUCCESS" | "ERROR";
  className?: string;
}

const Badge = ({ text, variant, className }: BadgeProps) => {
  return (
    <div
      className={cn(
        "rounded p-px h-[26px] py-1.5 px-3 text-xs font-semibold",
        className ?? "",
        variant === "SUCCESS" && "text-proxy-color",
        variant === "ERROR" && "text-error"
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
