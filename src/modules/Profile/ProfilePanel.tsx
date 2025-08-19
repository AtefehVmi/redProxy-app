"use client";

import cn from "@/utils/cn";
import { useState } from "react";
import MyProfile from "./MyProfile";
import { useRouter, useSearchParams } from "next/navigation";
import UserInvoices from "../Transactions/UserInvoices";
import NotificationTab from "./NotificationTab";
import SecurityTab from "./SecurityTab";

const profileItems = [
  { name: "My profile", key: "profile", content: <MyProfile /> },
  {
    name: "Billing",
    key: "billing",
    content: <UserInvoices height="h-[600px]" />,
  },
  { name: "Notification", key: "notification", content: <NotificationTab /> },
  { name: "Security", key: "security", content: <SecurityTab /> },
  { name: "Delete Account", key: "delete" },
];

const ProfilePanel = ({ className }: { className?: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams?.get("tab") || "profile";
  const [activeTab, setActiveTab] = useState("profile");

  const activeContent = profileItems.find(
    (item) => item.key === activeTab
  )?.content;

  return (
    <div
      className={cn(
        "bg-darkmode-200/60 border-[1.75px] border-darkmode-100 p-8 rounded mb-8",
        className,
        "grid grid-cols-1 xl:grid-cols-18 gap-8"
      )}
    >
      <div className="col-span-1 xl:col-span-3 xl:grow w-full">
        <div className="flex flex-row flex-wrap xl:flex-col gap-4">
          {profileItems.map((item, index) => (
            <button
              onClick={() => {
                setActiveTab(item.key);
                router.replace(`?tab=${item.key}`, { scroll: false });
              }}
              type="button"
              className={cn(
                "rounded-full py-2.5 px-4 text-base text-white text-left whitespace-nowrap",
                activeTab === item.key
                  ? "bg-orange-100 cursor-not-allowed"
                  : "bg-darkmode-200 hover:text-grey-400",
                index === profileItems.length - 1 && "xl:mt-12"
              )}
              key={item.key}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="col-span-1 xl:col-span-15 xl:flex-grow w-full xl:border-l border-darkmode-100 xl:pl-8">
        {activeContent ?? (
          <div className="text-white text-lg">
            No content available for this tab.
          </div>
        )}
      </div>
    </div>
  );
};
export default ProfilePanel;
