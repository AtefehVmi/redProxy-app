"use client";

import PrePlansIcon from "@public/icons/prePlans.svg";
import GamingIcon from "@public/icons/gamepad.svg";
import GenericIcon from "@public/icons/plans.svg";
import Image from "next/image";
import cn from "@/utils/cn";
import Pagination from "@/components/Pagination/Pagination";
import { useSearchParams } from "next/navigation";
import NoDataImage from "@public/image/plans.png";
import { useState } from "react";
import StatusFilterButton from "../StatusFilterButton";
import ResidentialPlanCard from "../ResidentialPlanCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import PlusIcon from "@public/icons/plus.svg";
import GlobeIcon from "@public/icons/globe.svg";
import { getPoolTypes } from "@/service/api";

const data = [
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
];

const PreviousPlansCard = () => {
  const params = useSearchParams();
  const queryClient = useQueryClient();

  const limit = params.get("limit") ? parseInt(params.get("limit")!) : 8;
  const offset = params.get("offset") ? parseInt(params.get("offset")!) : 0;

  const [activeFilter, setActiveFilter] = useState("All");

  const { data: poolTypesData } = useQuery({
    queryKey: QUERY_KEYS.POOL_TYPES,
    queryFn: () => getPoolTypes(),
  });

  const filterOptions = [
    { filterName: "All", icon: PlusIcon },
    ...(poolTypesData ?? []).map((type) => ({
      filterName: type.name,
      icon:
        type.name === "Gaming"
          ? GamingIcon
          : type.name === "Generic"
          ? GenericIcon
          : GlobeIcon,
    })),
  ];

  const paginatedData = data.slice(offset, offset + limit);

  return (
    <div className="border border-darkmode-100 bg-darkmode-200 rounded">
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={PrePlansIcon} alt="" />
          <p className="text-white font-bold text-xl">Previous Plans</p>
        </div>

        <StatusFilterButton
          filterOptions={filterOptions}
          value={activeFilter}
          onChange={(selected) => setActiveFilter(selected)}
          className="lg:hidden"
        />

        <div className={cn("hidden lg:flex items-center gap-2.5")}>
          {filterOptions.map((item) => (
            <button
              onClick={() => setActiveFilter(item.filterName)}
              className={cn(
                "flex items-center gap-2.5 border border-darkmode-100 rounded px-3 py-[9px]",
                activeFilter === item.filterName
                  ? "bg-darkmode-100"
                  : "bg-transparent"
              )}
              key={item.filterName}
            >
              {item.icon && (
                <Image className="w-5 h-5" src={item.icon} alt="" />
              )}
              <p className="text-sm text-white">{item.filterName}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        {paginatedData.length === 0 ? (
          <div className="flex items-center justify-center h-[560px]">
            <div>
              <Image quality={100} priority src={NoDataImage} alt="" />
              <p className="mt-6 text-base font-semibold text-white">
                There are no Plans.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-y-5 gap-x-4 px-6">
            {paginatedData?.map((item) => (
              <ResidentialPlanCard
                key={item.id}
                name={item.name}
                desc={item.desc}
                purchaseDate={item.purchase_date}
                expireDate={item.expire_date}
                remainingGb={item.remainingGb}
                planId={"hjh"}
              />
            ))}
          </div>
        )}

        <Pagination
          color="bg-blue-100 border-blue-100 hover:bg-blue-400"
          className="mb-0"
          totalCount={data.length}
          limit={limit}
          offset={offset}
          isDataAvailable={data?.length >= limit}
        />
      </div>
    </div>
  );
};
export default PreviousPlansCard;
