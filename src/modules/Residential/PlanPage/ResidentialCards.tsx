"use client";

import ScrapingIcon from "@public/icons/globe.svg";
import GamingIcon from "@public/icons/gamepad.svg";
import GenericIcon from "@public/icons/plans.svg";
import ResidentialCard from "./ResidentialCard";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import { getPoolTypes } from "@/service/api";

const ICON_MAP: Record<string, any> = {
  Scarping: ScrapingIcon,
  Gaming: GamingIcon,
  Generic: GenericIcon,
};

const ResidentialCards = () => {
  const { data } = useQuery({
    queryKey: QUERY_KEYS.POOL_TYPES,
    queryFn: () => getPoolTypes(),
  });

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {data?.map((pool: any) => (
        <ResidentialCard
          key={pool.name}
          start_price={12}
          icon={ICON_MAP[pool.name] || GenericIcon}
          name={pool.name}
          features={[
            pool.description,
            "Pay-as-you-go or monthly plans",
            "Global IP pool",
            "Expiration Date : 13/Jun/2025",
          ]}
        />
      ))}
    </div>
  );
};
export default ResidentialCards;
