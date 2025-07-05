"use client";
import React, { useEffect, useState } from "react";
import CustomCard from "@/components/CustomCard/customCard";
import { formatBytes } from "@/utils/converter";
import PaddingPieChart from "@/components/Charts/PaddingPieChart";
import cn from "@/utils/cn";

const CHART_DATA = [
  { name: "RESIDENTIAL", value: 400 },
  { name: "MOBILE", value: 100 },
  { name: "DATACENTER", value: 130 },
];

const COLORS = ["#2ECB6D", "#2ECB6D80", "#2ECB6D33"];
const UserBalance = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "rounded border border-darkmode-100 bg-darkmode-200 px-4 flex flex-col items-start w-full",
        className
      )}
    >
      <p className="text-white text-lg mt-5">Your balance</p>
      <div className="w-[258px] h-[129px] mt-6 self-center relative">
        {mounted ? (
          <>
            <PaddingPieChart
              data={CHART_DATA}
              colors={COLORS}
              cx={"50%"}
              cy={"100%"}
              innerRadius={79}
              outerRadius={119}
            />
            <p className="absolute left-1/2 top-2/3 transform -translate-x-1/2 ">
              <span className="text-white text-3xl">12.68</span>
              &nbsp;
              <span className="text-nav-sub-menu-heading-text text-base-600">
                GB
              </span>
            </p>
          </>
        ) : null}
      </div>
      <div className="grid grid-cols-1 mt-2 gap-2 w-full">
        <ProxyUsageCard
          proxyType={"RESIDENTIAL"}
          proxyName={"Residential Proxies"}
          balance={9.67e9}
        />
        <ProxyUsageCard
          proxyType={"MOBILE"}
          proxyName={"Residential Proxies"}
          balance={182350000}
        />
        <ProxyUsageCard
          proxyType={"DATACENTER"}
          proxyName={"Residential Proxies"}
          balance={192}
        />
      </div>
    </div>
  );
};

export default UserBalance;

interface ProxyUsageCardProps {
  proxyType: "RESIDENTIAL" | "MOBILE" | "DATACENTER";
  proxyName: string;
  balance: number;
  className?: string;
}

const ProxyUsageCard = (props: ProxyUsageCardProps) => {
  let proxyColor = "";
  switch (props.proxyType) {
    case "RESIDENTIAL":
      proxyColor = "bg-proxy-color";
      break;
    case "MOBILE":
      proxyColor = "bg-proxy-color/50";
      break;
    case "DATACENTER":
      proxyColor = "bg-proxy-color/20";
      break;
    default:
      proxyColor = "bg-proxy-color";
      break;
  }

  return (
    <div
      className={cn(
        "flex items-center border border-darkmode-100 bg-darkmode-200 px-3.5 py-2.5 justify-between w-full",
        [props.className]
      )}
    >
      <div className="flex items-center gap-2">
        <div className={`w-1.5 h-1.5 rounded-[1px] ${proxyColor}`} />
        <p className="text-profile-card-text text-sm ml-[7px]">
          {props.proxyName}
        </p>
      </div>
      <p className="text-white text-sm ml-auto">
        {props.proxyType === "DATACENTER"
          ? `${props.balance} IPs`
          : formatBytes(props.balance)}
      </p>
    </div>
  );
};
