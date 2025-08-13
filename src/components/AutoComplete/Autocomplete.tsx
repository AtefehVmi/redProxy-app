import { Ref, useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Description,
  Field,
  Label,
} from "@headlessui/react";
import ArrowDownIcon from "@public/icons/angle-down.svg";
import cn from "@/utils/cn";
import Loader from "../Loader/Loader";
import Image from "next/image";

type CustomProps<A, B> = {
  ref?: Ref<HTMLInputElement>;
  searchable?: boolean;
  error?: boolean;
  success?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  // variant: "outline";
  // colorVariant: "primary" | "secondary";
  label?: string;
  description?: string;
  allocateSpaceForDescription?: boolean;
  options: Option<A, B>[];
  value: A;
  onChange: ({ value, option }: { value: A; option?: Option<A, B> }) => void;
  borderLess?: boolean;
};

export type AutocompleteProps<A, B> = CustomProps<A, B> &
  Omit<React.ComponentPropsWithoutRef<"input">, keyof CustomProps<A, B>>;

const Autocomplete = <A extends string | number | null, B extends any>(
  props: AutocompleteProps<A, B>
) => {
  const {
    className,
    fullWidth,
    searchable = true,
    error,
    success,
    loading,
    startAdornment: startAdornmentProp,
    // variant,
    // colorVariant,
    label,
    description,
    allocateSpaceForDescription = false,
    options,
    value,
    onChange,
    onFocus,
    onBlur,
    borderLess = false,
    ...rest
  } = props;

  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const handleFocusChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);
    onFocus?.(event);
  };

  const handleBlurChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    onBlur?.(event);
  };

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });

  const classes = {
    root: cn("flex flex-col gap-[11px]", fullWidth && "w-full", className),
    label: cn(
      "text-sm text-gray-50",
      focus ? "text-white" : "text-grey-50",
      error && "",
      success && ""
    ),
    description: cn(
      "text-sm font-normal text-others-o6",
      error && "",
      success && "",
      description ? "visible" : "invisible"
    ),
  };

  const selectedOption = filteredOptions.find(
    (option) => option.value === value
  );

  const startAdornment =
    startAdornmentProp ??
    (selectedOption?.icon ? <Image src={selectedOption.icon} alt="" /> : null);
  return (
    <Field className={classes.root}>
      {label && <Label className={classes.label}>{label}</Label>}
      <Combobox
        by="label"
        immediate
        value={selectedOption ?? null}
        onChange={(option) =>
          onChange({
            // @ts-expect-error unk
            value: option?.value ?? null,
            option: option ?? undefined,
          })
        }
        onClose={() => setQuery("")}
        virtual={{ options: filteredOptions }}
      >
        <div
          className={cn(
            "relative flex justify-center items-center",
            focus && ""
          )}
        >
          {startAdornment && (
            <span className="absolute left-3">{startAdornment}</span>
          )}
          <ComboboxInput
            readOnly={!searchable}
            autoComplete="off"
            aria-label="Assignee"
            className={cn(
              "w-full rounded text-base focus:outline-none px-2 py-[15.2px]",
              !borderLess &&
                "border border-solid border-darkmode-100 focus:border-grey-500 bg-darkmode-300 text-grey-400 dark:border-dark-500",
              borderLess && "border-none focus:ring-0",
              focus && "",
              startAdornment && "pl-10",
              !searchable && "cursor-default caret-transparent"
            )}
            // @ts-expect-error ddd
            displayValue={(option) => option?.label}
            onChange={(event) => setQuery(event.target.value)}
            onFocus={handleFocusChange}
            onBlur={handleBlurChange}
            {...rest}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            {loading ? (
              <Loader />
            ) : (
              <Image
                src={ArrowDownIcon}
                alt=""
                className="transition-transform duration-300 text-grey group-data-[open]:text-white group-data-[open]:rotate-180"
              />
            )}
          </ComboboxButton>
        </div>
        <ComboboxOptions
          anchor="bottom"
          transition
          className={cn(
            "border border-solid border-darkmode-100 bg-darkmode-200 text-white",
            "z-40 w-[var(--input-width)] rounded-b-[4px] text-sm font-normal [--anchor-gap:0.1rem] empty:invisible",
            "origin-top transition duration-200 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0"
          )}
        >
          {({ option }) => (
            <ComboboxOption
              value={option}
              className="flex gap-2 justify-start items-center p-3 w-full cursor-pointer hover:bg-darkmode-100"
            >
              {option.icon && <Image src={option.icon} alt="" />}
              {option.label}
            </ComboboxOption>
          )}
        </ComboboxOptions>
      </Combobox>
      {(allocateSpaceForDescription || description) && (
        <Description className={classes.description}>
          {description ? description : "allocateSpaceForDescription"}
        </Description>
      )}
    </Field>
  );
};

export default Autocomplete;
