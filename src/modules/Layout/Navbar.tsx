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
import ProfileDropdown from "../Dropdown/ProfileDropdown";

const Navbar = ({ className }: { className?: string }) => {
  const pathName = usePathname();

  const [activePageName, setActivePageName] = React.useState("Dashboard");
  const [activeNavItem, setActiveNavItem] = React.useState<NavModel | null>(
    null
  );

  function findNavItemByPathName(
    data: Array<NavModel>,
    pathName: string
  ): NavModel | undefined {
    for (const item of data) {
      if (item.href === pathName) {
        return item;
      }
      if (item.children && item.children.length > 0) {
        const foundChild = findNavItemByPathName(item.children, pathName);
        if (foundChild) {
          return foundChild;
        }
      }
    }
  }

  useEffect(() => {
    const activeItem = findNavItemByPathName(APP_NAVIGATION, pathName);
    setActivePageName(activeItem?.title ?? "Dashboard");
    setActiveNavItem(activeItem ?? null);
  }, [pathName]);

  const iconSrc =
    // @ts-ignore: NavModel children have navbarIconSrc, but parent doesn't
    activeNavItem?.navbarIconSrc ??
    activeNavItem?.iconSrc ??
    (activeNavItem?.href === "/" ? "/icons/dashboard.svg" : null);

  const iconToUse =
    typeof iconSrc === "string" && iconSrc.length > 0 ? iconSrc : dashboardIcon;

  return (
    <div
      className={cn(
        "w-[calc(100vw-var(--app-sidebar-width)-var(--navbar-margin-left)-var(--navbar-margin-right))] h-[var(--app-navbar-height)] fixed top-[var(--navbar-margin-top)] left-[calc(var(--navbar-margin-left)+var(--app-sidebar-width))]",
        className,
        "flex justify-between items-center"
      )}
    >
      <div className="flex items-center gap-2">
        <Image
          src={iconToUse}
          alt={activePageName}
          width={24}
          height={24}
          unoptimized
        />
        <p className="text-left text-white text-[24px] font-bold">
          {activePageName}
        </p>
      </div>
      <div className="flex items-center gap-3 relative">
        <NotifDropdown />
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Navbar;
