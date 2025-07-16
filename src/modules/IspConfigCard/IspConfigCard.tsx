"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import copyIcon from "@public/icons/copy-all.svg";
import trashIcon from "@public/icons/bin.svg";
import CheckIcon from "@public/icons/copied-icon.svg";
import ToggleBox from "@/components/ToggleBox/ToggleBox";
import Button from "@/components/Button/Button";
import cn from "@/utils/cn";
import ProxiesModal from "@/components/Modal/ProxiesModal";
import rawArrowRightIcon from "@public/icons/arrow-small-right.svg";
import Link from "next/link";
import AreaLineChart from "@/components/Charts/AreaLineChart";

interface IspConfigCardProps {
  configName: string;
  location: string;
  remain: string;
  quantity: number;
  status: string;
  autoRenew: boolean;
  date: string;
  image: StaticImageData;
  proxyname: string;
  plan: string;
  dataUsage: { month: string; usage: number }[];
  chartColor: string;
}

const IspConfigCard = (props: IspConfigCardProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showProxies, setShowProxies] = useState(false);

  const handleCopyAll = () => {
    const text = `Location: ${props.location}
Quantity: ${props.quantity}
Auto Renew: ${props.autoRenew}
Remaining Time: ${props.remain}
Status: ${props.status}
Date: ${props.date}`;

    navigator.clipboard.writeText(text);
    setCopiedField("ALL");

    setTimeout(() => {
      setCopiedField(null);
    }, 5000);
  };

  const containerStyle = "w-auto h-auto flex flex-col items-start gap-0.5";
  const headingStyle = "text-xs font-medium text-config-card-heading-text";
  const valueStyle = "text-sm leading-6 font-semibold text-white";

  const handleCardClick = (e: any) => {
    e.preventDefault();
    setShowProxies(true);
  };

  return (
    <div
      className={cn(
        "rounded w-full h-auto grid grid-cols-7 px-4 py-[19px] gap-x-[67px] !gap-y-2.5",
        "bg-darkmode-200 border border-darkmode-100"
      )}
    >
      {/*col 1*/}
      <div className="col-span-3 flex items-center gap-6">
        <div className="flex items-center gap-6 w-[85%]">
          <div>
            <Image src={props.image} alt="" className="min-w-20 min-h-20" />
          </div>
          <div>
            <p className="text-white text-base font-semibold whitespace-nowrap">
              {props.proxyname}
            </p>

            <div className="mt-[18px]">
              <p className="text-xs text-grey-400">Plan</p>
              <p className="mt-0.5 text-xl font-bold text-white whitespace-nowrap">
                {props.plan}
              </p>
            </div>
          </div>
        </div>

        <AreaLineChart color={props.chartColor} data={props.dataUsage} />
      </div>
      {/*col 2*/}
      <div className="col-span-2 grid grid-cols-3 grid-rows-2 gap-[13px] items-center">
        <div className={containerStyle}>
          <p className={headingStyle}>Location</p>
          <p className={valueStyle}>{props.location}</p>
        </div>
        <div className={containerStyle}>
          <p className={headingStyle}>Quantity</p>
          <p className={valueStyle}>{props.quantity}</p>
        </div>
        <div className={containerStyle}>
          <p className={headingStyle}>Auto Renew</p>
          <span onClick={(e) => e.stopPropagation()}>
            <ToggleBox checked={props.autoRenew} />
          </span>
        </div>
        <div className={containerStyle}>
          <p className={headingStyle}>Remaining Time</p>
          <p className={valueStyle}>{props.remain}</p>
        </div>
        <div className={containerStyle}>
          <p className={headingStyle}>Status</p>
          <p className={valueStyle}>{props.status}</p>
        </div>
        <div className={containerStyle}>
          <p className={headingStyle}>Date</p>
          <p className={valueStyle}>{props.date}</p>
        </div>
      </div>
      {/*col 3*/}
      <div className="col-span-2 flex flex-col justify-center items-end gap-2.5">
        <div className="flex items-center gap-1 col-span-2">
          <Button
            className="col-span-1"
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
            <p className="text-xs font-medium text-white">
              {copiedField === "ALL" ? "Copied" : "Copy"}
            </p>
          </Button>

          <Button
            className="col-span-1"
            onClick={(e) => {
              e.stopPropagation();
            }}
            variant="secondary"
            icon={<Image src={trashIcon} alt={""} className="w-4 h-4" />}
          >
            <p className="text-xs font-medium text-white">Delete</p>
          </Button>
        </div>
        {["ISP Proxies", "Mobile Proxies"].includes(props.proxyname) ? (
          <Button
            onClick={handleCardClick}
            rightIcon={
              <Image src={rawArrowRightIcon} alt={""} className="w-4 h-4" />
            }
            className="col-span-2 px-9"
          >
            Proxy List
          </Button>
        ) : (
          <Link className="col-span-2" href={"/viewConfig/datacenter"}>
            <Button
              className="px-9"
              rightIcon={
                <Image src={rawArrowRightIcon} alt={""} className="w-4 h-4" />
              }
            >
              Proxy List
            </Button>
          </Link>
        )}
      </div>

      <ProxiesModal
        onClose={() => setShowProxies(false)}
        open={showProxies}
        title="Proxy List"
      />
    </div>
  );
};

export default IspConfigCard;
