import React from "react";
import CustomLink from "@/components/CustomLink/customLink";
import Image from "next/image";

import rawArrowRightIcon from "@public/icons/arrow-small-right.svg";
import DatacenterConfigCard from "@/modules/Datacenter/DatacenterConfigCard";
import Button from "@/components/Button/Button";
import Link from "next/link";

const CHART_DATA = [
  {
    month: "Page A",
    usage: 2400,
  },
  {
    month: "Page B",
    usage: 1398,
  },
  {
    month: "Page C",
    usage: 3800,
  },
  {
    month: "Page D",
    usage: 3908,
  },
  {
    month: "Page E",
    usage: 4800,
  },
  {
    month: "Page F",
    usage: 3800,
  },
  {
    month: "Page G",
    usage: 4300,
  },
];

const DatacenterPage = () => {
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
        <Link href={"/createConfig/datacenter"}>
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
        <DatacenterConfigCard
          configName={"Residential for reddit"}
          dataUsed={4920000000}
          dataUsage={CHART_DATA}
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

export default DatacenterPage;
