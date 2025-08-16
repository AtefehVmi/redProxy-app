"use client";

import React, { useEffect, useState } from "react";
import Input from "@/components/Input/Input";
import Image from "next/image";
import cn from "@/utils/cn";
import Button from "@/components/Button/Button";

import ConfigIcon from "@public/icons/config-name.svg";
import RotationIcon from "@public/icons/rotation.svg";
import PortIcon from "@public/icons/port.svg";
import QuantityIcon from "@public/icons/quantity.svg";

import Autocomplete from "@/components/AutoComplete/Autocomplete";
import { generateProxy, getResiCountries, getUserPlans } from "@/service/api";
import { usePathname, useSearchParams } from "next/navigation";
import useFetch from "@/hooks/UseFetch";
import { City, Country, State } from "@/service/models";
import ResidentialGenerateTab from "./ResidentialGenerateTab";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import { toast } from "react-toastify";

const protocolOptions = [
  {
    label: "HTTPS",
    value: "http|https",
  },
  {
    label: "Socks5",
    value: "socks5",
  },
];

const rotationOptions = [
  {
    label: "Default",
    value: "random",
  },
  {
    label: "Sticky",
    value: "sticky",
  },
];

const formatOptions = [
  {
    label: "host:port:username:password",
    value: "{hostname}:{port}:{username}:{password}",
  },
  {
    label: "host:port@username:password",
    value: "{hostname}:{port}@{username}:{password}",
  },
  {
    label: "username:password@host:port",
    value: "{username}:{password}@{hostname}:{port}",
  },
  {
    label: "username:password:host:port",
    value: "{username}:{password}:{hostname}:{port}",
  },
];

const CreateResidentialConfig = ({ className }: { className?: string }) => {
  const [protocol, setProtocol] = useState(protocolOptions[0].value);
  const [rotation, setRotation] = useState(rotationOptions[0].value);
  const [format, setFormat] = useState(formatOptions[0].value);
  const [quantity, setQuantity] = useState(0);
  const [lifetime, setLifetime] = useState(0);

  // get plans
  const [plan, setPlan] = useState<string | null>(null);

  const { data: plans, isLoading: plansLoading } = useQuery({
    queryKey: QUERY_KEYS.PLANS,
    queryFn: () => getUserPlans(),
  });

  const planOptions = plansLoading
    ? [{ label: "Loading...", value: "" }]
    : plans?.length
    ? plans.map((plan) => ({
        label: `${plan.pool_type.name} - (${plan.uuid})`,
        value: plan.uuid,
      }))
    : [];

  // country, state, city
  const [country, setCountry] = useState<string | null>(null);
  const [countryOptions, setCountryOptions] = useState<
    Option<string, Country>[]
  >([]);
  const [countries, setCountries] = useState<Country[]>([]);

  const [state, setState] = useState<string | null>(null);

  const [city, setCity] = useState<string | null>(null);

  const { fetch: CountriesFetch, loading } = useFetch(getResiCountries, false, {
    toastOnError: true,
  });

  useEffect(() => {
    const fetchCountries = async () => {
      if (!plan) return;

      const selected = plans?.find((p) => p.uuid === plan);
      if (!selected) return;

      const fetchedCountries = await CountriesFetch(selected.pool_type.name);

      setCountries(fetchedCountries);
      setCountryOptions(
        fetchedCountries.length
          ? fetchedCountries.map((c: Country) => ({
              label: c.name,
              value: c.code,
            }))
          : [{ label: "No data", value: "" }]
      );
    };

    fetchCountries();
  }, [plan, plans, CountriesFetch]);

  const selectedCountryObj = countryOptions.find((c) => c.value === country);
  const statesFromCountry: Option<string, State>[] =
    selectedCountryObj?.value && countries?.length
      ? countries
          .find((c) => c.code === country)
          ?.states.map((s) => ({
            label: s.name,
            value: s.name,
          })) ?? []
      : [];

  const selectedStateObj = statesFromCountry.find((s) => s.value === state);
  const citiesFromState: Option<string, City>[] =
    selectedStateObj?.value && country
      ? countries
          .find((c) => c.code === country)
          ?.states.find((s) => s.name === state)
          ?.cities.map((c) => ({
            label: c.name,
            value: c.code,
          })) ?? []
      : [];

  //generate residential
  const { fetch: generateProxyFetch, loading: generateProxyLoading } = useFetch(
    generateProxy,
    false,
    { toastOnError: true }
  );

  const handleSubmit = () => {
    if (!plan) return;

    const selectedPlan = plans?.find((p) => p.uuid === plan);
    if (!selectedPlan) return;

    const res = generateProxyFetch({
      plan_uuid: selectedPlan.uuid,
      name: selectedPlan.pool_type.name,
      format,
      protocol,
      country,
      state,
      city,
      rotation,
      quantity,
      sticky_lifetime: lifetime,
    });

    console.log(res);
  };

  return (
    <div
      className={cn(
        "rounded w-full h-auto p-[1.75px] pt-[19px] pr-[29px] pb-5 pl-4",
        "bg-darkmode-200 card-gradient shadow-nav-link",
        className
      )}
    >
      <div className="flex flex-col gap-x-[18px]">
        <div>
          <p className="col-span-2 text-white text-base font-semibold">
            Proxy settings
          </p>
          <div className="col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-4 mt-8">
            <Autocomplete
              placeholder="Select a plan"
              className="col-span-2"
              value={plan}
              options={planOptions}
              onChange={({ value }) => setPlan(value)}
              label={"Plan *"}
              startAdornment={<Image src={ConfigIcon} alt="" />}
            />

            <Input
              key={"name"}
              type={"text"}
              label={"Config Name *"}
              placeholder={"Enter Config Name"}
              startAdornment={<Image src={ConfigIcon} alt="" />}
            />

            <Autocomplete
              value={protocol}
              options={protocolOptions}
              onChange={({ value }) => setProtocol(value)}
              label={"Protocol Type *"}
              startAdornment={<Image src={PortIcon} alt="" />}
            />

            <Autocomplete
              value={rotation}
              options={rotationOptions}
              onChange={({ value }) => setRotation(value)}
              label={"Rotation *"}
              startAdornment={<Image src={RotationIcon} alt="" />}
            />

            <Autocomplete
              value={country}
              options={countryOptions.length ? countryOptions : []}
              onChange={({ value }) => {
                setCountry(value);
                setState(null);
                setCity(null);
              }}
              placeholder="Select a Country"
              label={"Country *"}
              startAdornment={<Image src={QuantityIcon} alt="" />}
            />

            <Autocomplete
              value={state}
              options={statesFromCountry.length ? statesFromCountry : []}
              onChange={({ value }) => {
                setState(value);
                setCity(null);
              }}
              label={"State *"}
              placeholder="Select a State"
              startAdornment={<Image src={QuantityIcon} alt="" />}
            />

            <Autocomplete
              value={city}
              options={citiesFromState.length ? citiesFromState : []}
              onChange={({ value }) => setCity(value)}
              placeholder="Select a City"
              // onFocus={handleCountriesFetch}
              label={"City *"}
              startAdornment={<Image src={QuantityIcon} alt="" />}
            />

            <Autocomplete
              value={format}
              options={formatOptions}
              onChange={({ value }) => setFormat(value)}
              label={"Format *"}
              startAdornment={<Image src={RotationIcon} alt="" />}
            />

            <Input
              startAdornment={<Image src={QuantityIcon} alt="" />}
              key={"quantity"}
              type={"number"}
              label={"Quantity *"}
              placeholder={"Enter Quantity"}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />

            <Input
              startAdornment={<Image src={QuantityIcon} alt="" />}
              key={"lifetime"}
              type={"number"}
              label={"Lifetime *"}
              placeholder={"Enter lifetime"}
              value={lifetime}
              onChange={(e) => setLifetime(Number(e.target.value))}
              className="col-span-2"
            />
          </div>
          <div className="flex items-center lg:justify-end col-span-2">
            <Button onClick={handleSubmit} className="mt-8 text-base px-8">
              Generate Proxy
            </Button>
          </div>
        </div>

        <ResidentialGenerateTab />
      </div>
    </div>
  );
};

export default CreateResidentialConfig;
