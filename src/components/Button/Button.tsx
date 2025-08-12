import cn from "@/utils/cn";
import React, { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "text" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
  children?: React.ReactNode;
  // eslint-disable-next-line
  onClick?: (e?: any) => void;
  rightIcon?: ReactNode;
}

const Button = ({
  variant = "primary",
  className,
  icon,
  children,
  onClick,
  rightIcon,
  ...props
}: ButtonProps & Omit<React.ComponentProps<"button">, keyof ButtonProps>) => {
  const baseStyle = cn(
    "rounded-md px-[9.5px] py-2 text-base md:text-xs font-semibold relative overflow-hidden group whitespace-nowrap",
    icon && "flex items-center justify-center gap-1",
    rightIcon && "flex items-center justify-center gap-1"
  );
  const variantStyle = cn(
    variant === "primary" &&
      "bg-darkmode-100 text-white hover:bg-orange-200 gradient-border focus:bg-[#EB7F43] disabled:bg-darkmode-200",
    variant === "text" &&
      "bg-transparent text-white hover:bg-darkmode-200 disabled:text-grey-400 focus:bg-darkmode-100",
    variant === "secondary" &&
      "bg-transparent rounded-lg border border-white/10 text-white hover:border-orange-200 focus:border-[#EB7F43] disabled:border-darkmode-200",
    variant === "ghost" &&
      "bg-darkmode-200 border border-white/10 hover:border-white/25 text-white focus:border-transparent focus:bg-darkmode-100 disabled:bg-transparent disabled:border-darkmode-200"
  );

  return (
    <button
      onClick={onClick}
      {...props}
      className={cn(baseStyle, variantStyle, className)}
    >
      {variant === "primary" && (
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-white w-20 h-6 rounded-full opacity-0 group-hover:opacity-60 blur-lg group-focus:opacity-60"></div>
      )}
      {icon}
      {children}
      {rightIcon}
    </button>
  );
};

export default Button;
