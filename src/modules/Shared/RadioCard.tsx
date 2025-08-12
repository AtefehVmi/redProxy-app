"use client";

import { RadioGroup } from "@headlessui/react";
import cn from "@/utils/cn";
import React from "react";

type Option<T> = {
  content: React.ReactNode;
  value: T;
};

type Props<T> = {
  options: Option<T>[];
  selected: T;
  onChange: (value: T) => void;
  className?: string;
  padding?: string;
};

function RadioCard<T extends string | number>({
  options,
  selected,
  onChange,
  className,
  padding,
}: Props<T>) {
  return (
    <RadioGroup value={selected} onChange={onChange} className={cn(className)}>
      {options.map(({ content, value }) => (
        <RadioGroup.Option key={String(value)} value={value}>
          {({ checked }) => (
            <div
              className={cn(
                "flex items-center justify-between cursor-pointer",
                "bg-darkmode-300 rounded px-3",
                padding
              )}
            >
              {content}

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
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}

export default RadioCard;
