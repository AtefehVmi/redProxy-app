import React from 'react';

export interface CustomCardProps{
    children:React.ReactNode,
    borderClassName?: string,
    containerClassName?:string,
    borderRadius?: string,
}

const CustomCard = ({children,borderClassName, containerClassName, borderRadius}: CustomCardProps) => {
    return (
        <div
            className={`
                flex justify-center items-center bg-custom-card-gradiant-border
                ${borderClassName ?? ""} 
                ${borderRadius ?? ""}
            `}
        >
            <div
                className={`
                    w-full h-full min-h-full min-w-full relative bg-custom-card-bg
                    shadow-custom-card
                    ${containerClassName ?? ''} 
                    ${borderRadius ?? ""}
                `}
            >
                {children}
            </div>
        </div>
    );
};

export default CustomCard;