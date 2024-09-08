import React, {ReactEventHandler} from 'react';

export interface CustomCardProps{
    children:React.ReactNode,
    borderClassName?: string,
    containerClassName?:string,
    borderRadius?: string,
    onClick?: (e: any) => void
}

const CustomCard = ({children,borderClassName, containerClassName, borderRadius, onClick}: CustomCardProps) => {

    const onCardClick = (e:any) =>{
        if (onClick) onClick(e)
    }

    return (
        <div
            className={`
                flex justify-center items-center bg-custom-card-gradiant-border
                ${borderClassName ?? ""} 
                ${borderRadius ?? ""}
            `}
            onClick={onCardClick}
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