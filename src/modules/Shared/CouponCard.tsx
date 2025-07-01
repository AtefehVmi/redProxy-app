import InputText from "@/components/Input/Input";
import cn from "@/utils/cn";
import Image from "next/image";
import CouponIcon from "@public/icons/coupon.svg";
import Button from "@/components/Button/Button";

const CouponCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        className,
        "bg-darkmode-200 border border-darkmode-100 rounded p-8"
      )}
    >
      <p className="text-white font-bold text-xl">Coupon Code</p>

      <form className="flex items-end gap-4">
        <InputText
          className="col-span-1 mt-8 w-5/6"
          startAdornment={
            <Image src={CouponIcon} alt="" width={18} height={18} />
          }
          key={"coupon"}
          label={"Coupon Code *"}
          placeholder={"Enter Code"}
        />
        <Button className="px-2 py-4 text-base w-1/6">Continue</Button>
      </form>
    </div>
  );
};
export default CouponCard;
