"use client";

import Button from "@/components/Button/Button";
import InputText from "@/components/Input/Input";
import Loader from "@/components/Loader/Loader";
import useFetch from "@/hooks/UseFetch";
import { estimatePrice, estimateResi } from "@/service/api";
import CouponIcon from "@public/icons/coupon.svg";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

type Props = {
  coupon: string;
  setCoupon: (coupon: string) => void;
  amount?: number;
  residentialDiscount?: boolean;
  selectedPlanId?: number;
  setEstimatedPrice: (price: number) => void;
};

const CouponCard = ({
  coupon,
  setCoupon,
  amount,
  residentialDiscount = false,
  selectedPlanId,
  setEstimatedPrice,
}: Props) => {
  const [inputValue, setInputValue] = useState(coupon ?? "");
  const params = useSearchParams();
  const pool = params.get("pool");

  const { fetch: estimateFetch, loading: estimateLoading } = useFetch(
    estimatePrice,
    false,
    {
      toastOnError: true,
    }
  );

  const { fetch: estimateResiFetch, loading: estimateResiLoading } = useFetch(
    estimateResi,
    false,
    {
      toastOnError: true,
    }
  );

  const handleCouponCheckClick = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    try {
      let result;
      if (residentialDiscount) {
        if (!pool) return;
        result = await estimateResiFetch(pool, {
          quantity: amount ?? 1,
          coupon: inputValue,
        });
      } else {
        if (!selectedPlanId) return;
        result = await estimateFetch({
          plan: selectedPlanId,
          quantity: amount ?? 1,
          coupon: inputValue,
        });
      }

      if (result?.price != null) {
        setEstimatedPrice(result.price);
      }
      setCoupon(inputValue);
    } catch {
      setCoupon("");
      setInputValue("");
      setEstimatedPrice(0);
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
          disabled={estimateResiLoading}
          type="submit"
          className="w-full text-base py-3"
        >
          {estimateResiLoading ? (
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
