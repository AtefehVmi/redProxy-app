"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";
import SettingsIcon from "@public/icons/settings-sliders.svg";
import PlusIcon from "@public/icons/plus.svg";
import GamingIcon from "@public/icons/gamepad.svg";
import GenericIcon from "@public/icons/plans.svg";
import GlobeIcon from "@public/icons/globe.svg";
import cn from "@/utils/cn";

interface Props {
  className?: string;
}

const filterOptions = [
  { filterName: "All", icon: PlusIcon },
  { filterName: "Scraping", icon: GlobeIcon },
  { filterName: "Gaming", icon: GamingIcon },
  { filterName: "Generic", icon: GenericIcon },
];

const StatusFilterButton = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        statusRef.current &&
        !statusRef.current.contains(event.target as Node)
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
    <div ref={statusRef} className="relative">
      <Button
        className={cn(`px-4 py-3 text-base`, className)}
        rightIcon={<Image src={SettingsIcon} alt="" />}
        onClick={() => setIsOpen(!isOpen)}
      >
        Status
      </Button>

      {isOpen && (
        <div
          className={cn(
            "bg-darkmode-200 border border-darkmode-100 rounded-lg p-3",
            "flex flex-col gap-3 absolute top-16 right-0 w-40"
          )}
        >
          {filterOptions.map((item) => (
            <button
              key={item.filterName}
              className="flex items-center gap-1 py-2 px-3 hover:bg-darkmode-100"
            >
              <Image src={item.icon} alt="" className="w-5 h-5" />
              <p className="text-white text-base ">{item.filterName}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusFilterButton;
