"use client";

import cn from "@/utils/cn";
import CouponCard from "../Shared/CouponCard";
import OrderSummaryCard from "../Shared/OrderSummaryCard";
import { useState } from "react";
import CustomPlan from "../Shared/CustomPlan";

const MobileControl = ({ className }: { className?: string }) => {
  const [coupon, setCoupon] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [couponData, setCouponData] = useState<{
    total_price: string;
    discount: number;
  } | null>(null);

  return (
    <div className={cn("grid grid-cols-1 xl:grid-cols-11 gap-4", className)}>
      <div className="xl:col-span-8">
        <CustomPlan
          quantity={quantity}
          setQuantity={setQuantity}
          location={location}
          setLocation={setLocation}
        />
      </div>

      <div className="xl:col-span-3">
        <CouponCard
          setCouponData={setCouponData}
          coupon={coupon}
          setCoupon={setCoupon}
        />

        <OrderSummaryCard
          className="mt-4"
          price={estimatedPrice ?? 4.0}
          quantity={quantity}
          coupon={coupon}
          plan={{ price: 4.0, name: "LTE/Mobile" }}
          location={location}
        />
      </div>
    </div>
  );
};
export default MobileControl;
