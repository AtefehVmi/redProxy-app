"use client";

import cn from "@/utils/cn";
import CouponCard from "../Shared/CouponCard";
import OrderSummaryCard from "../Shared/OrderSummaryCard";
import CustomPlan from "./CustomPlan";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import { getPlanDetails, getProductPlans, getUserPlans } from "@/service/api";

const ResidentialControl = ({ className }: { className?: string }) => {
  const [coupon, setCoupon] = useState("");
  const [bandwidth, setBandwidth] = useState<number>(1);

  const { data: plan, isLoading } = useQuery({
    queryKey: QUERY_KEYS.PRODUCTS,
    queryFn: () => getProductPlans("residential"),
  });
  const price = bandwidth * (Number(plan?.plans?.[0].price) ?? 2);

  return (
    <div className={cn("grid grid-cols-11 gap-4", className)}>
      <div className="col-span-8">
        <CustomPlan
          plan={plan}
          bandwidth={bandwidth}
          setBandwidth={(val) => setBandwidth(Math.max(1, val))}
        />
        <CouponCard
          amount={bandwidth}
          coupon={coupon}
          setCoupon={setCoupon}
          className="mt-4"
        />
      </div>

      <div className="col-span-3">
        <OrderSummaryCard
          selectedPlan={plan}
          price={price}
          pricePerGb={Number(plan?.plans?.[0].price) ?? 2}
          bandwidth={bandwidth}
          coupon={coupon}
        />
      </div>
    </div>
  );
};
export default ResidentialControl;
