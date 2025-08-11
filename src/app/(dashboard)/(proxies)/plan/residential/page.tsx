import ResidentialPlanPage from "@/modules/Residential/PlanPage/ResidentialPlanPage";

const PlanPage = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-col items-start gap-1.5">
        <p className="text-xl font-semibold text-white">Purchase a new plan</p>
        <p className="text-sm font-medium text-nav-sub-menu-heading-text">
          Or top up your previous plans
        </p>
      </div>

      <ResidentialPlanPage />
    </div>
  );
};
export default PlanPage;
