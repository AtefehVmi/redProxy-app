"use client";

import Loader from "@/components/Loader/Loader";
import { useUser } from "@/hooks/UseUser";
import { formatTodayDate } from "@/utils/timeFormatter";

const DashboardHeading = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      <p className="text-left text-white text-xl">
        Good morning, {isLoading ? <Loader /> : user?.email}
      </p>
      <p className="text-left text-nav-sub-menu-heading-text text-base-500 mt-1.5">
        {formatTodayDate()}
      </p>
    </>
  );
};

export default DashboardHeading;
