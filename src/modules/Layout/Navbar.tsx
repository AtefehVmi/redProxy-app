"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import dashboardIcon from "@public/icons/dashboard.svg";
import personIcon from "@public/icons/user.svg";
import rawArrowDownIcon from "@public/icons/down.svg";
import { APP_NAVIGATION, NavModel } from "@/constants/SidebarRoutes";
import Button from "@/components/Button/Button";
import NotifDropdown from "../Dropdown/NotifDropdown";
import cn from "@/utils/cn";

const Navbar = ({ className }: { className?: string }) => {
  const pathName = usePathname();
  const [activePageName, setActivePageName] = React.useState("Dashboard");

  function findTitleByPathName(
    data: Array<NavModel>,
    pathName: string
  ): string | undefined {
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
    const activeTitle = findTitleByPathName(APP_NAVIGATION, pathName);
    setActivePageName(activeTitle ?? "Dashboard");
  }, [pathName]);

  return (
    <div
      className={cn(
        "w-[calc(100vw-var(--app-sidebar-width)-var(--navbar-margin-left)-var(--navbar-margin-right))] h-[var(--app-navbar-height)] fixed top-[var(--navbar-margin-top)] left-[calc(var(--navbar-margin-left)+var(--app-sidebar-width))]",
        className,
        "flex justify-between items-center"
      )}
    >
      <div className="flex items-center gap-2">
        <Image src={dashboardIcon} alt={""} className="h-6 w-6" />
        <p className="text-left text-white text-[24px] font-bold">
          {activePageName}
        </p>
      </div>
      <div className="flex items-center gap-3 relative">
        <NotifDropdown />
        <Button icon={<Image src={personIcon} alt={""} className="w-4 h-4" />}>
          <p className="text-white text-sm ml-[7px] font-semibold">
            Mike Wazowski
          </p>
          <Image src={rawArrowDownIcon} alt={""} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
