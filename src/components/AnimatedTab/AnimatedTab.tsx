"use client";

import { motion } from "framer-motion";
import cn from "@/utils/cn";

interface AnimatedTabProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  activeClassName?: string;
  inactiveClassName?: string;
  className?: string;
}

export default function AnimatedTab({
  children,
  isActive,
  onClick,
  className,
  activeClassName = "bg-darkmode-100 border-darkmode-100 text-white",
  inactiveClassName = "bg-darkmode-300 border-darkmode-300 text-white",
}: AnimatedTabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative rounded border px-3 py-1.5 text-sm flex items-center justify-center transition-colors duration-300 overflow-hidden",
        isActive ? activeClassName : inactiveClassName,
        className
      )}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="tabHighlight"
          className="absolute inset-0 rounded border border-darkmode-100"
          initial={{ scale: 0.95, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0.6 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 25,
            duration: 0.5,
          }}
        />
      )}
    </button>
  );
}
