"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import CustomCard from "@/components/CustomCard/customCard";
import rawArrowDownIcon from "@public/icons/raw_arrow_down.svg";
import Image from "next/image";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  defaultValue?: string;
  onChange: (value: string) => void;
  className?: string;
  label?: string;
  selectClassName?: string;
  itemClassName?: string;
  labelClassName?: string;
  icon?: ReactNode;
}

const Select = (props: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    props.defaultValue ||
      (props.options.length > 0 ? props.options[0].value : undefined)
  );
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null); // Ref for the dropdown list (scrollable area)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    props.onChange(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`
                ${props.className ?? ""}
                cursor-pointer relative flex flex-col
            `}
      ref={selectRef}
      onClick={toggleDropdown}
    >
      {props.label && (
        <label className={`text-grey-50 ${props.labelClassName ?? ""}`}>
          {props.label}
        </label>
      )}
      <div
        className={`
                    w-full h-full flex justify-between items-center gap-[5px]
                    border border-solid border-white/10 rounded bg-darkmode-300
                    ${props.selectClassName ?? ""}
                `}
      >
        <p className="truncate flex items-center gap-2 text-grey-40 text-base">
          {props.icon}
          {selectedValue
            ? props.options.find((option) => option.value === selectedValue)
                ?.label
            : "Select..."}
        </p>
        <Image src={rawArrowDownIcon} alt={""} />
      </div>
      {isOpen && (
        <ul
          className="absolute z-10 top-full mt-1 w-full bg-select-item-bg rounded shadow-lg max-h-60 overflow-y-auto"
          ref={dropdownRef}
        >
          {props.options.map((option) => (
            <li
              key={option.value}
              className={`
                                cursor-pointer truncate hover:bg-proxy-color/50  
                                ${
                                  option.value === selectedValue
                                    ? "bg-proxy-color !text-black"
                                    : ""
                                }
                                ${props.itemClassName ?? ""}
                            `}
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

export default Select;
