import React from 'react'
import Link from 'next/link'

export interface CustomLinkProps{
    className?: string;
    children: React.ReactNode;
    href: string
}

function CustomLink({
    className,
    children,
    href
}: CustomLinkProps) {
    return (
        <Link 
            href={href} 
            className={`
                    ${className ?? ""} 
                    w-auto h-auto flex justify-center items-center gap-[5px]
                    bg-custom-link-bg rounded-lg border border-custom-link-border shadow-custom-link
                    text-white text-xs font-semibold transition-all duration-300
                    hover:bg-custom-link-hover-bg active:bg-custom-link-active-bg
            `}
        >
            {children}
        </Link>
    )
}

export default CustomLink