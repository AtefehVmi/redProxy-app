"use client";
import React from "react";
import Loader from "../Loader/Loader";

export interface CustomLinkProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
}

function CustomButton({
  className,
  children,
  onClick,
  type = "button",
  loading,
}: CustomLinkProps) {
  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`
                  ${className ?? ""} \
                  flex justify-center items-center \
                  bg-custom-link-bg rounded-lg border border-custom-link-border shadow-custom-link \
                  text-base-500 transition-all duration-300 \
                  hover:bg-custom-link-hover-bg active:bg-custom-link-active-bg
                `}
      type={type}
    >
      {children}
      {loading && <Loader />}
    </button>
  );
}

export default CustomButton;
