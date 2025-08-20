"use client";
import React, { useState } from "react";
import { formatBytes } from "@/utils/converter";
import Image from "next/image";
import rawArrowRightIcon from "@public/icons/arrow-small-right.svg";

import copyIcon from "@public/icons/copy-white.svg";
import copyItemIcon from "@public/icons/copy.svg";
import trashIcon from "@public/icons/bin.svg";
import CheckIcon from "@public/icons/check-icon.svg";
import AreaLineChart from "@/components/Charts/AreaLineChart";
import cn from "@/utils/cn";
import Button from "@/components/Button/Button";
import Link from "next/link";
import DeleteModal from "@/components/Modal/DeleteModal";

interface ResidentialConfigCardProps {
  configName: string;
  dataUsed: number;
  dataUsage?: { month: string; usage: number }[];
  portType: string;
  rotation: string;
  geoLocation: string;
  quantityGenerated: number;
  format: string;
  port: number;
  username: string;
  password: string;
  configUuid: string;
}

const ResidentialConfigCard = (props: ResidentialConfigCardProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleCopy = (field: string, value: string | number) => {
    navigator.clipboard.writeText(String(value));
    setCopiedField(field);

    setTimeout(() => {
      setCopiedField(null);
    }, 5000);
  };

  const handleCopyAll = () => {
    const text = `PORT TYPE: ${props.portType}
GEO LOCATION: ${props.geoLocation}
FORMAT: ${props.format}
USERNAME: ${props.username}
ROTATION: ${props.rotation}
QUANTITY GENERATED: ${props.quantityGenerated}
PORT: ${props.port}
PASSWORD: ${props.password}`;

    navigator.clipboard.writeText(text);
    setCopiedField("ALL");

    setTimeout(() => {
      setCopiedField(null);
    }, 5000);
  };

  const containerStyle = "w-auto h-auto flex flex-col items-start gap-[7px]";
  const headingStyle =
    "text-xs font-medium text-config-card-heading-text whitespace-nowrap";
  const valueStyle = "text-sm font-semibold text-white";

  const renderCopyIcon = (field: string) => (
    <Image
      src={copiedField === field ? CheckIcon : copyItemIcon}
      alt=""
      className="w-4 h-4 cursor-pointer transition-all duration-300 active:scale-90"
      onClick={() => {
        if (field === "PORT") handleCopy(field, props.port);
        else if (field === "USERNAME") handleCopy(field, props.username);
        else if (field === "PASSWORD") handleCopy(field, props.password);
        else if (field === "FORMAT") handleCopy(field, props.format);
      }}
    />
  );

  return (
    <div
      className={cn(
        "rounded w-full h-auto grid xl:grid-cols-7 px-4 py-[19px] gap-x-8 !gap-y-2.5",
        "bg-darkmode-200 border border-darkmode-100"
      )}
    >
      {/*col 1*/}
      <div className="xl:col-span-2 grid grid-cols-3 grid-rows-3">
        <p className="col-span-3 row-span-1 mb-[13px] text-white text-base font-semibold">
          {props.configName}
        </p>
        <div className="col-span-1 row-span-2 grid grid-cols-1 grid-rows-2 gap-y-[7px]">
          <p className="col-span-1 row-span-1 self-end text-xs text-profile-card-text font-medium">
            DATA USED
          </p>
          <p className="col-span-1 row-span-2 text-2xl text-white font-semibold">
            {formatBytes(props.dataUsed)}
          </p>
        </div>
        {props.dataUsage && (
          <div className="col-span-2 row-span-2">
            <AreaLineChart color="#5CA7FF" data={props.dataUsage} />
          </div>
        )}
      </div>

      <div className="block xl:hidden w-full bg-darkmode-100 h-px my-4"></div>

      {/*col 2*/}
      <div className="xl:col-span-5 1940:col-span-4 grid md:grid-cols-2 xl:grid-cols-10 grid-rows-2 gap-2 items-center">
        <div className={cn(containerStyle, "xl:col-span-1")}>
          <p className={headingStyle}>PORT TYPE</p>
          <p className={valueStyle}>{props.portType}</p>
        </div>
        <div className={cn(containerStyle, "xl:col-span-2")}>
          <p className={headingStyle}>GEO LOCATION</p>
          <p className={valueStyle}>{props.geoLocation}</p>
        </div>
        <div className={cn(containerStyle, "xl:col-span-4")}>
          <p className={headingStyle}>FORMAT</p>
          <div className="flex items-center gap-[3px]">
            <p className={valueStyle}>{props.format}</p>
            {renderCopyIcon("FORMAT")}
          </div>
        </div>
        <div className={cn(containerStyle, "xl:col-span-3")}>
          <p className={headingStyle}>USERNAME</p>
          <div className="flex items-center gap-[3px]">
            <p className={valueStyle}>{props.username}</p>
            {renderCopyIcon("USERNAME")}
          </div>
        </div>
        <div className={cn(containerStyle, "xl:col-span-1")}>
          <p className={headingStyle}>ROTATION</p>
          <p className={valueStyle}>{props.rotation}</p>
        </div>
        <div className={cn(containerStyle, "xl:col-span-2")}>
          <p className={headingStyle}>QUANTITY GENERATED</p>
          <p className={valueStyle}>{props.quantityGenerated}</p>
        </div>
        <div className={cn(containerStyle, "xl:col-span-4")}>
          <p className={headingStyle}>PORT</p>
          <div className="flex items-center gap-[3px]">
            <p className={valueStyle}>{props.port}</p>
            {renderCopyIcon("PORT")}
          </div>
        </div>
        <div className={cn(containerStyle, "xl:col-span-3")}>
          <p className={headingStyle}>PASSWORD</p>
          <div className="flex items-center gap-[3px]">
            <p className={valueStyle}>{props.password}</p>
            {renderCopyIcon("PASSWORD")}
          </div>
        </div>
      </div>

      <div className="block xl:hidden w-full bg-darkmode-100 h-px my-4"></div>

      {/*col 3*/}
      <div className="xl:col-span-7 1940:col-span-1 flex flex-row 1940:flex-col 1940:justify-center items-end gap-2.5 w-full mt-3 pt-3 border-t 1940:border-t-0 border-darkmode-100">
        <div className="flex items-center gap-1 1940:w-full">
          <Button
            className="1940:w-1/2"
            variant="secondary"
            icon={
              <Image
                src={copiedField === "ALL" ? CheckIcon : copyIcon}
                alt=""
                className="w-4 h-4"
              />
            }
            onClick={(e) => {
              e.stopPropagation();
              handleCopyAll();
            }}
          >
            <p className="text-white">Copy</p>
          </Button>

          <Button
            className="1940:w-1/2"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
            variant="secondary"
            icon={<Image src={trashIcon} alt={""} className="w-4 h-4" />}
          >
            <p className="text-white">Delete</p>
          </Button>
          {open && (
            <DeleteModal
              configUuid={props.configUuid}
              open={open}
              onClose={() => setOpen(false)}
            />
          )}
        </div>

        <Link className="1940:w-full" href={"/generate/residential"}>
          <Button
            rightIcon={
              <Image src={rawArrowRightIcon} alt={""} className="w-4 h-4" />
            }
            className="1940:w-full"
          >
            Proxy List
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ResidentialConfigCard;
