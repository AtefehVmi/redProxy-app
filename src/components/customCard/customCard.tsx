import React from 'react';

export interface CustomCardProps{
    children:React.ReactNode,
    className?: string,
}

const CustomCard = ({children, className}: CustomCardProps) => {
    return (
        <div
            className={`
                ${className ?? ""}
                flex justify-center items-center relative bg-custom-card-bg shadow-custom-card    
                after:content-[''] after:absolute after:top-[calc(-1*var(--custom-card-border-width))] 
                after:left-[calc(-1*var(--custom-card-border-width))] after:h-[calc(100%+var(--custom-card-border-width)*2)]
                after:w-[calc(100%+var(--custom-card-border-width)*2)]
                after:bg-custom-card-gradiant-border after:-z-[1] after:bg-[size:300%_300%]
            `}
        >
            {children}
        </div>
    );
};

export default CustomCard;