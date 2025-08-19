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
import { usePathname } from "next/navigation";
import PreviousPlanCard from "./PreviousPlanCard";

const plans = [
  { id: 1, gb: 1, perPrice: 2, total: 12, discount: 5 },
  { id: 2, gb: 2, perPrice: 2, total: 12, discount: 5 },
  { id: 3, gb: 3, perPrice: 2, total: 12, discount: 5 },
  { id: 4, gb: 5, perPrice: 2, total: 12, discount: 20, recommend: true },
  { id: 5, gb: 10, perPrice: 2, total: 12, discount: 20, recommend: true },
  { id: 6, gb: 20, perPrice: 2, total: 12, discount: 5 },
  { id: 7, gb: 50, perPrice: 2, total: 12, discount: 5 },
  { id: 8, gb: 100, perPrice: 2, total: 12, discount: 5 },
];

const PurchaseNewPlan = ({ className }: { className?: string }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(
    plans[0].id
  );
  const [coupon, setCoupon] = useState("");
  const [qty, setQty] = useState<number | null>(null);
  const [bannerVisibility, setBannerVisibility] = useState(true);
  const [customAppliedQty, setCustomAppliedQty] = useState<number | null>(null);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const pathname = usePathname();
  const selectedPlan =
    plans.find((plan) => plan.id === selectedPlanId) ?? plans[0];

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
          {pathname === "/purchase/new" ? (
            <>
              <div>
                <div className="grid md:grid-cols-3 gap-4">
                  {plans.slice(0, 3).map((plan) => (
                    <ResidentialPlan
                      key={plan.id}
                      id={plan.id}
                      gb={plan.gb}
                      perPrice={plan.perPrice}
                      total={plan.total}
                      discount={plan.discount}
                      isSelected={selectedPlanId === plan.id}
                      onSelect={handleSelectPlan}
                    />
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {plans.slice(3, 5).map((plan) => (
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

                <div className="grid md:grid-cols-3 mt-6 gap-4">
                  {plans.slice(5).map((plan) => (
                    <ResidentialPlan
                      key={plan.id}
                      id={plan.id}
                      gb={plan.gb}
                      perPrice={plan.perPrice}
                      total={plan.total}
                      discount={plan.discount}
                      isSelected={selectedPlanId === plan.id}
                      onSelect={handleSelectPlan}
                    />
                  ))}
                </div>
              </div>

              <CustomAmountCard
                selectedPlanGb={selectedPlan.gb}
                quantity={qty}
                setQuantity={setQty}
                onApply={() => {
                  setCustomAppliedQty(qty ?? selectedPlan.gb);
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
            residentialDiscount={true}
            amount={customAppliedQty ?? selectedPlan.gb}
            coupon={coupon}
            setCoupon={setCoupon}
            setEstimatedPrice={setEstimatedPrice}
          />
          <CustomPlanCard className="mt-4" />
          <OrderSummaryCard
            quantity={customAppliedQty ?? selectedPlan.gb}
            price={estimatedPrice ?? 4.0}
            residentialPlan={selectedPlan}
            className="mt-4"
          />
        </div>
      </div>
    </>
  );
};
export default PurchaseNewPlan;
