"use client";

import Image from "next/image";
import PlanIcon from "@public/icons/config-name.svg";
import QuantityIcon from "@public/icons/qty.svg";
import LocationIcon from "@public/icons/quantity.svg";
import InputText from "@/components/Input/Input";
import React, { useState } from "react";
import Autocomplete from "@/components/AutoComplete/Autocomplete";

type Props = {
  plan: string;
  setPlan: (plan: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  location: string;
  setLocation: (location: string) => void;
};

const CustomPlan: React.FC<Props> = ({
  plan,
  setPlan,
  quantity,
  setQuantity,
  location,
  setLocation,
}) => {
  return (
    <div className="rounded bg-darkmode-200 border border-darkmode-100 p-6 md:p-8">
      <p className="text-white font-bold text-xl">Custom Plan</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-7">
        <Autocomplete
          value={plan}
          options={[{ label: "1 Day", value: "1 Day" }]}
          onChange={() => {}}
          label={"Plan *"}
          startAdornment={<Image src={PlanIcon} alt="" />}
        />

        <InputText
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="col-span-1"
          startAdornment={
            <Image src={QuantityIcon} alt="" width={18} height={18} />
          }
          key={"quantity"}
          type={"number"}
          label={"Quantity *"}
          placeholder={"Enter"}
        />

        <Autocomplete
          value={location}
          options={[{ label: "Germany", value: "Germany" }]}
          onChange={() => {}}
          label={"Location *"}
          startAdornment={<Image src={LocationIcon} alt="" />}
        />
      </div>
    </div>
  );
};
export default CustomPlan;
