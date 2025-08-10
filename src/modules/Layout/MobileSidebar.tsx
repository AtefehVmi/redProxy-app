"use client";

import Link from "next/link";

import SidebarNavLink from "@/components/Sidebar/SidebarNavLink";
import { APP_NAVIGATION, APP_ROUTES } from "@/constants/SidebarRoutes";
import BrandLogo from "@/components/Sidebar/BrandLogo";
import cn from "@/utils/cn";
import CrossIcon from "@public/icons/cross-big.svg";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button/Button";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "-100%" },
};

const MobileSidebar = ({
  className,
  onClose,
  isOpen,
}: {
  className?: string;
  onClose?: () => void;
  isOpen: boolean;
}) => {
  const matchPathMap: Record<string, string[]> = {
    [APP_ROUTES.residentialProxy]: [
      "/viewConfig/residential",
      "/plan/residential",
      "/firstView/residential",
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/35 backdrop-blur-xs flex"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            className={cn(
              "h-full w-72 max-w-full bg-black flex flex-col",
              className
            )}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <aside
              className={cn(
                "h-screen overflow-auto max-w-[270px] w-full border-r border-solid border-white/10 bg-darkmode-200 pt-6 px-6",
                className
              )}
            >
              <header className="flex items-center justify-between pl-[7px]">
                <Link href={APP_ROUTES.dashboard}>
                  <BrandLogo />
                </Link>

                <Button onClick={onClose} className="py-[11px] px-2">
                  <Image src={CrossIcon} alt="" />
                </Button>
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;
