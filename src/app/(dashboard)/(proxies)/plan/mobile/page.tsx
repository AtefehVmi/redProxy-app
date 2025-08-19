import MobileControl from "@/modules/Mobile/MobileControl";

const PlanPage = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-col items-start gap-1.5">
        <p className="text-lg md:text-xl font-semibold text-white">
          New Mobile Configuration
        </p>
        <p className="text-xs md:text-sm font-medium text-nav-sub-menu-heading-text">
          Configure your new proxy settings
        </p>
      </div>

      <MobileControl className="my-8" />
    </div>
  );
};
export default PlanPage;
