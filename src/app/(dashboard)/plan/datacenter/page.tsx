import DatacenterControl from "@/modules/DatacenterControl/DatacenterControl";

const PlanPage = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-col items-start gap-1.5">
        <p className="text-xl font-semibold text-white">
          New Datacenter Configuration
        </p>
        <p className="text-sm font-medium text-nav-sub-menu-heading-text">
          Configure your new proxy settings
        </p>
      </div>

      <DatacenterControl className="my-8" />
    </div>
  );
};
export default PlanPage;
