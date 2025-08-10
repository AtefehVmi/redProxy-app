import React, { Suspense } from "react";
import Sidebar from "@/modules/Layout/Sidebar";
import Navbar from "@/modules/Layout/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar className="hidden lg:block" />
      <div className="grow flex flex-col overflow-auto">
        <Navbar className="z-50" />
        <Suspense>
          <main className="p-8">{children}</main>
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardLayout;
