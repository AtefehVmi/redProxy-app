import React from "react";
import Sidebar from "@/modules/Sidebar";
import Navbar from "@/modules/Navbar";

const DashboardLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="">
            <Sidebar/>
            <Navbar/>
            <div>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
