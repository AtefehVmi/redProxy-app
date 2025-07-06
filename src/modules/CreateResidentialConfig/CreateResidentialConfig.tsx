"use client";

import React, { useState } from "react";
import Input from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import Image from "next/image";
import cn from "@/utils/cn";
import Button from "@/components/Button/Button";
import copyIcon from "@public/icons/copy-all.svg";
import DownloadIcon from "@public/icons/download-icon.svg";
import CheckIcon from "@public/icons/check.svg";
import ConfigIcon from "@public/icons/config-name.svg";
import RotationIcon from "@public/icons/rotation.svg";
import PortIcon from "@public/icons/port.svg";
import QuantityIcon from "@public/icons/quantity.svg";
import Autocomplete from "@/components/AutoComplete/Autocomplete";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import {
  generateProxy,
  getResiCities,
  getResiCountries,
  getResiStates,
} from "@/service/api";
import { useParams, usePathname } from "next/navigation";
import useFetch from "@/hooks/UseFetch";
import { City, Country, State } from "@/service/models";

const DUMMY_TEXT_AREA_VALUE =
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n" +
  "saaf.eth---gmail.com:null:proxy.wtfproxy.com:3030\n";

const portOptions = [
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

const poolToName = {
  enterprise_residential: "Enterprise Residential",
  residential: "Residential",
  premium_residential: "Premium Residential",
};

const CreateResidentialConfig = () => {
  const [formatedList, setFormatedList] = React.useState<string>(
    DUMMY_TEXT_AREA_VALUE
  );
  const [downloaded, setDownloaded] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const [port, setPort] = useState(portOptions[0].value);
  const [rotation, setRotation] = useState(rotationOptions[0].value);
  const [format, setFormat] = useState(formatOptions[0].value);
  const [quantity, setQuantity] = useState(0);

  const path = usePathname();
  const pool = path.split("/")[2];
  console.log("pool param value:", pool);

  const [country, setCountry] = useState<string | null>(null);
  const [countryOptions, setCountryOptions] = useState<
    Option<string, Country>[]
  >([]);

  const [state, setState] = useState<string | null>(null);
  const [stateOptions, setStateOptions] = useState<Option<string, State>[]>([]);
  const [hasState, setHasState] = useState<boolean>(
    pool === "enterprise_residential" ? false : true
  );

  const [city, setCity] = useState<string | null>(null);
  const [cityOptions, setCityOptions] = useState<Option<string, City>[]>([]);

  const { fetch: countriesFetch, loading: countriesLoading } = useFetch(
    getResiCountries,
    false,
    {
      toastOnError: true,
    }
  );

  const { fetch: statesFetch, loading: statesLoading } = useFetch(
    getResiStates,
    false,
    { toastOnError: true }
  );

  const { fetch: citiesFetch, loading: citiesLoading } = useFetch(
    getResiCities,
    false,
    { toastOnError: true }
  );

  const selectLabelStyle = "text-sm mb-2.5";

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  function onCopyClick() {
    copyToClipboard(formatedList);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  }

  function onDownloadClick() {
    const blob = new Blob([formatedList], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "proxy-config.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 5000);
  }

  //country, state, city logics

  const handleCountriesFetch = () => {
    if (countryOptions.length === 0) {
      if (!countriesLoading) {
        countriesFetch(pool).then((data) => {
          let options = [
            {
              label: "Random",
              value: "rand",
            },
          ];
          if (pool === "premium_residential") {
            options = [
              ...options,
              ...data.map((country: Country) => ({
                label: country.name,
                value: country.code ?? country.iso_code,
                extra: country,
              })),
            ];
          } else {
            options = [
              ...options,
              ...data.countries.map((country: Country) => ({
                label: country.name,
                value: country.code ?? country.iso_code,
                extra: country,
              })),
            ];
          }
          setCountryOptions(options);
        });
      }
    }
  };

  const handleCountryChange = ({
    value,
    option,
  }: {
    value: string | null;
    option?: Option<string | null, Country>;
  }) => {
    if (value) {
      setCountry(() => value);
      setState(() => null);
      setStateOptions(() => []);
      setCity(() => null);
      setCityOptions(() => []);

      if (pool === "premium_residential") {
        const states = option?.extra?.states;
        if (states) {
          setStateOptions(
            states.map((state) => ({
              label: state.name,
              value: state.code,
              extra: state,
            }))
          );
        }
      } else {
        if (pool === "enterprise_residential" && value !== "US") {
          setStateOptions([]);
          setState("---");
          setHasState(false);
          handleStateChange({ value: "random" });
          return;
        }
        setHasState(true);
        statesFetch(pool, value).then((data) => {
          const states = data?.states as State[];
          if (states) {
            setStateOptions(
              states.map((state) => ({
                label: state.name,
                value: `${state.name}`.replaceAll(" ", ""),
                extra: state,
              }))
            );
          }
        });
      }
    }
  };

  const handleStateChange = ({
    value,
    option,
  }: {
    value: string | null;
    option?: Option<string | null, State>;
  }) => {
    if (value) {
      setState(() => value);
      setCity(() => null);
      setCityOptions(() => []);
      if (pool === "premium_residential") {
        const cities = option?.extra?.cities;
        if (cities) {
          setCityOptions(
            cities.map((city) => ({
              label: city.name,
              value: city.code,
              extra: city,
            }))
          );
        }
      } else {
        citiesFetch(pool, country, value).then((data) => {
          const cities = data?.cities as State[];
          if (cities) {
            setCityOptions(
              cities.map((city) => ({
                label: city.name,
                value: `${city.name}`.replaceAll(" ", ""),
                extra: city,
              }))
            );
          }
        });
      }
    }
  };

  const handleCityChange = ({
    value,
    option,
  }: {
    value: string | null;
    option?: Option<string | null, City>;
  }) => {
    if (value) {
      setCity(() => value);
    }
  };

  //generate residential

  const { fetch: generateProxyFetch, loading: generateProxyLoading } = useFetch(
    generateProxy,
    false,
    { toastOnError: true }
  );

  const handleSubmit = () => {
    const res = generateProxyFetch(pool, {
      format,
      port,
      country,
      state,
      city,
      rotation,
      quantity,
    });

    console.log(res);
  };

  return (
    <div
      className={cn(
        "rounded w-full h-auto p-[1.75px] pt-[19px] pr-[29px] pb-5 pl-4 grid grid-cols-2",
        "bg-darkmode-200 card-gradient shadow-nav-link"
      )}
    >
      <div className="col-span-2 grid grid-cols-2 gap-x-[18px]">
        <div>
          <p className="col-span-2 text-white text-base font-semibold">
            Proxy settings
          </p>
          <div className="col-span-1 grid grid-cols-2 grid-rows-4 gap-x-5 gap-y-4 mt-8">
            <Input
              key={"name"}
              type={"text"}
              label={"Config Name *"}
              placeholder={"Enter Config Name"}
              startAdornment={<Image src={ConfigIcon} alt="" />}
            />

            <Autocomplete
              value={port}
              options={portOptions}
              onChange={({ value }) => setPort(value)}
              label={"Port Type *"}
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
              value={"germany"}
              options={countryOptions}
              onChange={() => {}}
              onFocus={handleCountriesFetch}
              label={"Geo Location *"}
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
            <Button
              onClick={handleSubmit}
              className="col-span-2 mt-8 text-base"
            >
              Generate Proxy
            </Button>
          </div>
        </div>
        <TextArea
          buttons={
            <div className="flex items-center gap-3">
              <Button
                onClick={onDownloadClick}
                icon={
                  <Image
                    width={18}
                    height={18}
                    src={downloaded ? CheckIcon : DownloadIcon}
                    alt={downloaded ? "Copied" : "Copy"}
                  />
                }
              >
                Download
              </Button>
              <Button
                icon={
                  <Image
                    width={18}
                    height={18}
                    src={copied ? CheckIcon : copyIcon}
                    alt={copied ? "Copied" : "Copy"}
                  />
                }
                onClick={onCopyClick}
              >
                Copy All Line
              </Button>
            </div>
          }
          label={"FORMATTED LIST"}
          readonly={true}
          value={formatedList}
          containerClassName={"col-span-1"}
          labelClassName={selectLabelStyle}
          textAreaClassName={
            "h-full max-h-full px-[19px] py-4 text-xs font-medium"
          }
        ></TextArea>
      </div>
    </div>
  );
};

export default CreateResidentialConfig;
