"use client";

import React from "react";
import Image from "next/image";

import rawArrowRightIcon from "@public/icons/arrow-small-right.svg";
import Button from "@/components/Button/Button";
import Link from "next/link";
import IspConfigCard from "@/modules/IspConfigCard/IspConfigCard";
import Pagination from "@/components/Pagination/Pagination";
import { useSearchParams } from "next/navigation";

const data = [
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
  },
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
  },
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
  },
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
  },
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
  },
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
  },
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
  },
  {
    configName: "Residential for reddit",
    location: "China",
    quantity: 23,
    autoRenew: false,
    remain: "23.10.2024",
    status: "Active",
    date: "23.10.2024",
  },
];

const IspPage = () => {
  const params = useSearchParams();
  const limit = params.get("limit") ? parseInt(params.get("limit")!) : 4;
  const offset = params.get("offset") ? parseInt(params.get("offset")!) : 0;

  const paginatedData = data.slice(offset, offset + limit);

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
        <Link href={"/createConfig/isp"}>
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
              configName={config.configName}
              location={config.location}
              autoRenew={config.autoRenew}
              date={config.date}
              quantity={config.quantity}
              remain={config.remain}
              status={config.status}
              key={index}
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

export default IspPage;
