"use client";

import Button from "@/components/Button/Button";
import InputText from "@/components/Input/Input";
import Loader from "@/components/Loader/Loader";
import useFetch from "@/hooks/UseFetch";
import { calculateDiscount } from "@/service/api";
import CouponIcon from "@public/icons/coupon.svg";
import Image from "next/image";
import { useState } from "react";

type Props = {
  coupon: string;
  setCoupon: (coupon: string) => void;
  amount?: number;
};

const CouponCard = ({ coupon, setCoupon, amount }: Props) => {
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
    <div className="px-6 pt-6 pb-8 border border-darkmode-100 bg-darkmode-200 rounded">
      <p className="text-base text-white font-bold">Coupon Code</p>

      <form
        onSubmit={handleCouponCheckClick}
        className="flex flex-col gap-4 mt-6 w-full"
      >
        <InputText
          key={"coupon"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full"
          label="Coupon Code *"
          placeholder="Enter Coupon code"
          startAdornment={<Image src={CouponIcon} alt="" />}
        />
        <Button
          disabled={discountLoading}
          type="submit"
          className="w-full text-base py-3"
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
