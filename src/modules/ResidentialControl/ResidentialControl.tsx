import cn from "@/utils/cn";
import CouponCard from "../Shared/CouponCard";
import OrderSummaryCard from "../Shared/OrderSummaryCard";
import CustomPlan from "./CustomPlan";

const ResidentialControl = ({ className }: { className?: string }) => {
  return (
    <div className={cn("grid grid-cols-11 gap-4", className)}>
      <div className="col-span-8">
        <CustomPlan />
        <CouponCard className="mt-4" />
      </div>

      <div className="col-span-3">
        <OrderSummaryCard />
      </div>
    </div>
  );
};
export default ResidentialControl;
