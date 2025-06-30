"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SidebarNavLinkProps {
  title: string;
  href?: string;
  iconSrc?: string;
}

const SidebarNavLink: React.FC<SidebarNavLinkProps> = (props) => {
  const { href = "", title, iconSrc = "" } = props;
  const pathname = usePathname();
  const isActive = href === pathname;

  const classNames = `
    flex justify-start items-center w-full gap-x-2 rounded-[2px] p-2.5 transition-all 
    duration-300
    hover:bg-nav-link-active-bg
    ${
      isActive &&
      "bg-nav-link-active-bg border-r-[4px] border-solid border-white/20"
    }`;

  return (
    <Link href={href} className={classNames}>
      <div className="relative h-4 w-4">
        <Image src={iconSrc} alt={title} fill />
      </div>
      <p
        className={`text-left text-profile-card-text text-base-500 ${
          isActive ? "text-white" : ""
        }`}
      >
        {title}
      </p>
    </Link>
  );
};

export default SidebarNavLink;
