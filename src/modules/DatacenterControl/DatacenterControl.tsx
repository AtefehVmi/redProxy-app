"use client";

import cn from "@/utils/cn";
import CouponCard from "../Shared/CouponCard";
import OrderSummaryCard from "../Shared/OrderSummaryCard";
import { useState } from "react";
import CustomPlan from "./CustomPlan";

const DatacenterControl = ({ className }: { className?: string }) => {
  const [coupon, setCoupon] = useState("");
  const [plan, setPlan] = useState("1 Day");
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState("");

  return (
    <div className={cn("grid grid-cols-11 gap-4", className)}>
      <div className="col-span-8">
        <CustomPlan plan={plan} setPlan={setPlan} />
        <CouponCard coupon={coupon} setCoupon={setCoupon} className="mt-4" />
      </div>

      <div className="col-span-3">
        <OrderSummaryCard
          price={2}
          pricePerGb={2}
          quantity={quantity}
          coupon={coupon}
          plan={plan}
        />
      </div>
    </div>
  );
};
export default DatacenterControl;
