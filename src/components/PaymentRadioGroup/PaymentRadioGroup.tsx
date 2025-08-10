"use client";

import { RadioGroup } from "@headlessui/react";
import cn from "@/utils/cn";
import React from "react";
import Image, { StaticImageData } from "next/image";
import CheckIcon from "@public/icons/check-circle.svg";

type Option = {
  label: string;
  value: number;
  icon: StaticImageData;
};

type Props = {
  options: Option[];
  selected: number;
  onChange: (value: number) => void;
};

const PaymentRadioGroup: React.FC<Props> = ({
  options,
  selected,
  onChange,
}) => {
  return (
    <RadioGroup
      value={selected}
      onChange={onChange}
      className="flex flex-col gap-3 mt-6"
    >
      {options.map(({ label, value, icon }) => (
        <RadioGroup.Option key={value} value={value}>
          {({ checked }) => (
            <div
              className={cn(
                "flex items-center gap-3 cursor-pointer",
                checked
                  ? "text-white border-orange-200"
                  : "border-darkmode-100",
                "border bg-darkmode-300 rounded-lg px-4 py-3"
              )}
            >
              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                  checked ? "border-orange-200" : "border-gray-600"
                )}
              >
                {checked && (
                  <div className="w-2 h-2 bg-orange-200 rounded-full" />
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-darkmode-200 rounded relative">
                  {checked && (
                    <Image
                      src={CheckIcon}
                      alt=""
                      className="absolute -top-[5px] -right-[5px]"
                    />
                  )}
                  <Image src={icon} alt="" className="m-1" />
                </div>

                <p className={cn("text-sm text-white")}>{label}</p>
              </div>
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export default PaymentRadioGroup;
