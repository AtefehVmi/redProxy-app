import Button from "@/components/Button/Button";
import InputText from "@/components/Input/Input";
import CouponIcon from "@public/icons/coupon.svg";
import Image from "next/image";

const CouponCard = () => {
  return (
    <div className="px-6 pt-6 pb-8 border border-darkmode-100 bg-darkmode-200 rounded">
      <p className="text-base text-white font-bold">Coupon Code</p>

      <div className="flex flex-col gap-4 mt-6 w-full">
        <InputText
          className="mt-6 w-full"
          label="Coupon Code *"
          placeholder="Enter Coupon code"
          startAdornment={<Image src={CouponIcon} alt="" />}
        />
        <Button className="w-full text-base py-3">Continue</Button>
      </div>
    </div>
  );
};
export default CouponCard;
