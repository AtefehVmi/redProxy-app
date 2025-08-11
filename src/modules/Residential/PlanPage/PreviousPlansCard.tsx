"use client";

import PrePlansIcon from "@public/icons/prePlans.svg";
import ScrapingIcon from "@public/icons/globe.svg";
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

const filterOptions = [
  { label: "All" },
  { label: "Scraping", icon: ScrapingIcon },
  { label: "Gaming", icon: GamingIcon },
  { label: "Generic", icon: GenericIcon },
];

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
  const limit = params.get("limit") ? parseInt(params.get("limit")!) : 8;
  const offset = params.get("offset") ? parseInt(params.get("offset")!) : 0;

  const [activeFilter, setActiveFilter] = useState("All");

  const paginatedData = data.slice(offset, offset + limit);

  return (
    <div className="border border-darkmode-100 bg-darkmode-200 rounded">
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={PrePlansIcon} alt="" />
          <p className="text-white font-bold text-xl">Previous Plans</p>
        </div>

        <div className={cn("hidden lg:flex items-center gap-2.5")}>
          {filterOptions.map((item) => (
            <button
              onClick={() => setActiveFilter(item.label)}
              className={cn(
                "flex items-center gap-2.5 border border-darkmode-100 rounded px-3 py-[9px]",
                activeFilter === item.label
                  ? "bg-darkmode-100"
                  : "bg-transparent"
              )}
              key={item.label}
            >
              {item.icon && (
                <Image className="w-5 h-5" src={item.icon} alt="" />
              )}
              <p className="text-sm text-white">{item.label}</p>
            </button>
          ))}
        </div>

        <StatusFilterButton className="lg:hidden" value="" field="" />
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
                planId={item.id}
              />
            ))}
          </div>
        )}

        <Pagination
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
