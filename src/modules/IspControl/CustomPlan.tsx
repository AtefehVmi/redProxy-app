"use client";

import Image from "next/image";
import QuantityIcon from "@public/icons/coupon.svg";
import InputText from "@/components/Input/Input";
import React, { useState } from "react";
import RadioCard from "../Shared/RadioCard";
import USFlag from "@public/icons/us.svg";
import ChevronIcon from "@public/icons/angle-small-down.svg";
import SearchInput from "@/components/SearchInput/SearchInput";
import SearchIcon from "@public/icons/search.svg";
import cn from "@/utils/cn";

type Props = {
  plan: string;
  setPlan: (plan: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  location: string;
  setLocation: (location: string) => void;
};

const planOptions = [
  {
    value: 0,
    content: (
      <div>
        <p className="text-sm text-white">10 Days</p>
        <p className="text-grey-400 text-sm">$12</p>
      </div>
    ),
  },
  {
    value: 1,
    content: (
      <div>
        <p className="text-sm text-white">30 Days</p>
        <p className="text-grey-400 text-sm">$12</p>
      </div>
    ),
  },
  {
    value: 2,
    content: (
      <div>
        <p className="text-sm text-white">60 Days</p>
        <p className="text-grey-400 text-sm">$12</p>
      </div>
    ),
  },
  {
    value: 3,
    content: (
      <div>
        <p className="text-sm text-white">120 Days</p>
        <p className="text-grey-400 text-sm">$12</p>
      </div>
    ),
  },
  {
    value: 4,
    content: (
      <div>
        <p className="text-sm text-white">160 Days</p>
        <p className="text-grey-400 text-sm">$12</p>
      </div>
    ),
  },
  {
    value: 5,
    content: (
      <div>
        <p className="text-sm text-white">180 Days</p>
        <p className="text-grey-400 text-sm">$12</p>
      </div>
    ),
  },
];

const locationOptions = [
  {
    value: "us",
    content: (
      <div className="flex items-center gap-1">
        <Image src={USFlag} alt="" />
        <p className="text-grey-400 text-sm">United States</p>
      </div>
    ),
  },
  {
    value: "uk",
    content: (
      <div className="flex items-center gap-1">
        <Image src={USFlag} alt="" />
        <p className="text-grey-400 text-sm">United States</p>
      </div>
    ),
  },
  {
    value: "ir",
    content: (
      <div className="flex items-center gap-1">
        <Image src={USFlag} alt="" />
        <p className="text-grey-400 text-sm">United States</p>
      </div>
    ),
  },
  {
    value: "po",
    content: (
      <div className="flex items-center gap-1">
        <Image src={USFlag} alt="" />
        <p className="text-grey-400 text-sm">United States</p>
      </div>
    ),
  },
  {
    value: "sr",
    content: (
      <div className="flex items-center gap-1">
        <Image src={USFlag} alt="" />
        <p className="text-grey-400 text-sm">United States</p>
      </div>
    ),
  },
  {
    value: "gr",
    content: (
      <div className="flex items-center gap-1">
        <Image src={USFlag} alt="" />
        <p className="text-grey-400 text-sm">United States</p>
      </div>
    ),
  },
];

const qtyOptions = [
  { content: <p className="text-white text-sm">1 IP</p>, value: 1 },
  { content: <p className="text-white text-sm">2 IPs</p>, value: 2 },
  { content: <p className="text-white text-sm">5 IPs</p>, value: 5 },
  { content: <p className="text-white text-sm">10 IPs</p>, value: 10 },
];

const CustomPlan: React.FC<Props> = ({
  plan,
  setPlan,
  quantity,
  setQuantity,
  location,
  setLocation,
}) => {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [selectedlocation, setSelectedLocation] = useState("us");
  const [selectedQty, setSelectedQty] = useState(1);

  const [isExpanded, setIsExpanded] = useState(false);
  const visibleLocations = isExpanded
    ? locationOptions
    : locationOptions.slice(0, 4);

  return (
    <div className="rounded bg-darkmode-200 border border-darkmode-100 p-6 md:p-8">
      <p className="text-white font-bold text-lg md:text-xl">Custom Plan</p>

      <div className="border border-darkmode-100 rounded p-[18px] mt-8">
        <p className="text-sm text-white font-semibold">Choose Plan</p>
        <RadioCard<number>
          className="grid grid-cols-2 lg:grid-cols-6 gap-3 mt-4"
          selected={selectedPlan}
          onChange={setSelectedPlan}
          options={planOptions}
          padding="py-[9px]"
        />
      </div>

      <div className="border border-darkmode-100 rounded p-[18px] mt-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="text-sm text-white font-semibold">Choose a Location</p>
          <SearchInput
            paddingY="py-2"
            className="w-full md:w-[220px] mt-2 md:mt-0"
            placeholder="Search"
            endAdornment={
              <div className="border-l border-darkmode-200">
                <Image src={SearchIcon} alt="" className="ml-3" />
              </div>
            }
          />
        </div>
        <div
          className={cn(
            "flex flex-col justify-center gap-3",
            isExpanded ? "md:flex-col" : "md:flex-row md:items-center"
          )}
        >
          <RadioCard<string>
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 w-full",
              isExpanded ? "lg:grid-cols-5" : "lg:grid-cols-4"
            )}
            selected={selectedlocation}
            onChange={setSelectedLocation}
            options={visibleLocations}
            padding="py-[9px]"
          />

          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="flex items-center gap-1 group w-fit mt-4"
          >
            <p className="text-white text-xs whitespace-nowrap">
              {isExpanded ? "Show Less" : " Expand All countries"}
            </p>
            <Image
              src={ChevronIcon}
              alt=""
              className="group-hover:rotate-180 transition-transform delay-75 ease-in-out"
            />
          </button>
        </div>
      </div>

      <div className="border border-darkmode-100 rounded p-[18px] mt-8">
        <p className="text-sm text-white font-semibold">Choose a Quantity</p>
        <div className="flex flex-col lg:flex-row items-center gap-2">
          <RadioCard<number>
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 w-full lg:w-2/3 xl:w-1/2"
            selected={selectedQty}
            onChange={setSelectedQty}
            options={qtyOptions}
            padding="py-[9px]"
          />

          <div className="bg-darkmode-100 w-px h-20 hidden lg:block"></div>
          <div className="bg-darkmode-100 h-px w-full block lg:hidden my-4"></div>

          <InputText
            className="w-full lg:w-1/3 xl:w-1/2"
            startAdornment={<Image src={QuantityIcon} alt="" />}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            label="Quantity"
            placeholder="Enter Custom"
          />
        </div>
      </div>
    </div>
  );
};
export default CustomPlan;
