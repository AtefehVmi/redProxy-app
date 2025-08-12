"use client";

import cn from "@/utils/cn";
import PlanIcon from "@public/icons/plans.svg";
import Image from "next/image";
import TagIcon from "@public/icons/tag.svg";
import Button from "@/components/Button/Button";
import ArrowIcon from "@public/icons/arrow-small-right.svg";
import SelectedIcon from "@public/icons/check-mark.svg";

type Props = {
  id: number;
  gb: number;
  perPrice: number;
  discount: number;
  recommend?: boolean;
  total: number;
  isSelected: boolean;
  onSelect: (id: number) => void;
};

const ResidentialPlan = ({
  gb,
  perPrice,
  discount,
  recommend,
  total,
  id,
  isSelected,
  onSelect,
}: Props) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onSelect(id);
      }}
      className={cn(
        "bg-darkmode-300 p-4 cursor-pointer",
        recommend ? "border-gradient" : "border border-darkmode-100 rounded-lg"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-blue-100">
            <Image src={PlanIcon} alt="" className="w-6 h-6 m-1.5" />
          </div>
          <p className="text-white font-bold text-2xl">{gb} GB</p>
        </div>

        <div
          className={cn("border border-orange-200 px-3 py-1.5 rounded-full")}
        >
          {recommend ? (
            <div className="flex items-center gap-1">
              <Image src={TagIcon} alt="" />
              <p className="text-orange-200 font-medium text-[10px] leading-4">
                Recommended - {discount}%
              </p>
            </div>
          ) : (
            <p className="text-orange-200 text-[10px]">{discount}%</p>
          )}
        </div>
      </div>

      <div
        className={cn(
          "mt-6 flex flex-col gap-3",
          "*:border *:border-darkmode-100 *:rounded *:px-3 *:py-2"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <p className="text-base leading-4 text-grey-500">$</p>
            <p className="text-grey-400 text-sm">Price Per GB</p>
          </div>

          <p className="text-grey-50 text-sm font-semibold">${perPrice}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <p className="text-base leading-4 text-grey-500">$</p>
            <p className="text-grey-400 text-sm">Total</p>
          </div>

          <p className="text-grey-50 text-sm font-semibold">${total}</p>
        </div>
      </div>

      <Button
        variant="ghost"
        className="mt-6 w-full"
        rightIcon={<Image src={isSelected ? SelectedIcon : ArrowIcon} alt="" />}
      >
        {isSelected ? "Selected" : " Select"}
      </Button>
    </div>
  );
};
export default ResidentialPlan;
