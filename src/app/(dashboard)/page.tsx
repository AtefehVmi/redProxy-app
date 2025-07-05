import React from "react";
import { formatTodayDate } from "@/utils/timeFormatter";
import UserBalance from "@/modules/Dashboard/UserBalance";
import UserDataUsage from "@/modules/Dashboard/UserDataUsage";
import UserInvoices from "@/modules/Dashboard/UserInvoices";

const Page = () => {
  return (
    <div className="w-full h-full grid grid-cols-4">
      <div className="col-span-4">
        <p className="text-left text-white text-xl">Good morning, {"Mike!"}</p>
        <p className="text-left text-nav-sub-menu-heading-text text-base-500 mt-1.5">
          {formatTodayDate()}
        </p>
      </div>
      <div className="col-span-4 h-auto mt-8 grid grid-cols-4 gap-x-4">
        <UserBalance className="col-span-1" />
        <UserDataUsage className="col-span-3" />
      </div>
      <div className="col-span-4 grid grid-cols-4 h-auto mt-4 pb-8">
        <UserInvoices />
      </div>
    </div>
  );
};

export default Page;
