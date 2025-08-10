"use client";

import Image from "next/image";
import BandwidthIcon from "@public/icons/config-name.svg";
import InputText from "@/components/Input/Input";
import React from "react";
import Autocomplete from "@/components/AutoComplete/Autocomplete";

type Props = {
  bandwidth: number;
  setBandwidth: (bandwidth: number) => void;
  plan: any;
};

const CustomPlan: React.FC<Props> = ({ bandwidth, setBandwidth, plan }) => {
  return (
    <div className="rounded bg-darkmode-200 border border-darkmode-100 p-8">
      <p className="text-white font-bold text-xl">Custom Plan</p>

      <div className="mt-8 flex flex-col gap-y-7">
        <Autocomplete
          value={plan?.plans?.[0]?.name}
          options={[
            { label: plan?.plans?.[0]?.name, value: plan?.plans?.[0]?.name },
          ]}
          onChange={() => {}}
          label={"Bandwidth *"}
          startAdornment={<Image src={BandwidthIcon} alt="" />}
        />

        <div className="relative pt-8">
          <div className="w-full h-px bg-darkmode-100"></div>
          <p className="bg-darkmode-200 p-2.5 absolute top-[35%] left-[47%] text-grey-400 font-semibold">
            OR
          </p>
        </div>

        <InputText
          value={bandwidth}
          onChange={(e) => setBandwidth(Number(e.target.value))}
          className="col-span-1"
          startAdornment={
            <Image src={BandwidthIcon} alt="" width={18} height={18} />
          }
          key={"bandwidth"}
          type={"number"}
          label={"Custom Bandwidth *"}
          placeholder={"Enter"}
        />
      </div>
    </div>
  );
};
export default CustomPlan;
