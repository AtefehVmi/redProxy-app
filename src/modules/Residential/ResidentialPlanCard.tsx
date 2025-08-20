"use client";

import React, { useState } from "react";
import Image from "next/image";
import cn from "@/utils/cn";

import EditIcon from "@public/icons/edit.svg";
import PlanIcon from "@public/icons/plans.svg";
import CalendarIcon from "@public/icons/calendar.svg";
import GlobeIcon from "@public/icons/globe-big.svg";
import EyeIcon from "@public/icons/eye.svg";
import PurchaseIcon from "@public/icons/shopping-cart.svg";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

type Props = {
  name: string;
  desc: string;
  purchaseDate: string;
  expireDate: string;
  remainingGb: number;
  planId: string;
};

const ResidentialPlanCard: React.FC<Props> = ({
  name: initialName,
  desc,
  purchaseDate,
  expireDate,
  remainingGb,
  planId,
}) => {
  const [showGb, setShowGb] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleNameSubmit = () => {
    setIsEditing(false);
  };

  return (
    <div className="border border-darkmode-100 bg-darkmode-300 rounded-lg p-4 flex flex-col">
      <div className="grow">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1">
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  onBlur={handleNameSubmit}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleNameSubmit();
                  }}
                  className="bg-transparent border-b border-grey-400 text-white font-semibold text-base focus:outline-none w-[150px]"
                  autoFocus
                />
              ) : (
                <p className="text-white font-semibold text-base">{name}</p>
              )}

              <button
                onClick={() => setIsEditing(true)}
                className="hover:opacity-80"
              >
                <Image src={EditIcon} alt="" />
              </button>
            </div>
            <p className="text-grey-400 text-xs">{desc}</p>
          </div>

          <div className="rounded-lg bg-blue-100 min-w-10 min-h-10 ml-1">
            <Image src={PlanIcon} alt="" className="m-[9px]" />
          </div>
        </div>

        <div
          className={cn(
            "mt-6 flex flex-col gap-2",
            "*:border *:border-darkmode-100 *:rounded *:py-2 *:px-3",
            "*:flex *:items-center *:justify-between"
          )}
        >
          <div>
            <div className="flex items-center gap-1">
              <Image src={CalendarIcon} alt="" />
              <p className="text-grey-400 text-sm">Purchase Date</p>
            </div>

            <p className="text-grey-50 font-semibold text-sm">
              {formatDate(purchaseDate)}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1">
              <Image src={CalendarIcon} alt="" />
              <p className="text-grey-400 text-sm">Expiration Date</p>
            </div>

            <p className="text-grey-50 font-semibold text-sm">
              {formatDate(expireDate)}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1">
              <Image src={GlobeIcon} alt="" />
              <p className="text-grey-400 text-sm">Remaing GB</p>
            </div>

            <button onClick={() => setShowGb(!showGb)}>
              {showGb ? (
                <p className="text-white text-sm font-semibold">
                  {remainingGb ?? 0}GB
                </p>
              ) : (
                <Image src={EyeIcon} alt="" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 w-full">
        <Link href={`/purchase/${planId}`}>
          <Button className="w-full" icon={<Image src={PurchaseIcon} alt="" />}>
            Add Bandwidth
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default ResidentialPlanCard;
