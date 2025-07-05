import React from "react";
import UserInvoices from "@/modules/Transactions/UserInvoices";

const Page = () => {
  return (
    <div className={"w-full h-full flex flex-col gap-[33px] pb-8"}>
      <div className="flex flex-col items-start gap-1.5">
        <p className="text-xl font-semibold text-white">Your transactions</p>
        <p className="text-sm font-medium text-nav-sub-menu-heading-text">
          Overview of all you transactions
        </p>
      </div>
      <UserInvoices />
    </div>
  );
};

export default Page;
