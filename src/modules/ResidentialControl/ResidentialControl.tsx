"use client";

import cn from "@/utils/cn";
import CouponCard from "../Shared/CouponCard";
import OrderSummaryCard from "../Shared/OrderSummaryCard";
import CustomPlan from "./CustomPlan";
import { useState } from "react";

const ResidentialControl = ({ className }: { className?: string }) => {
  const [coupon, setCoupon] = useState("");
  const [bandwidth, setBandwidth] = useState<number>(1);

  return (
    <div className={cn("grid grid-cols-11 gap-4", className)}>
      <div className="col-span-8">
        <CustomPlan bandwidth={bandwidth} setBandwidth={setBandwidth} />
        <CouponCard coupon={coupon} setCoupon={setCoupon} className="mt-4" />
      </div>

      <div className="col-span-3">
        <OrderSummaryCard
          price={2}
          pricePerGb={2}
          bandwidth={bandwidth}
          coupon={coupon}
        />
      </div>
    </div>
  );
};
export default ResidentialControl;
