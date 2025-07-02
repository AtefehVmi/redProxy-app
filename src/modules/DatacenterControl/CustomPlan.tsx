"use client";

import Select from "@/components/CustomSelect/Select";
import Image from "next/image";
import PlanIcon from "@public/icons/config-name.svg";
import QuantityIcon from "@public/icons/qty.svg";
import LocationIcon from "@public/icons/quantity.svg";
import InputText from "@/components/Input/Input";
import React, { useState } from "react";
import cn from "@/utils/cn";

type Props = {
  plan: string;
  setPlan: (plan: string) => void;
};

const CustomPlan: React.FC<Props> = ({ plan, setPlan }) => {
  const selectContainerStyle = "h-[62px] col-span-1 mb-8";
  const selectLabelStyle = "text-sm mb-2.5";
  const selectStyle = "h-[53px] text-grey-400 text-base px-4 py-[14px]";
  const selectItemStyle = "text-sm text-white px-4 py-[14px]";

  return (
    <div className="rounded bg-darkmode-200 border border-darkmode-100 p-8">
      <p className="text-white font-bold text-xl">Custom Plan</p>

      <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-7">
        <Select
          icon={<Image src={PlanIcon} alt="" />}
          key={"plan"}
          options={[{ label: "1 Day", value: "1 Day" }]}
          onChange={() => {}}
          label={"Plan *"}
          className={selectContainerStyle}
          labelClassName={selectLabelStyle}
          selectClassName={selectStyle}
          itemClassName={selectItemStyle}
        />
      </div>
    </div>
  );
};
export default CustomPlan;
