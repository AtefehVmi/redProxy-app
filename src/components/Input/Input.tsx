"use client";

import React, { ReactNode, Ref, useState } from "react";
import { Field, Input, Description, Label } from "@headlessui/react";
import cn from "@/utils/cn";

type CustomProps = {
  ref?: Ref<HTMLInputElement>;
  error?: boolean;
  // success?: boolean;
  fullWidth?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: React.ReactNode;
  label?: string;
  description?: string | React.ReactNode;
  allocateSpaceForDescription?: boolean;
};

export type InputTextProps = CustomProps &
  Omit<React.ComponentPropsWithoutRef<"input">, keyof CustomProps>;

const InputText = (props: InputTextProps) => {
  const {
    className,
    disabled,
    fullWidth,
    error,
    // success,
    label,
    description,
    startAdornment,
    endAdornment,
    allocateSpaceForDescription = false,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const [focus, setFocus] = useState(false);

  const handleFocusChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);
    onFocus?.(event);
  };

  const handleBlurChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    onBlur?.(event);
  };

  const classes = {
    root: cn(
      "flex flex-col gap-2",
      fullWidth && "w-full",
      focus ? "text-white" : "text-grey-50",
      className,
      error && "text-error-main"
    ),
    label: cn(
      "text-sm mb-0.5 text-[#B0B0B0]",
      focus && "text-white"
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
      error && "border-error-main"
    ),
    startAdornment:
      "absolute z-10 left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6",

    endAdornment: cn(
      "absolute right-2"
      // error && "text-others-o10",
      // success && "text-others-o9"
    ),
  };

  return (
    <Field className={classes.root}>
      {label && <Label className={classes.label}>{label}</Label>}
      <div className={classes.inputWrapper}>
        <span className={classes.startAdornment}>
          {startAdornment && startAdornment}
        </span>
        <Input
          type="text"
          className={classes.input}
          disabled={disabled}
          onFocus={handleFocusChange}
          onBlur={handleBlurChange}
          {...rest}
        />
        <span className={classes.endAdornment}>
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

export default InputText;
