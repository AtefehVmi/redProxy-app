"use client";

import Image from "next/image";
import QuantityIcon from "@public/icons/coupon.svg";
import InputText from "@/components/Input/Input";
import React, { useState } from "react";
import RadioCard from "../Shared/RadioCard";
import USFlag from "@public/icons/us.svg";
import ChevronIcon from "@public/icons/angle-small-down.svg";

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

  return (
    <div className="rounded bg-darkmode-200 border border-darkmode-100 p-6 md:p-8">
      <p className="text-white font-bold text-xl">Custom Plan</p>

      <div className="border border-darkmode-100 rounded p-[18px] mt-8">
        <p className="text-sm text-white font-semibold">Choose Plan</p>
        <RadioCard<number>
          className="grid grid-cols-6 gap-3 mt-4"
          selected={selectedPlan}
          onChange={setSelectedPlan}
          options={planOptions}
          padding="py-[9px]"
        />
      </div>

      <div className="border border-darkmode-100 rounded p-[18px] mt-8">
        <p className="text-sm text-white font-semibold">Choose a Location</p>
        <div className="flex items-center gap-3">
          <RadioCard<string>
            className="grid grid-cols-4 gap-3 mt-4 w-full"
            selected={selectedlocation}
            onChange={setSelectedLocation}
            options={locationOptions}
            padding="py-[9px]"
          />

          <button className="flex items-center gap-1 group w-fit">
            <p className="text-white text-xs whitespace-nowrap">
              +30 more Country
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
        <div className="flex items-center gap-2">
          <RadioCard<number>
            className="grid grid-cols-4 gap-3 mt-4 w-1/2"
            selected={selectedQty}
            onChange={setSelectedQty}
            options={qtyOptions}
            padding="py-[9px]"
          />

          <div className="bg-darkmode-100 w-px h-20"></div>

          <InputText
            className="w-1/2"
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
