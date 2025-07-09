import cn from "@/utils/cn";
import React, { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "text" | "secondary" | "tertiary";
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
    "rounded-md px-[9.5px] py-2 text-xs font-semibold",
    icon && "flex items-center justify-center gap-1",
    rightIcon && "flex items-center justify-center gap-1"
  );
  const variantStyle = cn(
    variant === "primary" &&
      "bg-darkmode-100 text-white hover:bg-darkmode-100/80 gradient-border",
    variant === "text" &&
      "bg-transparent text-white hover:bg-darkmode-200 disabled:text-grey-400 focus:bg-darkmode-100",
    variant === "secondary" &&
      "bg-transparent rounded-lg hover:bg-white/5 border border-white/10",
    variant === "tertiary" &&
      "bg-darkmode-200 gradient-border hover:bg-darkmode-300"
  );

  return (
    <button
      onClick={onClick}
      {...props}
      className={cn(baseStyle, variantStyle, className)}
    >
      {icon}
      {children}
      {rightIcon}
    </button>
  );
};

export default Button;
