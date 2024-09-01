'use client'

import React, {useState} from 'react';
import CustomCard from "@/components/CustomCard/customCard";
import rawArrowDownIcon from "@public/icons/raw_arrow_down.svg";
import Image from "next/image";

interface Option {
    label: string;
    value: string;
}

interface CustomSelectProps {
    options: Option[];
    defaultValue?: string;
    onChange: (value: string) => void;
    className?: string
}

const CustomSelect = (props: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(props.defaultValue || '');

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
            <CustomCard
                borderRadius={"rounded"}
                borderClassName={`
                    w-full h-full p-px
                `}
                containerClassName="flex justify-center items-center gap-[5px] px-2.5 py-1.5"
            >
                <p className="text-profile-card-text text-sm truncate">
                    {selectedValue ? props.options.find(option => option.value === selectedValue)?.label : 'Select...'}
                </p>
                <Image src={rawArrowDownIcon} alt={''} className="ml-[11px]"/>
            </CustomCard>
            {isOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-custom-card-bg rounded shadow-lg max-h-60 overflow-y-auto">
                    {props.options.map(option => (
                        <li
                            key={option.value}
                            className={`p-2 cursor-pointer truncate text-sm text-white hover:bg-proxy-color/50  ${
                                option.value === selectedValue ? 'bg-proxy-color text-black' : ''
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

export default CustomSelect;