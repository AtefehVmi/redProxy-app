import Link from "next/link";

import SidebarNavLink from "@/components/Sidebar/SidebarNavLink";
import { APP_NAVIGATION, APP_ROUTES } from "@/constants/SidebarRoutes";
import BrandLogo from "@/components/Sidebar/BrandLogo";

const Sidebar = () => {
  return (
    <aside
      className="
        h-screen w-[var(--app-sidebar-width)] border-r border-solid border-white/10 bg-sidebar-bg
        pt-6 pl-5 pr-6 fixed left-0 top-0
    "
    >
      <header className="flex h-[var(--app-navbar-height)] items-center justify-start pl-[7px]">
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
                  {navItem.children.map((childrenItem) => {
                    return (
                      <SidebarNavLink
                        key={childrenItem.title}
                        {...childrenItem}
                      />
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return <SidebarNavLink key={navItem.title} {...navItem} />;
          }
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
