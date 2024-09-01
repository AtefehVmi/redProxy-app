import React from "react";
import Sidebar from "@/modules/Layout/Sidebar";
import Navbar from "@/modules/Layout/Navbar";
import LayoutMainContainer from "@/modules/Layout/LayoutMainContainer";

const DashboardLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="">
            <Sidebar/>
            <Navbar/>
            <LayoutMainContainer>
                {children}
            </LayoutMainContainer>

        </div>
    );
};

export default DashboardLayout;
