"use client";

import React, { Ref, useState, useEffect, useRef } from "react";
import { Field, Input, Description, Label } from "@headlessui/react";
import EyeIcon from "@public/icons/eye.svg";
import EyeOnIcon from "@public/icons/eye.svg";
import cn from "@/utils/cn";
import useDisclosure from "@/hooks/useDisclosure";
import Image from "next/image";

type CustomProps = {
  ref?: Ref<HTMLInputElement>;
  error?: boolean;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  startAdornmentSecondary?: React.ReactNode;
  nextToStartAdronment?: boolean;
  endAdornment?: React.ReactNode;
  label?: string;
  labelTextNextToLabel?: string;
  description?: string | React.ReactNode;
  allocateSpaceForDescription?: boolean;
  labelAdorment?: React.ReactNode;
  startAdornmentClassName?: string;
  paddingY?: "py-4" | "py-5" | "py-6";
  searchBar?: boolean;
};

export type InputTextProps = CustomProps &
  Omit<React.ComponentPropsWithoutRef<"input">, keyof CustomProps>;

const PasswordInput = (props: InputTextProps) => {
  const {
    className,
    disabled,
    fullWidth,
    error,
    label,
    labelTextNextToLabel,
    description,
    nextToStartAdronment,
    startAdornment,
    startAdornmentSecondary,
    endAdornment,
    labelAdorment,
    allocateSpaceForDescription = false,
    onFocus,
    onBlur,
    startAdornmentClassName,
    paddingY = "py-4", // Default to py-4
    searchBar = false,
    ...rest
  } = props;

  const [focus, setFocus] = useState(false);
  const startAdornmentRef = useRef<HTMLSpanElement | null>(null);
  const startAdornmentSecondaryRef = useRef<HTMLSpanElement | null>(null);
  const [startAdornmentWidth, setStartAdornmentWidth] = useState(0);
  const [startAdornmentSecondaryWidth, setStartAdornmentSecondaryWidth] =
    useState(0);

  const { isOpen, onToggle } = useDisclosure();

  const handleFocusChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);
    onFocus?.(event);
  };

  const handleBlurChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    onBlur?.(event);
  };

  // Calculate widths of adornments when they are rendered
  useEffect(() => {
    if (startAdornmentRef.current) {
      setStartAdornmentWidth(startAdornmentRef.current.offsetWidth);
    }
    if (startAdornmentSecondaryRef.current) {
      setStartAdornmentSecondaryWidth(
        startAdornmentSecondaryRef.current.offsetWidth
      );
    }
  }, [startAdornment, startAdornmentSecondary]);

  const classes = {
    root: cn(
      "flex flex-col gap-2",
      fullWidth && "w-full",
      focus ? "text-white" : "text-grey-50",
      className,
      error && "text-error-main"
    ),
    label: cn(
      "text-sm mb-0.5 text-grey-50",
      focus && "text-white",
      error && "text-error-main"
      // success && "text-others-o9"
    ),
    description: cn(
      "text-sm font-normal",
      error && "text-error-main",
      // success && "text-others-o9",
      description ? "visible" : "invisible"
    ),
    inputWrapper: cn(
      "relative flex justify-center items-center py-[28px] rounded border",
      // focus && "border-white"
      error
        ? "border-error-main"
        : focus
        ? "focus:border-grey-500"
        : "border-darkmode-100"
    ),
    input: cn(
      "px-3 w-full h-full absolute text-base rounded-sm  bg-darkmode-300 focus:border-grey-500",
      disabled && "text-neutral-700",
      startAdornment && "pl-10",
      endAdornment && "pr-9",
      error && "border-error-main text-white"
    ),
    searchInput: cn(
      "w-full h-full pl-10 pr-3 py-2.5 rounded-md bg-grey2 text-base leading-4 font-medium text-textLightGrey focus:outline-none text-foreground",
      disabled && "cursor-not-allowed opacity-50",
      "border-none shadow-none"
    ),
    startAdornment:
      "absolute z-10 left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6",
    endAdornment: cn(
      "absolute right-2"
      // error && "text-others-o10",
      // success && "text-others-o9"
    ),
  };

  // Dynamically calculate the left position of nextToStartAdornment
  const paddingAdjustment = 20;

  const nextToStartAdornmentLeft =
    startAdornmentWidth + startAdornmentSecondaryWidth + paddingAdjustment;

  return (
    <Field className={classes.root}>
      {label && (
        <div className="flex justify-between items-center">
          <div>
            <Label className={classes.label}>{label}</Label>
          </div>
        </div>
      )}
      <div className={classes.inputWrapper}>
        <span ref={startAdornmentRef} className={classes.startAdornment}>
          {startAdornment && startAdornment}
        </span>
        <Input
          autoComplete={rest.autoComplete ?? "new-password"}
          type={isOpen ? "text" : "password"}
          className={classes.input}
          disabled={disabled}
          onFocus={handleFocusChange}
          onBlur={handleBlurChange}
          {...rest}
        />
        <span className={classes.endAdornment}>
          <span className="select-none">
            {isOpen ? (
              <Image
                src={EyeOnIcon}
                alt=""
                className="cursor-pointer"
                onClick={onToggle}
              />
            ) : (
              <Image
                src={EyeIcon}
                alt=""
                className="cursor-pointer"
                onClick={onToggle}
              />
            )}
          </span>
          {endAdornment && endAdornment}
        </span>
      </div>
      {(allocateSpaceForDescription || description) && (
        <Description className={classes.description}>
          {description ? description : "allocateSpaceForDescription"}
        </Description>
      )}
    </Field>
  );
};

export default PasswordInput;
