import React from "react";
import Link from "next/link";
import Button from "@/components/Button/Button";
import ArrowIcon from "@public/icons/arrow-left.svg";
import Image from "next/image";
import CreateConfig from "@/modules/Shared/CreateConfig";

const Page = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col items-start gap-1.5">
          <p className="text-lg md:text-xl font-semibold text-white">
            New ISP configuration
          </p>
          <p className="text-xs md:text-sm font-medium text-nav-sub-menu-heading-text">
            Configure your new proxy settings
          </p>
        </div>
        <Link href={"/proxy/isp"}>
          <Button icon={<Image src={ArrowIcon} alt="" />}>Go Back</Button>
        </Link>
      </div>
      <div className="w-full mt-[30px]">
        <CreateConfig href="/plan/isp" />
      </div>
    </div>
  );
};

export default Page;
