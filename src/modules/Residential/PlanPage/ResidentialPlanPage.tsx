"use client";

import ResidentialImage from "@public/icons/residential.svg";
import CheckIcon from "@public/icons/blue-check.svg";
import ResidentialCards from "@/modules/Residential/PlanPage/ResidentialCards";
import PreviousPlansCard from "@/modules/Residential/PlanPage/PreviousPlansCard";
import FirstView from "@/modules/Residential/PlanPage/FirstView";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import cn from "@/utils/cn";

import PlanImage from "@public/icons/plans.svg";
import ArrowIcon from "@public/icons/arrow-small-left.svg";
import Image from "next/image";
import AnimatedTab from "@/components/AnimatedTab/AnimatedTab";

const tabs = [
  {
    icon: PlanImage,
    title: "New Purchase",
    key: "new",
    content: (
      <FirstView
        numberColor="bg-blue-100"
        color="bg-blue-100/15"
        desc="Create a fresh new plan, or top up your previous plans from below (without extending their expiry dates)."
        title="Residential Proxy"
        className="my-8"
        image={ResidentialImage}
        checkIcon={CheckIcon}
        resiCards={<ResidentialCards />}
      />
    ),
  },
  {
    icon: ArrowIcon,
    title: "Previous Plan",
    key: "previous",
    content: <PreviousPlansCard />,
  },
];

const ResidentialPlanPage = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeTab = params.get("tab") || tabs[0].key;

  const handleTabClick = (tabKey: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("tab", tabKey);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <div className="mt-6">
      <div className="bg-darkmode-200 rounded p-2 w-full md:w-fit grid grid-cols-2 gap-2.5">
        {tabs.map((item) => (
          <AnimatedTab
            className="flex items-center gap-1"
            key={item.key}
            isActive={activeTab === item.key}
            onClick={() => handleTabClick(item.key)}
          >
            <Image src={item.icon} alt="" />
            {item.title}
          </AnimatedTab>
        ))}
      </div>

      <div className="mt-5">
        {tabs.find((t) => t.key === activeTab)?.content}
      </div>
    </div>
  );
};
export default ResidentialPlanPage;
