"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import dashboardIcon from "@public/icons/dashboard.svg";

import { APP_NAVIGATION, NavModel } from "@/constants/SidebarRoutes";
import NotifDropdown from "../Dropdown/NotifDropdown";
import cn from "@/utils/cn";
import ProfileDropdown from "../Dropdown/ProfileDropdown";
import MobileSidebar from "./MobileSidebar";

const Navbar = ({ className }: { className?: string }) => {
  const pathName = usePathname();

  const [activePageName, setActivePageName] = React.useState("Dashboard");
  const [activeNavItem, setActiveNavItem] = React.useState<NavModel | null>(
    null
  );
  const [openMenu, setOpenMenu] = useState(false);

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
        className,
        "flex justify-between items-center",
        "relative h-10 w-full px-8 py-[34px]",
        "border-b border-darkmode-100 md:border-0"
      )}
    >
      <div className="flex items-center gap-2">
        <Image
          className="hidden md:block"
          src={iconToUse}
          alt={activePageName}
          width={24}
          height={24}
          unoptimized
        />

        <button onClick={() => setOpenMenu(true)} className="block md:hidden">
          <Image
            src={iconToUse}
            alt={activePageName}
            width={24}
            height={24}
            unoptimized
            className="min-w-6 min-h-6"
          />
        </button>

        {openMenu && (
          <MobileSidebar
            className="absolute left-0 top-0 w-full max-w-[324px] h-full"
            isOpen={openMenu}
            onClose={() => setOpenMenu(false)}
          />
        )}
        <p className="text-left text-white text-lg md:text-2xl font-bold">
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
