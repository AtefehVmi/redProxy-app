"use client";

import cn from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";
import bellIcon from "@public/icons/cowbell.svg";
import CrossIcon from "@public/icons/cross.svg";
import RingIcon from "@public/icons/ring.svg";

const notifs = [
  {
    text: "60% sale on residential proxy",
    date: "9 NOV 2024",
    hour: "13:23 PM",
  },
  {
    text: "60% sale on residential proxy",
    date: "9 NOV 2024",
    hour: "13:23 PM",
  },
  {
    text: "60% sale on residential proxy",
    date: "9 NOV 2024",
    hour: "13:23 PM",
  },
  {
    text: "60% sale on residential proxy",
    date: "9 NOV 2024",
    hour: "13:23 PM",
  },
];

const NotifDropdown = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "read" | "unread">("all");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
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
    <div ref={dropdownRef}>
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
      >
        <Image src={bellIcon} alt={""} className="h-4 w-4 cursor-pointer" />
      </Button>

      {isOpen && (
        <div
          className={cn(
            "absolute top-10 right-0 md:right-[165px] lg:right-64.5 w-[356px] z-[1000px]",
            "bg-darkmode-200 border border-darkmode-100 rounded-xl"
          )}
        >
          <div className="flex items-center justify-between py-4 px-6 border-b border-darkmode-100">
            <p className="text-white text-[18px] font-semibold">Notification</p>
            <button onClick={() => setIsOpen(false)}>
              <Image src={CrossIcon} alt="" />
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-center gap-1 pl-2">
              <button
                onClick={() => setActiveTab("all")}
                className={cn(
                  "flex items-center gap-1 p-2.5",
                  activeTab === "all"
                    ? "*:text-white border-b"
                    : "*:text-grey-500"
                )}
              >
                <p className="text-[14px]">All</p>
                <div className="bg-darkmode-100 rounded py-0.5 px-[5px] text-sm">
                  12
                </div>
              </button>
              <button
                className={cn(
                  "flex items-center gap-1 p-2.5",
                  activeTab === "read"
                    ? "*:text-white border-b"
                    : "*:text-grey-500"
                )}
                onClick={() => setActiveTab("read")}
              >
                <p className="text-[14px]">Read</p>
                <div className="bg-darkmode-100 rounded py-0.5 px-[5px] text-sm">
                  2
                </div>
              </button>
              <button
                className={cn(
                  "flex items-center gap-1 p-2.5",
                  activeTab === "unread"
                    ? "*:text-white border-b"
                    : "*:text-grey-500"
                )}
                onClick={() => setActiveTab("unread")}
              >
                <p className="text-[14px]">Unread</p>
                <div className="bg-darkmode-100 rounded py-0.5 px-[5px] text-sm">
                  10
                </div>
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-2 h-[199px] overflow-auto">
              {notifs.map((notif, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-darkmode-100 rounded-full">
                      <Image src={RingIcon} alt="" className="m-2.5" />
                    </div>

                    <div>
                      <p className="text-white text-[14px]">{notif.text}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <p className="text-grey-500 text-sm">{notif.date}</p>
                        <div className="h-1 w-1 bg-grey-500 rounded-full"></div>
                        <p className="text-grey-500 text-sm">{notif.hour}</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-1.5 w-1.5 bg-orange-200 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-darkmode-100 flex items-center justify-between py-3 px-6">
            <p className="m-2 text-white text-sm font-semibold">
              Mark all as read
            </p>

            <Button>View all notification</Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default NotifDropdown;
