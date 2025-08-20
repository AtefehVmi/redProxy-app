import InputText from "@/components/Input/Input";
import cn from "@/utils/cn";
import LayerIcon from "@public/icons/layer-grey.svg";
import Image from "next/image";

const CustomPlanCard = ({
  className,
  planName,
  setPlanName,
}: {
  className?: string;
  planName: string;
  setPlanName: (planName: string) => void;
}) => {
  return (
    <div
      className={cn(
        "border border-darkmode-100 bg-darkmode-200 rounded p-8",
        className
      )}
    >
      <p className="text-white font-semibold text-base">
        Custom Plan Name (Optional)
      </p>

      <InputText
        value={planName}
        onChange={(e) => setPlanName(e.target.value)}
        startAdornment={<Image src={LayerIcon} alt="" />}
        label="Plan name *"
        placeholder="Enter Plan name"
        className="mt-6"
      />
    </div>
  );
};
export default CustomPlanCard;
