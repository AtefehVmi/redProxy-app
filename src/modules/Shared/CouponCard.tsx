"use client";

import Button from "@/components/Button/Button";
import InputText from "@/components/Input/Input";
import Loader from "@/components/Loader/Loader";
import { QUERY_KEYS } from "@/constants/querykeys";
import useFetch from "@/hooks/UseFetch";
import { calculateDiscount, estimatePrice, estimateResi } from "@/service/api";
import CouponIcon from "@public/icons/coupon.svg";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

type Props = {
  setCouponData: (
    data: { total_price: string; discount: number } | null
  ) => void;
  amount?: number;
  coupon: string;
  setCoupon: (coupon: string) => void;
};

const CouponCard = ({ amount, setCouponData, coupon, setCoupon }: Props) => {
  const [inputValue, setInputValue] = useState(coupon ?? "");

  const { fetch: discountFetch, loading: discountLoading } = useFetch(
    calculateDiscount,
    false,
    {
      toastOnError: true,
    }
  );

  const handleApplyCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    try {
      const data = await discountFetch(inputValue, amount ?? 1);
      setCoupon(inputValue);
      toast.success("Coupon applied successfully!");
      setCouponData(data);
      console.log(data);
    } catch (err) {
      setCouponData(null);
      setCoupon("");
    }
  };

  return (
    <div className="px-6 pt-6 pb-8 border border-darkmode-100 bg-darkmode-200 rounded">
      <p className="text-base text-white font-bold">Coupon Code</p>

      <form
        onSubmit={handleApplyCoupon}
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
