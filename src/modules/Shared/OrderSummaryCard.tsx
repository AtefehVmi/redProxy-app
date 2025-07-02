import Button from "@/components/Button/Button";
import React from "react";

type Props = {
  coupon: string;
  bandwidth: number;
  price: number;
  pricePerGb: number;
};

const OrderSummaryCard: React.FC<Props> = ({
  bandwidth,
  coupon,
  price,
  pricePerGb,
}) => {
  return (
    <div className="bg-darkmode-200 border border-darkmode-100 rounded p-8">
      <p className="text-white font-bold text-xl">Order Summary</p>

      <div className="mt-8 bg-darkmode-300 rounded-lg p-[18px]">
        <div className="flex items-center justify-between">
          <p className="text-sm text-grey-500">Price</p>
          <p className="text-base text-white font-semibold">
            ${price.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2.5">
          <p className="text-sm text-grey-500">Bandwidth</p>
          <p className="text-base text-white font-semibold">{bandwidth} GB</p>
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
            ${pricePerGb.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center justify-between mt-5">
          <p className="text-sm text-grey-500">Total</p>
          <p className="text-base text-white font-semibold">$4.00</p>
        </div>
      </div>

      <Button className="mt-6 text-base font-semibold py-4 w-full">
        Purchase
      </Button>
    </div>
  );
};
export default OrderSummaryCard;
