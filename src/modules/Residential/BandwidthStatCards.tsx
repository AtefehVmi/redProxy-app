import cn from "@/utils/cn";
import React from "react";

type Props = {
  netNut: string;
  ipRoyal: string;
  oxyLabs: string;
  total_gb: string;
  className: string;
};

const BandwidthStatCards: React.FC<Props> = ({
  netNut,
  ipRoyal,
  oxyLabs,
  total_gb,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-lg bg-darkmode-200 p-6 relative overflow-hidden",
        className
      )}
    >
      <div className="bg-blue-100/30 opacity-45 h-[435px] w-[548px] absolute -top-[370px] -right-[319px] rounded-full blur-3xl"></div>
      <div className="flex items-center justify-between">
        <p className="text-white text-base">Bandwidth</p>
        <p className="text-white font-bold text-24px">{total_gb}GB</p>
      </div>

      <div className="flex items-center gap-4 mt-[70px]">
        <p className="text-white text-sm">{netNut}Gb Netnut</p>
        <div className="bg-grey-400/20 w-px h-3"></div>
        <p className="text-white text-sm">{ipRoyal}Gb IP Royal</p>
        <div className="bg-grey-400/20 w-px h-3"></div>
        <p className="text-white text-sm">{oxyLabs}Gb OxyLabs</p>
      </div>
    </div>
  );
};
export default BandwidthStatCards;
