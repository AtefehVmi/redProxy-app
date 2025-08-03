import React from "react";
import UserBalance from "@/modules/Dashboard/UserBalance";
import UserDataUsage from "@/modules/Dashboard/UserDataUsage";
import UserInvoices from "@/modules/Dashboard/UserInvoices";
import DashboardHeading from "@/modules/Dashboard/DashboardHeading";

const Page = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-4">
      <div className="lg:col-span-4">
        <DashboardHeading />
      </div>
      <div className="col-span-4 h-auto mt-8 grid grid-cols-1 1420:grid-cols-4 gap-x-4">
        <UserBalance className="1420:col-span-1" />
        <UserDataUsage className="1420:col-span-3 mt-5 1420:mt-0" />
      </div>
      <div className="col-span-4 grid grid-cols-1 lg:grid-cols-4 h-auto mt-4 pb-8">
        <UserInvoices />
      </div>
    </div>
  );
};

export default Page;
