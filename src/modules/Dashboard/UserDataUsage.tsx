"use client";
import React from "react";
import CustomCard from "@/components/CustomCard/customCard";
import Image from "next/image";
import growUpIcon from "@public/icons/arrow-up.svg";
import SelectWithCustomCard from "@/components/CustomSelect/SelectWithCustomCard";
import StackedBarChart from "@/components/Charts/StackedBarChart";
import cn from "@/utils/cn";

const CHART_DATA = [
  { month: "January", residential: 73, mobile: 45, datacenter: 103 },
  { month: "February", residential: 22, mobile: 117, datacenter: 92 },
  { month: "March", residential: 108, mobile: 13, datacenter: 70 },
  { month: "April", residential: 67, mobile: 122, datacenter: 5 },
  { month: "May", residential: 34, mobile: 55, datacenter: 81 },
  { month: "June", residential: 120, mobile: 23, datacenter: 48 },
  { month: "July", residential: 97, mobile: 66, datacenter: 104 },
  { month: "August", residential: 12, mobile: 39, datacenter: 73 },
  { month: "September", residential: 50, mobile: 110, datacenter: 95 },
  { month: "October", residential: 79, mobile: 28, datacenter: 88 },
  { month: "November", residential: 91, mobile: 72, datacenter: 111 },
  { month: "December", residential: 25, mobile: 59, datacenter: 119 },
];

const colorMapping = {
  mobile: "#FF7F5099",
  residential: "#FF975C",
  datacenter: "#FF975C33",
};

const barKeys = ["mobile", "residential", "datacenter"];

const UserDataUsage = ({ className }: { className?: string }) => {
  function onChartFilterChange() {}

  return (
    <div
      className={cn(
        "rounded border border-darkmode-100 bg-darkmode-200 h-[364px] p-[1.75px] px-4 pt-[18px] pb-5",
        className
      )}
    >
      <div className="flex justify-between items-start">
        {/*col1*/}
        <div className="flex flex-col items-start">
          <p className="text-white text-left text-base font-semibold md:text-lg">
            Data usage
          </p>
          <p className="text-gray-500 text-xs md:text-sm mt-[23px]">
            TOTAL DATA
          </p>
          <div className="flex justify-center items-center gap-2 mt-[11px]">
            <p className="text-white text-left text-xl md:text-2xl">
              786.34 GB
            </p>
            <div
              className={cn(
                "bg-darkmode-100/60 flex items-center gap-0.5",
                "rounded py-1.5 px-2"
              )}
            >
              <Image src={growUpIcon} alt={""} className="w-[13px] h-4" />
              <p className="text-profile-card-text text-sm">{"9.54"}%</p>
            </div>
          </div>
        </div>
        {/*col2*/}
        <div className="flex flex-col justify-start items-end">
          <SelectWithCustomCard
            options={[
              { label: "Last 12 months", value: "year" },
              { label: "Last 30 days", value: "month" },
              { label: "Last 7 days", value: "week" },
            ]}
            defaultValue={"week"}
            onChange={onChartFilterChange}
            className="w-[119px] h-26px"
          />
          <p className="text-profile-card-text text-sm mt-[45px] hidden md:block">
            January 2024 - December 2024
          </p>
        </div>
      </div>

      <div className="w-full h-[187px] mt-[35px] overflow-x-auto">
        <div className="min-w-[800px] h-full">
          <StackedBarChart
            data={CHART_DATA}
            colors={colorMapping}
            XKey={"month"}
            barKeys={barKeys}
            horizontalCartesian={true}
            barSize={40}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDataUsage;
