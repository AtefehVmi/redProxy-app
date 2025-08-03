"use client";

import React from "react";
import Image from "next/image";
import DatacenterImage from "@public/icons/datacenter.svg";
import rawArrowRightIcon from "@public/icons/arrow-small-right.svg";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination/Pagination";
import IspConfigCard from "../IspConfigCard/IspConfigCard";

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

const data = [
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
    plan: "30 Days",
    dataUsage: CHART_DATA,
  },
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
    plan: "30 Days",
    dataUsage: CHART_DATA,
  },
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
    plan: "30 Days",
    dataUsage: CHART_DATA,
  },
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
    plan: "30 Days",
    dataUsage: CHART_DATA,
  },
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
    plan: "30 Days",
    dataUsage: CHART_DATA,
  },
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
    plan: "30 Days",
    dataUsage: CHART_DATA,
  },
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
    plan: "30 Days",
    dataUsage: CHART_DATA,
  },
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
    plan: "30 Days",
    dataUsage: CHART_DATA,
  },
];

const DatacenterPage = () => {
  const params = useSearchParams();
  const limit = params.get("limit") ? parseInt(params.get("limit")!) : 4;
  const offset = params.get("offset") ? parseInt(params.get("offset")!) : 0;

  const paginatedData = data.slice(offset, offset + limit);

  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
        <div className="flex flex-col items-start gap-1.5">
          <p className="text-lg md:text-xl font-semibold text-white">
            Your configurations
          </p>
          <p className="text-xs md:text-sm font-medium text-nav-sub-menu-heading-text">
            You have {data.length} active configurations
          </p>
        </div>
        <Link className="mt-4 md:mt-0" href={"/plan/datacenter"}>
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

      <div className="w-full h-auto mt-[30px] mb-8">
        <div className="flex flex-col gap-6">
          {paginatedData.map((config, index) => (
            <IspConfigCard
              href="/viewConfig/datacenter"
              dataUsage={config.dataUsage}
              chartColor="#FF5C5C"
              plan={config.plan}
              image={DatacenterImage}
              proxyname="Datacenter Proxies"
              key={index}
              configName={config.configName}
              location={config.location}
              quantity={config.quantity}
              autoRenew={config.autoRenew}
              remain={config.remain}
              status={config.status}
              date={config.status}
            />
          ))}
        </div>

        <Pagination
          totalCount={data.length}
          limit={limit}
          offset={offset}
          isDataAvailable={data?.length >= limit}
        />
      </div>
    </div>
  );
};

export default DatacenterPage;
