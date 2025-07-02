"use client";

import Select from "@/components/CustomSelect/Select";
import Image from "next/image";
import PlanIcon from "@public/icons/config-name.svg";
import QuantityIcon from "@public/icons/qty.svg";
import LocationIcon from "@public/icons/quantity.svg";
import InputText from "@/components/Input/Input";
import React, { useState } from "react";
import cn from "@/utils/cn";
import Autocomplete from "@/components/AutoComplete/Autocomplete";

type Props = {
  plan: string;
  setPlan: (plan: string) => void;
};

const CustomPlan: React.FC<Props> = ({ plan, setPlan }) => {
  return (
    <div className="rounded bg-darkmode-200 border border-darkmode-100 p-8">
      <p className="text-white font-bold text-xl">Custom Plan</p>

      <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-7">
        <Autocomplete
          value={"1 Day"}
          options={[{ label: "1 Day", value: "1 Day" }]}
          onChange={() => {}}
          label={"Plan *"}
          startAdornment={<Image src={PlanIcon} alt="" />}
        />
      </div>
    </div>
  );
};
export default CustomPlan;
