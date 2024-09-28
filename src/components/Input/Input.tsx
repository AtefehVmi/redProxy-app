'use client'
import React, {useEffect, useState} from 'react';
import Image from 'next/image';

export interface InputProps {
    label?: string,
    type: "text" | "number" | "password" | "email",
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
    placeholder?: string,
    unit?: string;
    mainContainerClassName?: string;
    labelClassName?: string;
    inputContainerClassName?: string;
    inputClassName?: string;
    unitClassName?: string;
}

const Input = ({
                   label,
                   type,
                   onChange,
                   placeholder,
                   unit,
                   mainContainerClassName,
                   labelClassName,
                   inputClassName,
                   inputContainerClassName,
                   unitClassName
               }: InputProps) => {
    const [value, setValue] = useState<string>('');

    const [currentType, setCurrentType] = useState<"text" | "number" | "password" | "email">(type);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;
        setValue(newValue)
        if (onChange) onChange(e, newValue);

    };

    const handleToggleType = () => {
        setCurrentType(prevState => {
            return prevState === "password" ? "text" : "password"
        })
    }

    return (
        <div className={`${mainContainerClassName ?? ''}  w-full flex flex-col justify-start items-start`}>
            <label className={`text-config-card-heading-text ${labelClassName ?? ""}`}>
                {label}
            </label>
            <div className={`w-full relative ${inputContainerClassName ?? ""}`}>
                <input
                    className={`
                        w-full h-full bg-select-bg border border-solid border-white/10 rounded
                        focus:outline-none focus:border-white/20 placeholder-input-placeholder
                        ${inputClassName ?? ""} 
                    `}
                    type={currentType ?? "text"}
                    onChange={handleChange}
                    value={value}
                    placeholder={placeholder ?? ""}
                />

                {unit &&
                    <p
                        className={`
                            h-[calc(100%-2px)] bg-storm-gray-100 flex justify-center items-center
                            absolute right-px top-1/2 transform translate-y-[-50%] rounded-r-3xl
                            px-2
                            ${unitClassName ?? ""}
                        `}
                    >
                        {unit}
                    </p>
                }

                {/*{type === "password" &&*/}
                {/*    <Image*/}
                {/*        src={''}*/}
                {/*        alt={''}*/}
                {/*        priority={true}*/}
                {/*        className='absolute w-5 h-5 right-3 top-1/2 transform translate-y-[-50%] cursor-pointer'*/}
                {/*        onClick={handleToggleType}*/}
                {/*    />*/}
                {/*}*/}
            </div>
        </div>
    );
};

export default Input;