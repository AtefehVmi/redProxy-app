import InputText from "@/components/Input/Input";
import CouponIcon from "@public/icons/coupon.svg";
import Image from "next/image";

const CouponCard = () => {
  return (
    <div className="px-6 pt-6 pb-8 border border-darkmode-100 bg-darkmode-200 rounded">
      <p className="text-base text-white font-bold">Coupon Code</p>

      <InputText
        className="mt-6"
        label="Coupon Code *"
        placeholder="Enter Coupon code"
        startAdornment={<Image src={CouponIcon} alt="" />}
      />
    </div>
  );
};
export default CouponCard;
