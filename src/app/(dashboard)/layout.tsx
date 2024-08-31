import React from "react";
import Sidebar from "@/modules/Sidebar";
import Navbar from "@/modules/Navbar";
import LayoutMainContainer from "@/modules/LayoutMainContainer";

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
