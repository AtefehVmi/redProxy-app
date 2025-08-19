"use client";

import Image from "next/image";
import QuantityIcon from "@public/icons/coupon.svg";
import InputText from "@/components/Input/Input";
import React, { useEffect, useState } from "react";
import RadioCard, { Option } from "../Shared/RadioCard";
import USFlag from "@public/icons/us.svg";
import ChevronIcon from "@public/icons/angle-small-down.svg";
import SearchInput from "@/components/SearchInput/SearchInput";
import SearchIcon from "@public/icons/search.svg";
import cn from "@/utils/cn";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import { getResiCountries } from "@/service/api";
import { City, Country, State } from "@/service/models";

type PlanOption = {
  value: number;
  content: React.ReactNode;
};

type Props = {
  plans?: { value: number; name: string; price: number }[];
  plan?: { value: number; name: string; price: number };
  setPlan?: (plan: { value: number; name: string; price: number }) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  location: string;
  setLocation: (location: string) => void;
  planOptions: PlanOption[];
};

const qtyOptions = [
  { content: <p className="text-white text-sm">1 IP</p>, value: 1 },
  { content: <p className="text-white text-sm">2 IPs</p>, value: 2 },
  { content: <p className="text-white text-sm">5 IPs</p>, value: 5 },
  { content: <p className="text-white text-sm">10 IPs</p>, value: 10 },
];

const CustomPlan: React.FC<Props> = ({
  plan,
  setPlan,
  quantity,
  setQuantity,
  location,
  setLocation,
  planOptions,
  plans,
}) => {
  const pathname = usePathname();
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const [isExpanded, setIsExpanded] = useState({
    city: false,
    country: false,
  });

  const { data: locations, isLoading } = useQuery({
    queryKey: QUERY_KEYS.RESI_COUNTRY,
    queryFn: () => getResiCountries("das"),
  });

  useEffect(() => {
    if (locations && location) {
      const country = locations.find((c: Country) => c.name === location);
      if (country) setSelectedCountry(country.code);
    }
  }, [locations, location]);

  const locationOptions: Option<string>[] =
    locations?.map((country: Country) => ({
      value: country.code,
      content: <p className="text-grey-400 text-sm">{country.name}</p>,
    })) ?? [];

  const cityOptions: Option<string>[] =
    locations
      ?.find((c: Country) => c.code === selectedCountry)
      ?.states.flatMap((state: State) =>
        state.cities.map((city: City) => ({
          value: city.code,
          content: <p className="text-grey-400 text-sm">{city.name}</p>,
        }))
      ) ?? [];

  const visibleLocations = isExpanded.country
    ? locationOptions
    : locationOptions.slice(0, 4);

  const visibleCities = isExpanded.city ? cityOptions : cityOptions.slice(0, 4);

  const mobilePage = pathname === "/plan/mobile";

  return (
    <div className="rounded bg-darkmode-200 border border-darkmode-100 p-6 md:p-8">
      <p className="text-white font-bold text-lg md:text-xl">Custom Plan</p>

      {!mobilePage && (
        <div className="border border-darkmode-100 rounded p-[18px] mt-8">
          <p className="text-sm text-white font-semibold">Choose Plan</p>
          <RadioCard<number>
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4"
            selected={plan?.value ?? -1}
            onChange={(val) => {
              if (!plans || !setPlan) return;
              const newPlan = plans.find((p) => p.value === val);
              if (newPlan) setPlan(newPlan);
            }}
            options={planOptions}
            padding="py-[9px]"
          />
        </div>
      )}

      <div className="border border-darkmode-100 rounded p-[18px] mt-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="text-sm text-white font-semibold">
            Choose a {mobilePage ? "Country" : "Location"}
          </p>
          <SearchInput
            paddingY="py-2"
            className="w-full md:w-[220px] mt-2 md:mt-0"
            placeholder="Search"
            endAdornment={
              <div className="border-l border-darkmode-200">
                <Image src={SearchIcon} alt="" className="ml-3" />
              </div>
            }
          />
        </div>

        {isLoading ? (
          <p className="text-white">Loading locations...</p>
        ) : (
          <div
            className={cn(
              "flex flex-col justify-center gap-3",
              isExpanded.country ? "md:flex-col" : "md:flex-row md:items-center"
            )}
          >
            <RadioCard<string>
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 w-full",
                isExpanded.country ? "lg:grid-cols-5" : "lg:grid-cols-4"
              )}
              selected={selectedCountry}
              onChange={(val) => {
                setSelectedCountry(val);

                const country = locations?.find((c: any) => c.code === val);
                if (country) setLocation(country.name);

                setSelectedCity("");
              }}
              options={visibleLocations}
              padding="py-[9px]"
            />

            <button
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  country: !prev.country,
                }))
              }
              className="flex items-center gap-1 group w-fit mt-4"
            >
              <p className="text-white text-xs whitespace-nowrap">
                {isExpanded.country
                  ? "Show Less"
                  : mobilePage
                  ? `+30 more countries`
                  : "Expand All countries"}
              </p>
              <Image
                src={ChevronIcon}
                alt=""
                className="group-hover:rotate-180 transition-transform delay-75 ease-in-out"
              />
            </button>
          </div>
        )}
      </div>

      {mobilePage && (
        <div className="border border-darkmode-100 rounded p-[18px] mt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="text-sm text-white font-semibold">Choose a City</p>
            <SearchInput
              paddingY="py-2"
              className="w-full md:w-[220px] mt-2 md:mt-0"
              placeholder="Search"
              endAdornment={
                <div className="border-l border-darkmode-200">
                  <Image src={SearchIcon} alt="" className="ml-3" />
                </div>
              }
            />
          </div>

          <div
            className={cn(
              "flex flex-col justify-center gap-3",
              isExpanded.city ? "md:flex-col" : "md:flex-row md:items-center"
            )}
          >
            <RadioCard<string>
              selected={selectedCity}
              onChange={(val) => {
                setSelectedCity(val);

                const city = cityOptions.find((c) => c.value === val);
                if (city) {
                  const cityName =
                    typeof city.content === "string"
                      ? city.content
                      : (city.content as React.ReactElement).props.children;
                  setLocation(cityName as string);
                }
              }}
              options={visibleCities}
              padding="py-[9px]"
            />

            <button
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  city: !prev.city,
                }))
              }
              className="flex items-center gap-1 group w-fit mt-4"
            >
              <p className="text-white text-xs whitespace-nowrap">
                {isExpanded.city ? "Show Less" : `+30 more Cities`}
              </p>
              <Image
                src={ChevronIcon}
                alt=""
                className="group-hover:rotate-180 transition-transform delay-75 ease-in-out"
              />
            </button>
          </div>
        </div>
      )}

      <div className="border border-darkmode-100 rounded p-[18px] mt-8">
        <p className="text-sm text-white font-semibold">Choose a Quantity</p>
        <div className="flex flex-col lg:flex-row items-center gap-2">
          <RadioCard<number>
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 w-full lg:w-2/3 xl:w-1/2"
            selected={quantity}
            onChange={setQuantity}
            options={qtyOptions}
            padding="py-[9px]"
          />

          <div className="bg-darkmode-100 w-px h-20 hidden lg:block"></div>
          <div className="bg-darkmode-100 h-px w-full block lg:hidden my-4"></div>

          <InputText
            type="number"
            className="w-full lg:w-1/3 xl:w-1/2"
            startAdornment={<Image src={QuantityIcon} alt="" />}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            label="Quantity"
            placeholder="Enter Custom"
          />
        </div>
      </div>
    </div>
  );
};
export default CustomPlan;
