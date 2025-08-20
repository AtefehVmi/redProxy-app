"use client";

import cn from "@/utils/cn";
import PlanIcon from "@public/icons/plans.svg";
import Image from "next/image";
import TagIcon from "@public/icons/tag.svg";
import CalendarIcon from "@public/icons/calendar.svg";
import GlobeIcon from "@public/icons/globe-big.svg";
import InputText from "@/components/Input/Input";
import LayersIcon from "@public/icons/layer-grey.svg";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import { getPlanById } from "@/service/api";
import { usePathname } from "next/navigation";
import { formatDate } from "@/utils/formatDate";
import { useState } from "react";

const PreviousPlanCard = () => {
  const pathname = usePathname();
  const planId = pathname.split("/").pop();

  const [bandwidth, setBandwidth] = useState<number>(1);

  const { data: plan } = useQuery({
    queryKey: [...QUERY_KEYS.USER_PLAN, planId],
    queryFn: () => getPlanById(planId as string),
    enabled: !!planId,
  });

  const recommend = true;

  const data = [
    {
      planData: formatDate(plan?.created ?? ""),
      icon: CalendarIcon,
      title: "Purchase Date",
    },
    {
      planData: formatDate(plan?.expiration ?? ""),
      icon: CalendarIcon,
      title: "Expiration Date",
    },
    { planData: plan?.available_gb, icon: GlobeIcon, title: "Remaining GB" },
  ];

  return (
    <div className="border border-darkmode-100 bg-darkmode-200 roudned p-8">
      <p className="text-white text-xl font-bold">Previous Plan</p>

      <div
        className={cn("mt-8 bg-darkmode-300 rounded-lg border-gradient p-4")}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-fit md:w-full">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 rounded-lg">
              <Image src={PlanIcon} alt="" className="m-[9px] h-6 w-6" />
            </div>
            <div>
              <p className="text-white font-semibold text-base">
                {plan?.pool_type?.name}
              </p>
              <p className="text-grey-400 text-xs">
                {plan?.pool_type.description}
              </p>
            </div>
          </div>
          <div
            className={cn(
              "border border-orange-200 px-3 py-1.5 rounded-full w-fit mt-4 md:mt-0"
            )}
          >
            {recommend ? (
              <div className="flex items-center gap-1">
                <Image src={TagIcon} alt="" />
                <p className="text-orange-200 font-medium text-[10px] leading-4">
                  Recommended - {20}%
                </p>
              </div>
            ) : (
              <p className="text-orange-200 text-[10px]">{20}%</p>
            )}
          </div>
        </div>

        <div
          className={cn(
            "mt-6 grid grid-cols-1 2xl:grid-cols-3 gap-2",
            "*:border *:border-darkmode-100 *:rounded *:py-2 *:px-3"
          )}
        >
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Image src={item.icon} alt="" />
                <p className="text-grey-400 text-sm whitespace-nowrap">
                  {item.title}
                </p>
              </div>

              <p className="text-grey-50 text-sm font-semibold whitespace-nowrap">
                {item.planData}
              </p>
            </div>
          ))}
        </div>

        <InputText
          type="number"
          value={bandwidth}
          onChange={(e) => setBandwidth(Number(e.target.value))}
          className="mt-6"
          startAdornment={<Image src={LayersIcon} alt="" />}
          placeholder="Enter Bandwidth *"
          label="Bandwidth"
        />
      </div>
    </div>
  );
};
export default PreviousPlanCard;
