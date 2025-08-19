"use client";

import React, { ReactNode, Ref, useState } from "react";
import { Field, Input, Description, Label } from "@headlessui/react";
import cn from "@/utils/cn";

type SearchInputProps = {
  ref?: Ref<HTMLInputElement>;
  error?: boolean;
  fullWidth?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  label?: string;
  paddingY?: string;
  description?: string | React.ReactNode;
  allocateSpaceForDescription?: boolean;
} & Omit<
  React.ComponentPropsWithoutRef<"input">,
  | "ref"
  | "startAdornment"
  | "endAdornment"
  | "label"
  | "description"
  | "allocateSpaceForDescription"
  | "error"
  | "fullWidth"
>;

const SearchInput = ({
  className,
  disabled,
  fullWidth,
  error,
  label,
  description,
  startAdornment,
  endAdornment,
  paddingY,
  allocateSpaceForDescription = false,
  onFocus,
  onBlur,
  ...rest
}: SearchInputProps) => {
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
      "flex flex-col gap-1 text-white",
      fullWidth && "w-full",
      className
    ),
    label: cn("text-sm text-grey-300", error && "text-error-main"),
    description: cn(
      "text-xs text-primary-200",
      error && "text-error-main",
      description ? "visible" : "invisible"
    ),
    inputWrapper: cn(
      "relative flex items-center rounded-md",
      fullWidth && "w-full"
    ),
    input: cn(
      "w-full bg-darkmode-100 rounded-lg px-3 text-sm text-primary-200",
      error && "text-error-main",
      disabled && "bg-gray-50 text-gray-400 cursor-not-allowed",
      startAdornment && "pl-10",
      endAdornment && "pr-10",
      paddingY ? paddingY : "py-3.5"
    ),
    startAdornment:
      "absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center",
    endAdornment:
      "absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer",
  };

  return (
    <Field className={classes.root}>
      {label && <Label className={classes.label}>{label}</Label>}
      <div className={classes.inputWrapper}>
        {startAdornment && (
          <span className={classes.startAdornment}>{startAdornment}</span>
        )}
        <Input
          type="search"
          className={classes.input}
          disabled={disabled}
          onFocus={handleFocusChange}
          onBlur={handleBlurChange}
          {...rest}
        />
        {endAdornment && (
          <span className={classes.endAdornment}>{endAdornment}</span>
        )}
      </div>
      {(allocateSpaceForDescription || description) && (
        <Description className={classes.description}>
          {description ?? "\u00A0"}
        </Description>
      )}
    </Field>
  );
};

export default SearchInput;
