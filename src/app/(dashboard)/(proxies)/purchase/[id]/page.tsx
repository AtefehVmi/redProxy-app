import PurchaseNewPlan from "@/modules/Residential/PurchasePage/PurchaseNewPlan";

const PurchasePreviousPage = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-col items-start gap-1.5">
        <p className="text-xl font-semibold text-white">Purchase a new plan</p>
        <p className="text-sm font-medium text-nav-sub-menu-heading-text">
          Buy GB more to get more discount
        </p>
      </div>

      <PurchaseNewPlan className="mt-8" />
    </div>
  );
};
export default PurchasePreviousPage;
