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
import { usePathname, useSearchParams } from "next/navigation";
import PreviousPlanCard from "./PreviousPlanCard";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import { getResiPackages } from "@/service/api";

const PurchaseNewPlan = ({ className }: { className?: string }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);
  const [coupon, setCoupon] = useState("");
  const [couponData, setCouponData] = useState<{
    total_price: string;
    discount: number;
  } | null>(null);
  const [qty, setQty] = useState<number | null>(null);
  const [bannerVisibility, setBannerVisibility] = useState(true);
  const [customAppliedQty, setCustomAppliedQty] = useState<number | null>(null);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const params = useSearchParams();
  const pool = params.get("pool");

  const { data: packages } = useQuery({
    queryKey: [...QUERY_KEYS.RESI_PACKAGES, pool],
    queryFn: () => getResiPackages(pool as string),
    enabled: !!pool,
  });

  const plans = (packages ?? []).map((pkg: any, idx: number) => ({
    id: idx + 1,
    gb: pkg.start,
    perPrice: parseFloat(pkg.price),
    total: parseFloat(pkg.price) * pkg.start,
    discount: pkg.discount,
    recommend: pkg.discount === 10,
  }));

  const pathname = usePathname();
  const selectedPlan =
    plans.find((plan: any) => plan.id === selectedPlanId) ?? null;

  const handleSelectPlan = (id: number) => {
    setSelectedPlanId(id);
    setCoupon("");
    setCouponData(null);
    setCustomAppliedQty(null);
    setEstimatedPrice(null);
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
          {pathname === "/purchase/new" ? (
            <>
              <div>
                <div className="grid grid-cols-2 1665:grid-cols-3 gap-4">
                  {plans?.map((plan: any) => (
                    <ResidentialPlan
                      key={plan.id}
                      id={plan.id}
                      gb={plan.gb}
                      perPrice={plan.perPrice}
                      total={plan.total}
                      discount={plan.discount}
                      recommend={plan.recommend}
                      isSelected={selectedPlanId === plan.id}
                      onSelect={handleSelectPlan}
                    />
                  ))}
                </div>
              </div>

              <CustomAmountCard
                coupon={coupon}
                pool={pool as string}
                selectedPlanGb={selectedPlan?.gb}
                quantity={qty}
                setQuantity={setQty}
                onApply={(appliedQty, price) => {
                  setCustomAppliedQty(appliedQty);
                  setEstimatedPrice(price);
                  setSelectedPlanId(null);
                }}
                className="mt-8"
              />
            </>
          ) : (
            <PreviousPlanCard />
          )}
        </div>
        <div className="xl:col-span-3">
          <CouponCard
            coupon={coupon}
            setCoupon={setCoupon}
            amount={customAppliedQty ?? selectedPlan?.gb}
            setCouponData={setCouponData}
          />
          <CustomPlanCard className="mt-4" />
          <OrderSummaryCard
            coupon={coupon}
            quantity={customAppliedQty ?? selectedPlan?.gb}
            couponData={couponData}
            residentialPlan={selectedPlan}
            className="mt-4"
          />
        </div>
      </div>
    </>
  );
};
export default PurchaseNewPlan;
