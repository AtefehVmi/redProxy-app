"use client";

import cn from "@/utils/cn";
import OrderSummaryCard from "../Shared/OrderSummaryCard";
import { useState } from "react";
import CouponCard from "../Shared/CouponCard";
import CustomPlan from "../Shared/CustomPlan";

const plans = [
  { value: 0, name: "10 Days", price: 12 },
  { value: 1, name: "30 Days", price: 30 },
  { value: 2, name: "60 Days", price: 50 },
  { value: 3, name: "90 Days", price: 90 },
];

const DatacenterControl = ({ className }: { className?: string }) => {
  const [coupon, setCoupon] = useState("");
  const [plan, setPlan] = useState(plans[0]);
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState("Austria");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [couponData, setCouponData] = useState<{
    total_price: string;
    discount: number;
  } | null>(null);

  return (
    <div className={cn("grid grid-cols-1 xl:grid-cols-11 gap-4", className)}>
      <div className="xl:col-span-8">
        <CustomPlan
          planOptions={plans.map((p) => ({
            value: p.value,
            content: (
              <div>
                <p className="text-sm text-white">{p.name}</p>
                <p className="text-grey-400 text-sm">${p.price}</p>
              </div>
            ),
          }))}
          plan={plan}
          setPlan={setPlan}
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
          price={estimatedPrice ?? plan.price * quantity}
          quantity={quantity}
          coupon={coupon}
          plan={plan}
          location={location}
        />
      </div>
    </div>
  );
};
export default DatacenterControl;
