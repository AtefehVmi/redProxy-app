import React from 'react';

const LayoutMainContainer = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="
            w-[calc(100vw-var(--app-sidebar-width)-var(--navbar-margin-left)-var(--navbar-margin-right))]
            h-[calc(100vh-var(--navbar-margin-top)-var(--app-navbar-height)-var(--navbar-margin-bottom))]
            fixed top-[calc(var(--navbar-margin-top)+var(--app-navbar-height)+var(--navbar-margin-bottom))]
            left-[calc(var(--navbar-margin-left)+var(--app-sidebar-width))]
        ">
            {children}
        </div>
    );
};

export default LayoutMainContainer;