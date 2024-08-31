'use client'
import React, {useEffect} from 'react';
import Image from "next/image";
import {usePathname} from "next/navigation";
import CustomCard from "@/components/customCard/customCard";

import dashboardIcon from '@public/icons/dashboard.svg'
import bellIcon from '@public/icons/bell.svg'
import personIcon from '@public/icons/person.svg'
import rawArrowDownIcon from '@public/icons/raw_arrow_down.svg'
import {APP_NAVIGATION, NavModel} from "@/constants/SidebarRoutes";


const Navbar = () => {
    const pathName = usePathname()
    const [activePageName, setActivePageName] = React.useState("Dashboard")

    function findTitleByPathName(data: Array<NavModel>, pathName: string): string |undefined {
        for (let item of data) {
            if (item.href === pathName) {
                return item.title;
            }

            if (item.children && item.children.length > 0) {
                const result = findTitleByPathName(item.children, pathName);
                if (result) {
                    return result;
                }
            }
        }
    }

    useEffect(() => {
        const activeTitle = findTitleByPathName(APP_NAVIGATION, pathName)
        setActivePageName(activeTitle ?? "Dashboard")
    }, [pathName])

    return (
        <div className="
            w-[calc(100vw-var(--app-sidebar-width)-var(--navbar-margin-left)-var(--navbar-margin-right))]
            h-[var(--app-navbar-height)] fixed top-[var(--navbar-margin-top)]
            left-[calc(var(--navbar-margin-left)+var(--app-sidebar-width))]
            flex justify-between items-center
        ">
            <div className="flex items-center gap-2">
                <Image src={dashboardIcon} alt={''} className="h-6 w-6"/>
                <p className="text-left text-white text-2xl font-bold">{activePageName}</p>
            </div>
            <div className="flex items-center gap-4">
                <Image src={bellIcon} alt={''} className="h-4 w-4 cursor-pointer"/>
                <CustomCard className="
                    flex items-center w-[153px] h-[34px] rounded after:rounded
                    py-[9px] pl-[11px] pr-[15px] cursor-pointer
                ">
                    <Image src={personIcon} alt={''} className="w-4 h-4"/>
                    <p className="text-profile-card-text text-xs font-medium ml-[7px]">
                        Mike Wazowski
                    </p>
                    <Image src={rawArrowDownIcon} alt={''} className="ml-[11px]"/>
                </CustomCard>

            </div>
        </div>
    );
};

export default Navbar;