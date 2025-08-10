import Button from "@/components/Button/Button";
import InputText from "@/components/Input/Input";
import cn from "@/utils/cn";
import LayerIcon from "@public/icons/layer-grey.svg";
import Image from "next/image";

const CustomAmountCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "border border-darkmode-100 bg-darkmode-200 rounded p-8",
        className
      )}
    >
      <p className="text-white font-semibold text-base">Custom Amount</p>

      <div className="flex flex-col md:flex-row md:items-end gap-4 mt-6 w-full">
        <InputText
          startAdornment={<Image src={LayerIcon} alt="" />}
          label="Bandwidth *"
          placeholder="Enter Bandwidth"
          className="w-full md:w-4/5"
        />
        <Button className="w-full md:w-1/5 text-base py-3">Continue</Button>
      </div>
    </div>
  );
};
export default CustomAmountCard;
