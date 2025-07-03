import React, { Suspense } from "react";
import Sidebar from "@/modules/Layout/Sidebar";
import Navbar from "@/modules/Layout/Navbar";
import LayoutMainContainer from "@/modules/Layout/LayoutMainContainer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <Navbar className="z-50" />
      <LayoutMainContainer>
        <Suspense>{children}</Suspense>
      </LayoutMainContainer>
    </>
  );
};

export default DashboardLayout;
