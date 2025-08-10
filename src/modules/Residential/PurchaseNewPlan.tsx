"use client";

import cn from "@/utils/cn";
import ResidentialPlan from "./ResidentialPlan";
import { useState } from "react";
import CustomPlanCard from "./CustomPlanCard";
import CustomAmountCard from "./CustomAmountCard";
import CouponCard from "./CouponCard";
import OrderSummaryCard from "../Shared/OrderSummaryCard";

const PurchaseNewPlan = ({ className }: { className?: string }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);

  const handleSelectPlan = (id: number) => {
    setSelectedPlanId(id);
  };

  return (
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
        <CouponCard />

        <OrderSummaryCard price={4.0} residentialPlan={1} className="mt-4" />
      </div>
    </div>
  );
};
export default PurchaseNewPlan;
