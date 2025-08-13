"use client";

import cn from "@/utils/cn";
import CouponCard from "../Shared/CouponCard";
import OrderSummaryCard from "../Shared/OrderSummaryCard";
import { useState } from "react";
import CustomPlan from "../IspControl/CustomPlan";

const MobileControl = ({ className }: { className?: string }) => {
  const [coupon, setCoupon] = useState("");
  const [plan, setPlan] = useState("1 Day");
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState("");

  return (
    <div className={cn("grid grid-cols-1 xl:grid-cols-11 gap-4", className)}>
      <div className="xl:col-span-8">
        <CustomPlan
          plan={plan}
          setPlan={setPlan}
          quantity={quantity}
          setQuantity={setQuantity}
          location={location}
          setLocation={setLocation}
        />
      </div>

      <div className="xl:col-span-3">
        <CouponCard coupon={coupon} setCoupon={setCoupon} />

        <OrderSummaryCard
          className="mt-4"
          price={2}
          quantity={quantity}
          coupon={coupon}
          plan={plan}
          location={location}
        />
      </div>
    </div>
  );
};
export default MobileControl;
