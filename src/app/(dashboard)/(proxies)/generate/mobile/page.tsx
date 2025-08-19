import React from "react";
import CreateConfig from "@/modules/Shared/CreateConfig";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Link from "next/link";
import ArrowIcon from "@public/icons/arrow-left.svg";

const Page = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col items-start gap-1.5">
          <p className="text-xl font-semibold text-white">
            New Mobile configuration
          </p>
          <p className="text-sm font-medium text-nav-sub-menu-heading-text">
            Configure your new proxy settings
          </p>
        </div>
        <Link href={"/proxy/mobile"}>
          <Button icon={<Image src={ArrowIcon} alt="" />}>Go Back</Button>
        </Link>
      </div>
      <div className="w-full mt-[30px]">
        <CreateConfig />
      </div>
    </div>
  );
};

export default Page;
