"use client";

import Button from "@/components/Button/Button";
import PaymentRadioGroup from "@/components/PaymentRadioGroup/PaymentRadioGroup";
import { QUERY_KEYS } from "@/constants/querykeys";
import { PAYMENT_METHODS } from "@/constants/variables";
import useFetch from "@/hooks/UseFetch";
import {
  estimatePrice,
  estimateResi,
  purchaseProxy,
  purchaseResi,
} from "@/service/api";
import cn from "@/utils/cn";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import CryptoIcon from "@public/icons/crypto.svg";
import CartIcon from "@public/icons/cart.svg";
import NotEnoughBalanceModal from "@/components/Modal/NotEnoughBalanceModal";
import TopUpBalanceModal from "@/components/Modal/TopUpBalanceModal";

type Props = {
  coupon?: string;
  couponData?: { total_price: string; discount: number } | null;
  residentialPlan?: {
    id: number;
    gb: number;
    perPrice: number;
    total: number;
    discount?: number;
    recommend?: boolean;
  };
  quantity?: number;
  price?: number;
  pricePerGb?: number;
  plan?: { price: number; name: string };
  selectedPlan?: any;
  className?: string;
  location?: string;
};

const paymentOptions = [
  { label: "Balance", value: PAYMENT_METHODS.BALANCE, icon: CartIcon },
  { label: "Crypto", value: PAYMENT_METHODS.CRYPTO, icon: CryptoIcon },
];
const OrderSummaryCard: React.FC<Props> = ({
  residentialPlan,
  coupon,
  price,
  quantity,
  plan,
  selectedPlan,
  className,
  location,
  couponData,
}) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [selectedPayment, setSelectedPayment] = useState(0);
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  const [totalPrice, setTotalPrice] = useState<number>(
    residentialPlan?.total ?? plan?.price ?? 0
  );
  const [discount, setDiscount] = useState<number>(couponData?.discount ?? 0);

  const params = useSearchParams();
  const pool = params.get("pool");

  const balance = 0;

  const { fetch: purchaseResiFetch, loading: resiLoading } = useFetch(
    purchaseResi,
    false,
    { toastOnError: true }
  );

  const { fetch: purchaseProxyFetch, loading: proxyLoading } = useFetch(
    purchaseProxy,
    false,
    { toastOnError: true }
  );

  useEffect(() => {
    if (couponData) {
      setTotalPrice(parseFloat(couponData.total_price));
      setDiscount(couponData.discount);
    } else if (residentialPlan) {
      setTotalPrice(residentialPlan.total);
      setDiscount(residentialPlan.discount ?? 0);
    } else if (plan) {
      setTotalPrice(plan.price);
      setDiscount(0);
    }
  }, [couponData, residentialPlan, plan, quantity]);

  const handlePurchase = () => {
    if (balance >= 1) {
      setOpenFirst(true);
      return;
    }

    if (residentialPlan) {
      // Residential plan purchase
      purchaseResiFetch(
        pool,
        quantity,
        selectedPayment,
        coupon,
        "Bandwidth"
      ).then((resp) => {
        if (selectedPayment === PAYMENT_METHODS.CRYPTO) {
          toast.success("You'll be redirected soon...");
          return router.push(resp.url);
        }
        toast.success("Purchased Successfully!");
        queryClient.invalidateQueries({ queryKey: ["refreshable"] });
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.PROFILE });
        router.refresh();
      });
    } else {
      // other proxies purchase
      purchaseProxyFetch(
        plan, // name
        selectedPayment, // method
        quantity, // quantity
        location ?? "", // location
        location ?? "", // location_name
        selectedPlan?.port, // port
        coupon, // coupon (optional)
        selectedPlan?.planId // plan (optional)
      ).then((resp) => {
        if (selectedPayment === PAYMENT_METHODS.CRYPTO) {
          toast.success("You'll be redirected soon...");
          return router.push(resp.url);
        }
        toast.success("Purchased Successfully!");
        queryClient.invalidateQueries({ queryKey: ["refreshable"] });
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.PROFILE });
        router.refresh();
      });
    }
  };

  const handleTopUpClick = () => {
    setOpenFirst(false);
    setOpenSecond(true);
  };

  return (
    <div
      className={cn(
        "bg-darkmode-200 border border-darkmode-100 rounded p-6 md:p-8",
        className
      )}
    >
      <p className="text-white font-bold text-lg md:text-xl">Order Summary</p>

      {residentialPlan && (
        <div className="mt-8 bg-darkmode-300 rounded-lg p-[18px]">
          <div className="flex items-center justify-between">
            <p className="text-sm text-grey-500">Price</p>
            <p className="text-base text-white font-semibold">
              ${residentialPlan.perPrice.toFixed(2)}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-grey-500">Plan</p>
            <p className="text-base text-white font-semibold">{quantity}GB</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-grey-500">Pool</p>
            <p className="text-base text-white font-semibold">{pool}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-grey-500">Expiration Date</p>
            <p className="text-base text-white font-semibold">13/Dec/2024</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-grey-500">Sale</p>
            <p className="text-base text-orange-200 font-semibold">
              {residentialPlan.discount ?? 0}%
            </p>
          </div>

          {couponData && (
            <div className="flex items-center justify-between mt-2.5">
              <p className="text-sm text-grey-500">Coupon</p>
              <p className="text-base text-orange-200 font-semibold">
                {couponData?.discount}%
              </p>
            </div>
          )}

          <div className="flex items-center justify-between mt-5 pt-5 border-t border-dashed border-darkmode-100">
            <p className="text-sm text-grey-500">Total</p>
            <p className="text-base text-white font-semibold">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {!residentialPlan && plan && (
        <div className="mt-8 bg-darkmode-300 rounded-lg p-[18px]">
          <div className="flex items-center justify-between">
            <p className="text-sm text-grey-500">Price</p>
            <p className="text-base text-white font-semibold">
              ${plan?.price.toFixed(2)}
            </p>
          </div>

          <div className="flex items-center justify-between mt-2.5">
            <p className="text-sm text-grey-500">Plan</p>
            <p className="text-base text-white font-semibold">{plan?.name}</p>
          </div>

          <div className="flex items-center justify-between mt-2.5">
            <p className="text-sm text-grey-500">Location</p>
            <p className="text-base text-white font-semibold">{location}</p>
          </div>

          <div className="flex items-center justify-between mt-2.5">
            <p className="text-sm text-grey-500">Quantity</p>
            <p className="text-base text-white font-semibold">{quantity}</p>
          </div>

          <div className="flex items-center justify-between mt-2.5">
            <p className="text-sm text-grey-500">Sale</p>
            <p className="text-base text-orange-200 font-semibold">
              {discount}%
            </p>
          </div>

          <div className="flex items-center justify-between mt-5 pt-5 border-t border-dashed border-darkmode-100">
            <p className="text-sm text-grey-500">Total</p>
            <p className="text-base text-white font-semibold">
              ${price?.toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {!residentialPlan && !plan && (
        <div className="mt-8 bg-darkmode-300 rounded-lg p-[18px] h-80">
          <p className="text-sm text-grey-500 text-center">
            Please select a plan first
          </p>
        </div>
      )}

      {(plan || residentialPlan) && (
        <>
          <PaymentRadioGroup
            options={paymentOptions}
            selected={selectedPayment}
            onChange={setSelectedPayment}
          />
          <Button
            disabled={resiLoading}
            onClick={handlePurchase}
            className="mt-6 text-base font-semibold w-full"
          >
            {resiLoading ? "Purchasing..." : "Purchase"}
          </Button>
        </>
      )}

      {openFirst && (
        <NotEnoughBalanceModal
          open={openFirst}
          onClose={() => setOpenFirst(false)}
          onTopUp={handleTopUpClick}
        />
      )}
      {openSecond && (
        <TopUpBalanceModal
          open={openSecond}
          onClose={() => setOpenSecond(false)}
        />
      )}
    </div>
  );
};
export default OrderSummaryCard;
