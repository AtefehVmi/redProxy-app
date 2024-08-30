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

  const classNames = `flex h-[43px] w-full items-center gap-x-4 rounded-[10px] px-[18px] ${
    isActive && "bg-[#263445]"
  }`;

  return (
    <Link href={href} className={classNames}>
      <div className="relative h-[18px] w-[18px]">
        <Image src={iconSrc} alt={title} fill />
      </div>
      <p className="text-sm leading-[21px]">{title}</p>
    </Link>
  );
};

export default SidebarNavLink;
