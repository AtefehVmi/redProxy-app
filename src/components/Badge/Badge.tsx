import React from 'react';
import CustomCard from "@/components/CustomCard/customCard";

interface BadgeProps {
    text:string,
    variant: "SUCCESS" | "ERROR",
    className?:string
}

const Badge = ({text, variant, className}: BadgeProps) => {
    return (
        <CustomCard
            borderRadius={"rounded"}
            borderClassName={"p-px h-[26px]"}
            containerClassName={`
                ${className ?? ""} 
                py-1.5 px-3 text-xs font-semibold
                ${variant === "SUCCESS" && "text-proxy-color"}
                ${variant === "ERROR" && "text-error"}
            `}
        >
            {text}
        </CustomCard>
    );
};

export default Badge;