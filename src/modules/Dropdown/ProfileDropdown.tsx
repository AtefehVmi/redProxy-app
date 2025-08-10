"use client";

import cn from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";
import personIcon from "@public/icons/user.svg";
import rawArrowDownIcon from "@public/icons/down.svg";
import UserIcon from "@public/icons/modal-user.svg";
import LogoutIcon from "@public/icons/signout.svg";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import { getUserProfile } from "@/service/api";
import Loader from "@/components/Loader/Loader";
import { useUser } from "@/hooks/UseUser";

const ProfileDropdown = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, isLoading } = useUser();

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={profileRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        icon={<Image src={personIcon} alt="" className="w-4 h-4 relative" />}
      >
        <p className="text-white text-sm ml-[7px] font-semibold hidden lg:block">
          {isLoading ? <Loader /> : user?.email}
        </p>
        <Image src={rawArrowDownIcon} alt="" />
      </Button>

      {isOpen && (
        <div
          className={cn(
            "absolute top-10 right-0 w-[158px] z-[1000px] p-3 flex flex-col",
            "bg-darkmode-200 border border-darkmode-100 rounded-lg"
          )}
        >
          <Link href={"/profile"}>
            <button className="flex items-center gap-1 px-3 py-2 hover:bg-darkmode-300 rounded-md w-full">
              <Image src={UserIcon} alt="" />
              <p className="text-white text-base">Profile</p>
            </button>
          </Link>

          <div className="w-full h-px bg-darkmode-100 my-1"></div>

          <button className="flex items-center gap-1 px-3 py-2 hover:bg-darkmode-300 rounded-md">
            <Image src={LogoutIcon} alt="" />
            <p className="text-white text-base">Log out</p>
          </button>
        </div>
      )}
    </div>
  );
};
export default ProfileDropdown;
