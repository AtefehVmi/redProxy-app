import React from "react";
import CustomLink from "@/components/CustomLink/customLink";
import CreateResidentialConfig from "@/modules/CreateResidentialConfig/CreateResidentialConfig";
import AddBandwidthCard from "@/modules/CreateResidentialConfig/AddBandwidthCard";
import ResiDetailCard from "@/modules/CreateResidentialConfig/ResiDetailCard";

const Page = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col items-start gap-1.5">
          <p className="text-xl font-semibold text-white">
            New Residential Configuration
          </p>
          <p className="text-sm font-medium text-nav-sub-menu-heading-text">
            Configure your new proxy settings
          </p>
        </div>
        <CustomLink href={"/proxy/residential"} className="py-2 px-4">
          <p>Cancel configuration</p>
        </CustomLink>
      </div>
      <div className="grid grid-cols-9 mt-[30px] gap-4">
        <CreateResidentialConfig className="col-span-6" />

        <div className="col-span-3">
          <AddBandwidthCard />
          <ResiDetailCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
