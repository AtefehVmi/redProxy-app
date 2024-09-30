import React from 'react';
import AuthNavbar from "@/modules/Layout/AuthNavbar";

const Layout = ({children}: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full min-h-screen relative flex flex-col justify-start items-center">
      <AuthNavbar/>
      {children}
    </div>
  );
};

export default Layout;