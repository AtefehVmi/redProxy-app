"use client";

import cn from "@/utils/cn";
import ResidentialPlan from "./ResidentialPlan";
import { useState } from "react";
import CustomAmountCard from "./CustomAmountCard";
import CustomPlanCard from "./CustomPlanCard";
import CouponCard from "@/modules/Shared/CouponCard";
import OrderSummaryCard from "@/modules/Shared/OrderSummaryCard";
import HotSaleImage from "@public/icons/hot-sale.svg";
import CrossIcon from "@public/icons/cross.svg";
import Image from "next/image";

const PurchaseNewPlan = ({ className }: { className?: string }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);
  const [coupon, setCoupon] = useState("");
  const [bannerVisibility, setBannerVisibility] = useState(true);

  const handleSelectPlan = (id: number) => {
    setSelectedPlanId(id);
  };

  return (
    <>
      {bannerVisibility && (
        <div
          className={cn(
            "border border-darkmode-100 rounded py-2 px-3 bg-darkmode-200",
            "flex items-center justify-between relative overflow-hidden mt-6"
          )}
        >
          <div className="bg-darkmode-300 h-20 w-20 rounded-full absolute -top-3 -left-4 z-0"></div>
          <div className="flex items-center gap-6 z-10">
            <Image src={HotSaleImage} alt="" className="m-2" />
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <p className="text-white text-sm font-semibold">More discount</p>
              <p className="text-grey-500 text-sm">
                Buy GB more to get more discount
              </p>
            </div>
          </div>

          <button onClick={() => setBannerVisibility(false)}>
            <Image src={CrossIcon} alt="" />
          </button>
        </div>
      )}

      <div className={cn("grid xl:grid-cols-9 gap-4", className)}>
        <div className="xl:col-span-6">
          <div>
            <div className="grid md:grid-cols-2 gap-4">
              <ResidentialPlan
                id={1}
                gb={1}
                recommend={true}
                perPrice={2}
                total={12}
                discount={20}
                isSelected={selectedPlanId === 1}
                onSelect={handleSelectPlan}
              />
              <ResidentialPlan
                id={2}
                gb={5}
                recommend={true}
                perPrice={2}
                total={12}
                discount={20}
                isSelected={selectedPlanId === 2}
                onSelect={handleSelectPlan}
              />
            </div>

            <div className="grid md:grid-cols-3 mt-6 gap-4">
              <ResidentialPlan
                id={3}
                isSelected={selectedPlanId === 3}
                onSelect={handleSelectPlan}
                gb={10}
                perPrice={2}
                total={12}
                discount={5}
              />
              <ResidentialPlan
                id={4}
                isSelected={selectedPlanId === 4}
                onSelect={handleSelectPlan}
                gb={20}
                perPrice={2}
                total={12}
                discount={5}
              />
              <ResidentialPlan
                id={5}
                isSelected={selectedPlanId === 5}
                onSelect={handleSelectPlan}
                gb={50}
                perPrice={2}
                total={12}
                discount={5}
              />
            </div>
          </div>

          <CustomPlanCard className="mt-8" />
          <CustomAmountCard className="mt-8" />
        </div>
        <div className="xl:col-span-3">
          <CouponCard coupon={coupon} setCoupon={setCoupon} />

          <OrderSummaryCard price={4.0} residentialPlan={1} className="mt-4" />
        </div>
      </div>
    </>
  );
};
export default PurchaseNewPlan;
