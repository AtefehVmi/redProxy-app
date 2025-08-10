"use client";

import InputText from "@/components/Input/Input";
import cn from "@/utils/cn";
import Image from "next/image";
import CouponIcon from "@public/icons/coupon.svg";
import Button from "@/components/Button/Button";
import React, { useState } from "react";
import useFetch from "@/hooks/UseFetch";
import { calculateDiscount } from "@/service/api";
import Loader from "@/components/Loader/Loader";

type Props = {
  className?: string;
  coupon: string;
  setCoupon: (coupon: string) => void;
  amount?: number;
};

const CouponCard: React.FC<Props> = ({
  className,
  coupon,
  setCoupon,
  amount,
}) => {
  const [inputValue, setInputValue] = useState(coupon ?? "");
  const {
    fetch: discountFetch,
    loading: discountLoading,
    data: discountData,
  } = useFetch(calculateDiscount, false, { toastOnError: true });

  const handleCouponCheckClick = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault();

      if (!inputValue.trim()) return;

      await discountFetch(inputValue, amount ?? 1);
      setCoupon(inputValue);
    } catch {
      setCoupon("");
      setInputValue("");
    }
  };

  return (
    <div
      className={cn(
        className,
        "bg-darkmode-200 border border-darkmode-100 rounded p-6 md:p-8"
      )}
    >
      <p className="text-white font-bold text-xl">Coupon Code</p>

      <form
        className="flex flex-col md:flex-row md:items-end gap-4 mt-8"
        onSubmit={handleCouponCheckClick}
      >
        <InputText
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="md:w-5/6"
          startAdornment={
            <Image src={CouponIcon} alt="coupon" width={18} height={18} />
          }
          key={"coupon"}
          label={"Coupon Code *"}
          placeholder={"Enter Code"}
        />
        <Button
          disabled={discountLoading}
          type="submit"
          className="px-2 py-2.5 text-base md:w-1/6"
        >
          {discountLoading ? (
            <>
              Continue <Loader />
            </>
          ) : (
            "Continue"
          )}
        </Button>
      </form>
    </div>
  );
};

export default CouponCard;
