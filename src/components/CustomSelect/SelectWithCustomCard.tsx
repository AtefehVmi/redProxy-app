"use client";

import React, { useState } from "react";
import rawArrowDownIcon from "@public/icons/angle-small-down.svg";
import Image from "next/image";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  defaultValue?: string;
  onChange: (value: string) => void;
  className?: string;
  label?: string;
}

const SelectWithCustomCard = (props: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    props.defaultValue ||
      (props.options.length > 0 ? props.options[0].value : undefined)
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    props.onChange(value);
    setIsOpen(false);
  };
  return (
    <div
      className={`
                ${props.className ?? ""}
                cursor-pointer relative
            `}
      onClick={toggleDropdown}
    >
      {props.label && (
        <label
          className={
            "text-config-card-heading-text text-xs font-medium mb-[5px]"
          }
        >
          {props.label}
        </label>
      )}
      <div className="rounded-lg flex justify-center items-center gap-[5px] px-2.5 py-1.5 bg-darkmode-100 hover:bg-darkmode-100/80 gradient-border">
        <p className="text-white text-xs">
          {selectedValue
            ? props.options.find((option) => option.value === selectedValue)
                ?.label
            : "Select..."}
        </p>
        <Image src={rawArrowDownIcon} alt={""} />
      </div>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-custom-card-bg rounded shadow-lg max-h-60 overflow-y-auto">
          {props.options.map((option) => (
            <li
              key={option.value}
              className={`p-2 cursor-pointer truncate text-sm text-white hover:bg-proxy-color/50  ${
                option.value === selectedValue
                  ? "bg-proxy-color !text-black"
                  : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectWithCustomCard;
