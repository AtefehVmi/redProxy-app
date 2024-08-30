import Link from "next/link";

import SidebarNavLink from "@/components/Sidebar/SidebarNavLink";
import { APP_NAVIGATION, APP_ROUTES } from "@/constants/SidebarRoutes";
import BrandLogo from "@/public/brand/logo.svg";

const Sidebar = () => {
  return (
    <aside className="h-screen w-[var(--app-sidebar-width)] border-r border-solid border-darkBorder bg-navBG">
      <header className="flex h-[var(--app-navbar-height)] items-center justify-start px-[33px]">
        <Link href={APP_ROUTES.dashboard}>
          <BrandLogo />
        </Link>
      </header>
      <nav className="flex flex-col gap-y-5 px-5 pt-[30px]">
        {APP_NAVIGATION.map((navItem) => {
          if (navItem.children) {
            return <></>;
          } else {
            return <SidebarNavLink key={navItem.title} {...navItem} />;
          }
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
