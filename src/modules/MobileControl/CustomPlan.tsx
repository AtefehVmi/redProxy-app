"use client";

import Select from "@/components/CustomSelect/Select";
import Image from "next/image";
import CountryIcon from "@public/icons/country.svg";
import PortIcon from "@public/icons/port.svg";
import QuantityIcon from "@public/icons/qty.svg";
import LocationIcon from "@public/icons/quantity.svg";
import React, { useState } from "react";
import cn from "@/utils/cn";
import Autocomplete from "@/components/AutoComplete/Autocomplete";

type Props = {
  lte: string;
  setLte: (lte: string) => void;
  country: string;
  setCountry: (country: string) => void;
  city: string;
  setCity: (country: string) => void;
  port: string;
  setPort: (port: string) => void;
};

const CustomPlan: React.FC<Props> = ({
  lte,
  setLte,
  country,
  setCountry,
  city,
  port,
}) => {
  return (
    <div className="rounded bg-darkmode-200 border border-darkmode-100 p-8">
      <p className="text-white font-bold text-xl">Custom Plan</p>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-7">
        <Autocomplete
          placeholder="Select"
          value={country}
          options={[{ label: "Country", value: "Country" }]}
          onChange={() => {}}
          label={"Country *"}
          startAdornment={<Image src={CountryIcon} alt="" />}
        />

        <Autocomplete
          placeholder="Select"
          value={city}
          options={[{ label: "City", value: "City" }]}
          onChange={() => {}}
          label={"City *"}
          startAdornment={<Image src={CountryIcon} alt="" />}
        />

        <Autocomplete
          placeholder="Select"
          value={port}
          options={[{ label: "HTTP", value: "http" }]}
          onChange={() => {}}
          label={"Port *"}
          startAdornment={<Image src={PortIcon} alt="" />}
        />

        <Autocomplete
          placeholder="Select"
          value={lte}
          options={[{ label: "LTE", value: "lte" }]}
          onChange={() => {}}
          label={"LTE *"}
          startAdornment={<Image src={PortIcon} alt="" />}
        />
      </div>
    </div>
  );
};
export default CustomPlan;
