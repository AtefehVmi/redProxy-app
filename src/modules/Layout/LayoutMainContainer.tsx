import React from "react";

const LayoutMainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
            min-w-[calc(100%-267px)]
            h-[calc(100vh-var(--navbar-margin-top)-var(--app-navbar-height)-var(--navbar-margin-bottom))]
            absolute top-[calc(var(--navbar-margin-top)+var(--app-navbar-height)+var(--navbar-margin-bottom))]
            left-[var(--app-sidebar-width)]
            pl-[var(--navbar-margin-left)] pr-[var(--navbar-margin-right)]
            overflow-x-hidden overflow-y-auto
        "
    >
      {children}
    </div>
  );
};

export default LayoutMainContainer;
