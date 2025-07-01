import React from "react";
import CustomLink from "@/components/CustomLink/customLink";
import CreateIspConfig from "@/modules/CreateIspConfig/CreateIspConfig";

const Page = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col items-start gap-1.5">
          <p className="text-xl font-semibold text-white">
            New ISP configuration
          </p>
          <p className="text-sm font-medium text-nav-sub-menu-heading-text">
            Configure your new proxy settings
          </p>
        </div>
        <CustomLink href={"/proxy/isp"} className="py-2 px-4">
          <p>Cancel configuration</p>
        </CustomLink>
      </div>
      <div className="w-full mt-[30px]">
        <CreateIspConfig />
      </div>
    </div>
  );
};

export default Page;
