import React from 'react';
import CustomCard from "@/components/CustomCard/customCard";


interface ConfigCardButtonProps {
    children: React.ReactNode;
    onClick?: (e:any) => void;
    width?: string;
}

const ConfigCardButton = (props: ConfigCardButtonProps) => {
    return (
        <CustomCard
            borderRadius={"rounded"}
            borderClassName={`h-[34px] p-px ${props.width ?? ""}`}
            containerClassName={`
                flex justify-center items-center gap-1 cursor-pointer py-[9px] px-[14px]
                transition-all duration-300 hover:scale-105 active:scale-90 select-none
            `}

            onClick={(e)=>{if (props.onClick) props.onClick(e)}}
        >
            {props.children}
        </CustomCard>
    );
};

export default ConfigCardButton;