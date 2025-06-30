import React from "react";
import Image from "next/image";

import rawArrowRightIcon from "@public/icons/arrow-small-right.svg";
import Button from "@/components/Button/Button";
import Link from "next/link";
import MobileConfigCard from "@/modules/Mobile/MobileConfigCard";

const MobilePage = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col items-start gap-1.5">
          <p className="text-xl font-semibold text-white">
            Your configurations
          </p>
          <p className="text-sm font-medium text-nav-sub-menu-heading-text">
            You have 1 active configurations
          </p>
        </div>
        <Link href={"/createConfig/mobile"}>
          <Button
            rightIcon={
              <Image src={rawArrowRightIcon} alt={""} className="w-4 h-4" />
            }
            className="py-2 pl-[15px] pr-2.5"
          >
            <p>Create new</p>
          </Button>
        </Link>
      </div>
      <div className="w-full h-auto mt-[30px]">
        <MobileConfigCard
          configName={"Residential for reddit"}
          location="China"
          quantity={23}
          autoRenew={false}
          remain="23.10.2024"
          status="Active"
          date="23.10.2024"
        />
      </div>
    </div>
  );
};

export default MobilePage;
