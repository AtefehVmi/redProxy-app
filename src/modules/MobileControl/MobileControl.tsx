"use client";

import cn from "@/utils/cn";
import CouponCard from "../Shared/CouponCard";
import OrderSummaryCard from "../Shared/OrderSummaryCard";
import { useState } from "react";
import CustomPlan from "./CustomPlan";

const MobileControl = ({ className }: { className?: string }) => {
  const [coupon, setCoupon] = useState("");
  const [country, setCountry] = useState("UK");
  const [city, setCity] = useState("London");
  const [quantity, setQuantity] = useState(1);
  const [port, setPort] = useState("");
  const [lte, setLte] = useState("1 Day");

  return (
    <div className={cn("grid grid-cols-11 gap-4", className)}>
      <div className="col-span-8">
        <CustomPlan
          lte={lte}
          setLte={setLte}
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
          port={port}
          setPort={setPort}
        />
        <CouponCard coupon={coupon} setCoupon={setCoupon} className="mt-4" />
      </div>

      <div className="col-span-3">
        <OrderSummaryCard
          price={2}
          pricePerGb={2}
          quantity={quantity}
          coupon={coupon}
          plan={lte}
        />
      </div>
    </div>
  );
};
export default MobileControl;
