import React from "react";
import CustomLink from "@/components/CustomLink/customLink";
import CreateResidentialConfig from "@/modules/CreateResidentialConfig/CreateResidentialConfig";
import AddBandwidthCard from "@/modules/CreateResidentialConfig/AddBandwidthCard";
import ResiDetailCard from "@/modules/CreateResidentialConfig/ResiDetailCard";
import PurchaseHistory from "@/modules/CreateResidentialConfig/PurchaseHistory";
import ArrowIcon from "@public/icons/arrow-left.svg";
import Button from "@/components/Button/Button";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col items-start gap-1.5">
          <p className="text-lg md:text-xl font-semibold text-white">
            Your Configurations
          </p>
          <p className="text-xs md:text-sm font-medium text-nav-sub-menu-heading-text">
            You have 4 active configurations
          </p>
        </div>
        <Link href={"/proxy/residential"}>
          <Button icon={<Image src={ArrowIcon} alt="" />} className="py-2 px-4">
            Go Back
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-9 mt-[30px] gap-4">
        <CreateResidentialConfig className="lg:col-span-6" />

        <div className="lg:col-span-3">
          <AddBandwidthCard />
          <ResiDetailCard />
          <PurchaseHistory className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Page;
