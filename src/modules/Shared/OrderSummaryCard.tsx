"use client";

import Button from "@/components/Button/Button";
import PaymentRadioGroup from "@/components/PaymentRadioGroup/PaymentRadioGroup";
import { QUERY_KEYS } from "@/constants/querykeys";
import { PAYMENT_METHODS } from "@/constants/variables";
import useFetch from "@/hooks/UseFetch";
import {
  estimatePrice,
  estimateResi,
  getUserProfile,
  purchaseProxy,
  purchaseResi,
} from "@/service/api";
import cn from "@/utils/cn";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
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
  customPlan?: {
    total_price: string;
    coupon_discount: number;
    bulk_discount: number;
    unit_price: string;
  } | null;
  planName?: string;
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
  customPlan,
  planName,
}) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [selectedPayment, setSelectedPayment] = useState(0);
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  const params = useSearchParams();
  const pool = params.get("pool");

  const { data: user } = useQuery({
    queryKey: QUERY_KEYS.PROFILE,
    queryFn: () => getUserProfile(),
  });

  const balance = user?.balance;

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

  const totalPrice = useMemo(() => {
    if (customPlan) return parseFloat(customPlan.total_price);
    if (residentialPlan) return residentialPlan.total;
    if (plan) return price ?? plan.price;
    return 0;
  }, [customPlan, residentialPlan, plan, price]);

  const discount = couponData?.discount ?? 0;

  const discountedTotal = useMemo(() => {
    if (!customPlan) return 0;
    const baseTotal = parseFloat(customPlan.total_price);
    if (couponData?.discount) {
      return baseTotal * (1 - couponData.discount / 100);
    }
    return baseTotal;
  }, [customPlan, couponData]);

  const handlePurchase = () => {
    const cost = customPlan
      ? discountedTotal
      : residentialPlan
      ? totalPrice * (1 - discount / 100)
      : price ?? 0;

    if (!balance || Number(balance) < cost) {
      setOpenFirst(true);
      return;
    }

    if (customPlan || residentialPlan) {
      purchaseResiFetch(
        pool,
        quantity,
        selectedPayment,
        coupon ?? "",
        planName ?? ""
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

      <div className="mt-8">
        {customPlan ? (
          <div className="bg-darkmode-300 rounded-lg p-[18px]">
            <div className="flex items-center justify-between">
              <p className="text-sm text-grey-500">Price per GB</p>
              <p className="text-base text-white font-semibold">
                ${parseFloat(customPlan.unit_price).toFixed(2)}
              </p>
            </div>

            <div className="flex items-center justify-between mt-2.5">
              <p className="text-sm text-grey-500">Plan</p>
              <p className="text-base text-white font-semibold">{quantity}GB</p>
            </div>

            <div className="flex items-center justify-between mt-2.5">
              <p className="text-sm text-grey-500">Pool</p>
              <p className="text-base text-white font-semibold">{pool}</p>
            </div>

            <div className="flex items-center justify-between mt-2.5">
              <p className="text-sm text-grey-500">Bulk Discount</p>
              <p className="text-base text-orange-200 font-semibold">
                {customPlan.bulk_discount ?? 0}%
              </p>
            </div>

            {coupon && (
              <div className="flex items-center justify-between mt-2.5">
                <p className="text-sm text-grey-500">Coupon</p>
                <p className="text-base text-orange-200 font-semibold">
                  {discount ?? 0}%
                </p>
              </div>
            )}

            <div className="flex items-center justify-between mt-5 pt-5 border-t border-dashed border-darkmode-100">
              <p className="text-sm text-grey-500">Total</p>
              <p className="text-base text-white font-semibold">
                ${discountedTotal.toFixed(2)}
              </p>
            </div>
          </div>
        ) : residentialPlan ? (
          <div className="bg-darkmode-300 rounded-lg p-[18px]">
            <div className="flex items-center justify-between">
              <p className="text-sm text-grey-500">Price</p>
              <p className="text-base text-white font-semibold">
                ${residentialPlan.perPrice.toFixed(2)}
              </p>
            </div>

            <div className="flex items-center justify-between mt-2.5">
              <p className="text-sm text-grey-500">Plan</p>
              <p className="text-base text-white font-semibold">{quantity}GB</p>
            </div>

            <div className="flex items-center justify-between mt-2.5">
              <p className="text-sm text-grey-500">Pool</p>
              <p className="text-base text-white font-semibold">{pool}</p>
            </div>

            <div className="flex items-center justify-between mt-2.5">
              <p className="text-sm text-grey-500">Expiration Date</p>
              <p className="text-base text-white font-semibold">13/Dec/2024</p>
            </div>

            <div className="flex items-center justify-between mt-2.5">
              <p className="text-sm text-grey-500">Sale</p>
              <p className="text-base text-orange-200 font-semibold">
                {residentialPlan.discount ?? 0}%
              </p>
            </div>

            {couponData && (
              <div className="flex items-center justify-between mt-2.5">
                <p className="text-sm text-grey-500">Coupon</p>
                <p className="text-base text-orange-200 font-semibold">
                  {couponData?.discount ?? 0}%
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
        ) : plan ? (
          <div className="bg-darkmode-300 rounded-lg p-[18px]">
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
        ) : (
          <div className="bg-darkmode-300 rounded-lg p-[18px] h-80 flex items-center justify-center">
            <p className="text-sm text-grey-500 text-center">
              Please select a plan first
            </p>
          </div>
        )}
      </div>

      {(plan || residentialPlan || customPlan) && (
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
