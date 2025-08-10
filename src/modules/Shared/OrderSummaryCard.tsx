"use client";

import Button from "@/components/Button/Button";
import PaymentRadioGroup from "@/components/PaymentRadioGroup/PaymentRadioGroup";
import { QUERY_KEYS } from "@/constants/querykeys";
import { PAYMENT_METHODS } from "@/constants/variables";
import useFetch from "@/hooks/UseFetch";
import { purchaseRotatingProxy } from "@/service/api";
import cn from "@/utils/cn";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

import CryptoIcon from "@public/icons/crypto.svg";
import CartIcon from "@public/icons/cart.svg";

type Props = {
  coupon?: string;
  residentialPlan?: number;
  quantity?: number;
  price: number;
  pricePerGb?: number;
  plan?: string;
  selectedPlan?: any;
  className?: string;
};

const paymentOptions = [
  { label: "Balance", value: PAYMENT_METHODS.BALANCE, icon: CartIcon },
  { label: "Crypto", value: PAYMENT_METHODS.CRYPTO, icon: CryptoIcon },
];
const OrderSummaryCard: React.FC<Props> = ({
  residentialPlan,
  coupon,
  price,
  pricePerGb,
  quantity,
  plan,
  selectedPlan,
  className,
}) => {
  const [selectedPayment, setSelectedPayment] = useState(0);

  const { fetch: purchaseRotatingFetch, loading: rotatingFetch } = useFetch(
    purchaseRotatingProxy,
    false,
    { toastOnError: true }
  );

  const router = useRouter();
  const queryClient = useQueryClient();

  const handlePurchaseBandwidth = () => {
    purchaseRotatingFetch(
      "residential",
      residentialPlan,
      selectedPayment,
      coupon,
      "Bandwidth"
    ).then((resp) => {
      if (selectedPayment === PAYMENT_METHODS.CRYPTO) {
        toast.success("You'll be redirected soon...");
        return router.push(resp.url);
      }
      toast.success("Purchased Successfully!");
      // queryClient.invalidateQueries({
      //   queryKey: QUERY_KEYS.trafficDetails(pool),
      // });
      queryClient.invalidateQueries({
        queryKey: ["refreshable"],
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.PROFILE,
      });
      router.refresh();
    });
  };

  return (
    <div
      className={cn(
        "bg-darkmode-200 border border-darkmode-100 rounded p-6 md:p-8",
        className
      )}
    >
      <p className="text-white font-bold text-xl">Order Summary</p>

      {residentialPlan && (
        <div className="mt-8 bg-darkmode-300 rounded-lg p-[18px]">
          <div className="flex items-center justify-between">
            <p className="text-sm text-grey-500">Price</p>
            <p className="text-base text-white font-semibold">
              ${price.toFixed(2)}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-grey-500">Plan</p>
            <p className="text-base text-white font-semibold">{plan}GB</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-grey-500">Pool</p>
            <p className="text-base text-white font-semibold">Scraping</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-grey-500">Expiration Date</p>
            <p className="text-base text-white font-semibold">13/Dec/2024</p>
          </div>

          {coupon && (
            <div className="flex items-center justify-between mt-2.5">
              <p className="text-sm text-grey-500">Sale</p>
              <p className="text-base text-orange-200 font-semibold">20%</p>
            </div>
          )}

          <div className="flex items-center justify-between mt-5 pt-5 border-t border-dashed border-darkmode-100">
            <p className="text-sm text-grey-500">Total</p>
            <p className="text-base text-white font-semibold">
              ${price.toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {plan && (
        <div className="mt-8 bg-darkmode-300 rounded-lg p-[18px]">
          <div className="flex items-center justify-between">
            <p className="text-sm text-grey-500">Price</p>
            <p className="text-base text-white font-semibold">
              ${price.toFixed(2)}
            </p>
          </div>

          <div className="flex items-center justify-between mt-2.5">
            <p className="text-sm text-grey-500">Plan</p>
            <p className="text-base text-white font-semibold">{plan}</p>
          </div>

          <div className="flex items-center justify-between mt-2.5">
            <p className="text-sm text-grey-500">Quantity</p>
            <p className="text-base text-white font-semibold">{quantity}</p>
          </div>

          {coupon && (
            <div className="flex items-center justify-between mt-2.5">
              <p className="text-sm text-grey-500">Coupon</p>
              <p className="text-base text-orange-200 font-semibold">20%</p>
            </div>
          )}

          <div className="flex items-center justify-between mt-2.5 border-b-[1.5px] border-dashed border-darkmode-100 pb-5">
            <p className="text-sm text-grey-500">Price Per GB</p>
            <p className="text-base text-white font-semibold">
              ${pricePerGb?.toFixed(2)}
            </p>
          </div>

          <div className="flex items-center justify-between mt-5">
            <p className="text-sm text-grey-500">Total</p>
            <p className="text-base text-white font-semibold">$4.00</p>
          </div>
        </div>
      )}

      <PaymentRadioGroup
        options={paymentOptions}
        selected={selectedPayment}
        onChange={setSelectedPayment}
      />

      <Button
        disabled={rotatingFetch}
        onClick={handlePurchaseBandwidth}
        className="mt-6 text-base font-semibold w-full"
      >
        {rotatingFetch ? "Purchasing..." : "Purchase"}
      </Button>
    </div>
  );
};
export default OrderSummaryCard;
