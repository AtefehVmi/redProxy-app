"use client";
import React, { useState } from "react";
import Image from "next/image";

import copyIcon from "@public/icons/copy-all.svg";
import trashIcon from "@public/icons/bin.svg";
import CheckIcon from "@public/icons/check-icon.svg";
import IspImage from "@public/icons/isp.svg";
import ToggleBox from "@/components/ToggleBox/ToggleBox";
import Button from "@/components/Button/Button";
import cn from "@/utils/cn";
import ProxiesModal from "@/components/Modal/ProxiesModal";
import rawArrowRightIcon from "@public/icons/arrow-small-right.svg";

interface IspConfigCardProps {
  configName: string;
  location: string;
  remain: string;
  quantity: number;
  status: string;
  autoRenew: boolean;
  date: string;
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
      <div className="col-span-2 flex items-center gap-6">
        <div>
          <Image src={IspImage} alt="" />
        </div>
        <div>
          <p className="text-white text-base font-semibold">ISP Proxies</p>

          <div className="mt-[18px]">
            <p className="text-xs text-grey-400">Plan</p>
            <p className="mt-0.5 text-xl font-bold text-white">30 Days</p>
          </div>
        </div>
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
      <div className="col-span-3 flex flex-col justify-center items-end gap-2.5">
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
            <p className="text-xs font-medium text-white">Copy</p>
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
        <Button
          onClick={handleCardClick}
          rightIcon={
            <Image src={rawArrowRightIcon} alt={""} className="w-4 h-4" />
          }
          className="col-span-2 px-9"
        >
          Proxy List
        </Button>
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
