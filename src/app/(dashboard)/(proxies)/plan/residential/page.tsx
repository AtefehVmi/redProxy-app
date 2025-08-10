import ResidentialFirstView from "@/modules/Residential/PlanPage/ResidentialFirstView";
import ResidentialImage from "@public/icons/residential.svg";
import CheckIcon from "@public/icons/blue-check.svg";
import ResidentialCards from "@/modules/Residential/PlanPage/ResidentialCards";
import PreviousPlansCard from "@/modules/Residential/PlanPage/PreviousPlansCard";

const PlanPage = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-col items-start gap-1.5">
        <p className="text-xl font-semibold text-white">Purchase a new plan</p>
        <p className="text-sm font-medium text-nav-sub-menu-heading-text">
          Or top up your previous plans
        </p>
      </div>

      <ResidentialFirstView
        numberColor="bg-blue-100"
        color="bg-blue-100/15"
        desc="Create a fresh new plan, or top up your previous plans from below (without extending their expiry dates)."
        title="Residential Proxy"
        className="my-8"
        image={ResidentialImage}
        checkIcon={CheckIcon}
        resiCards={<ResidentialCards />}
      />

      <PreviousPlansCard />
    </div>
  );
};
export default PlanPage;
