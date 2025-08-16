"use client";

import ScrapingIcon from "@public/icons/globe.svg";
import GamingIcon from "@public/icons/gamepad.svg";
import GenericIcon from "@public/icons/plans.svg";
import ResidentialCard from "./ResidentialCard";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import { getPoolTypes } from "@/service/api";

const ResidentialCards = () => {
  const { data } = useQuery({
    queryKey: QUERY_KEYS.POOL_TYPES,
    queryFn: () => getPoolTypes(),
  });

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      <ResidentialCard
        start_price={12}
        icon={ScrapingIcon}
        name="Scraping"
        features={[
          "Pay-as-you-go or monthly plans",
          "Global IP pool",
          "Great for sneaker copping and web scraping",
          "Expiration Date : 13/Jun/2025",
        ]}
      />

      <ResidentialCard
        start_price={12}
        icon={GamingIcon}
        name="Gaming"
        features={[
          "Pay-as-you-go or monthly plans",
          "Global IP pool",
          "Great for sneaker copping and web scraping",
          "Expiration Date : 13/Jun/2025",
        ]}
      />

      <ResidentialCard
        start_price={12}
        icon={GenericIcon}
        name="Generic"
        features={[
          "Over 100M residential IPs",
          "Built for high-volume data collection",
          "Advanced features like session control",
          "Expiration Date : 13/Jun/2025",
        ]}
      />
    </div>
  );
};
export default ResidentialCards;
