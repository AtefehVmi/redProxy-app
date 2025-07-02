"use client";

import Select from "@/components/CustomSelect/Select";
import Image from "next/image";
import CountryIcon from "@public/icons/country.svg";
import PortIcon from "@public/icons/port.svg";
import QuantityIcon from "@public/icons/qty.svg";
import LocationIcon from "@public/icons/quantity.svg";
import React, { useState } from "react";
import cn from "@/utils/cn";

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
  const selectContainerStyle = "h-[62px] col-span-1";
  const selectLabelStyle = "text-sm mb-2.5";
  const selectStyle = "h-[53px] text-grey-400 text-base px-4 py-[14px]";
  const selectItemStyle = "text-sm text-white px-4 py-[14px]";

  return (
    <div className="rounded bg-darkmode-200 border border-darkmode-100 p-8">
      <p className="text-white font-bold text-xl">Custom Plan</p>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-7">
        <Select
          icon={<Image src={CountryIcon} alt="" />}
          key={"country"}
          options={[{ label: "Country", value: "Country" }]}
          onChange={() => {}}
          label={"Country *"}
          className={selectContainerStyle}
          labelClassName={selectLabelStyle}
          selectClassName={selectStyle}
          itemClassName={selectItemStyle}
        />

        <Select
          icon={<Image src={CountryIcon} alt="" />}
          key={"city"}
          options={[{ label: "City", value: "City" }]}
          onChange={() => {}}
          label={"City *"}
          className={selectContainerStyle}
          labelClassName={selectLabelStyle}
          selectClassName={selectStyle}
          itemClassName={selectItemStyle}
        />

        <Select
          icon={<Image src={PortIcon} alt="" />}
          key={"port"}
          options={[{ label: "HTTP", value: "http" }]}
          onChange={() => {}}
          label={"Port *"}
          className={cn(selectContainerStyle, "mb-8")}
          labelClassName={cn(selectLabelStyle, "mt-5")}
          selectClassName={selectStyle}
          itemClassName={selectItemStyle}
        />

        <Select
          icon={<Image src={PortIcon} alt="" />}
          key={"lte"}
          options={[{ label: "LTE", value: "lte" }]}
          onChange={() => {}}
          label={"LTE *"}
          className={cn(selectContainerStyle, "mb-8")}
          labelClassName={cn(selectLabelStyle, "mt-5")}
          selectClassName={selectStyle}
          itemClassName={selectItemStyle}
        />
      </div>
    </div>
  );
};
export default CustomPlan;
