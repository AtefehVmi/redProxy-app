"use client";

import cn from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import RingIcon from "@public/icons/ring.svg";
import Button from "@/components/Button/Button";

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

const NotificationTab = () => {
  const [activeTab, setActiveTab] = useState<"all" | "read" | "unread">("all");

  return (
    <div className="bg-darkmode-200 border border-darkmode-100 px-8 pt-8 rounded-xl">
      <p className="text-white text-lg font-semibold">Notification</p>

      <div className="mt-8">
        <div>
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

        <div className="w-full h-px bg-darkmode-100 mt-8"></div>

        <div className="flex items-center justify-end py-6">
          <Button variant="text">Mark all as read</Button>
        </div>
      </div>
    </div>
  );
};
export default NotificationTab;
