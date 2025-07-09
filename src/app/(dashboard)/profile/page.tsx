import ProfilePanel from "@/modules/Profile/ProfilePanel";
import React from "react";

const Page = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-start gap-1.5">
        <p className="text-xl font-semibold text-white">Your Profile</p>
        <p className="text-sm font-medium text-nav-sub-menu-heading-text">
          Overview of all you transactions
        </p>
      </div>

      <ProfilePanel className="mt-8" />
    </div>
  );
};

export default Page;
