"use client";

import Link from "next/link";

import SidebarNavLink from "@/components/Sidebar/SidebarNavLink";
import { APP_NAVIGATION, APP_ROUTES } from "@/constants/SidebarRoutes";
import BrandLogo from "@/components/Sidebar/BrandLogo";
import cn from "@/utils/cn";

const Sidebar = ({ className }: { className?: string }) => {
  const matchPathMap: Record<string, string[]> = {
    [APP_ROUTES.residentialProxy]: [
      "/plan/residential",
      "/purchase/residential",
      "/generate/residential",
    ],
    [APP_ROUTES.datacenterProxy]: [
      "/viewConfig/datacenter",
      "/plan/datacenter",
      "/firstView/datacenter",
    ],
    [APP_ROUTES.mobileProxy]: ["/plan/mobile", "/firstView/mobile"],
    [APP_ROUTES.ispProxy]: ["/plan/isp", "/firstView/isp", "/viewConfig/isp"],
  };

  return (
    <aside
      className={cn(
        "h-screen max-w-[270px] w-full border-r border-solid border-white/10 bg-sidebar-bg pt-6 px-6",
        className
      )}
    >
      <header className="flex items-center justify-start pl-[7px]">
        <Link href={APP_ROUTES.dashboard}>
          <BrandLogo />
        </Link>
      </header>
      <nav className="flex flex-col gap-y-8 pt-16">
        {APP_NAVIGATION.map((navItem) => {
          if (navItem.children) {
            return (
              <div key={navItem.title}>
                <p className="text-left text-nav-sub-menu-heading-text text-sm mb-3">
                  {navItem.title}
                </p>
                <div className="flex flex-col gap-[18px]">
                  {navItem.children.map((childrenItem) => (
                    <SidebarNavLink
                      key={childrenItem.title}
                      {...childrenItem}
                      matchPaths={
                        childrenItem.href
                          ? matchPathMap[childrenItem.href] ?? []
                          : []
                      }
                    />
                  ))}
                </div>
              </div>
            );
          } else {
            return (
              <SidebarNavLink
                key={navItem.title}
                {...navItem}
                matchPaths={
                  navItem.href ? matchPathMap[navItem.href] ?? [] : []
                }
              />
            );
          }
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
