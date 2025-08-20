"use client";

import { useQuery } from "@tanstack/react-query";
import AddBandwidthCard from "./AddBandwidthCard";
import CreateResidentialConfig from "./CreateResidentialConfig";
import PurchaseHistory from "./PurchaseHistory";
import ResiDetailCard from "./ResiDetailCard";
import { QUERY_KEYS } from "@/constants/querykeys";
import { getPlanById } from "@/service/api";

const ResidentialConfig = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-9 mt-[30px] gap-4">
      <CreateResidentialConfig className="lg:col-span-6" />

      <div className="lg:col-span-3">
        <AddBandwidthCard />
        <ResiDetailCard />
        <PurchaseHistory className="mt-4" />
      </div>
    </div>
  );
};
export default ResidentialConfig;
