import React from "react";
import UserBalance from "@/modules/Dashboard/UserBalance";
import UserDataUsage from "@/modules/Dashboard/UserDataUsage";
import UserInvoices from "@/modules/Dashboard/UserInvoices";
import DashboardHeading from "@/modules/Dashboard/DashboardHeading";

const Page = () => {
  return (
    <div className="w-full h-full grid grid-cols-4">
      <div className="col-span-4">
        <DashboardHeading />
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
