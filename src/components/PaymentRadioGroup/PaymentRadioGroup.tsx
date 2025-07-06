"use client";

import { RadioGroup } from "@headlessui/react";
import cn from "@/utils/cn";
import React from "react";

type Option = {
  label: string;
  value: number;
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
      className="bg-darkmode-300 rounded-lg p-[18px] mt-3 flex flex-col gap-3"
    >
      {options.map(({ label, value }) => (
        <RadioGroup.Option key={value} value={value}>
          {({ checked }) => (
            <div
              className={cn(
                "flex items-center gap-3 cursor-pointer",
                checked && "text-white"
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
              <p
                className={cn(
                  "text-sm",
                  checked ? "text-white font-medium" : "text-gray-500"
                )}
              >
                {label}
              </p>
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export default PaymentRadioGroup;
