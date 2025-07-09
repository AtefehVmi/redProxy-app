import Image, { StaticImageData } from "next/image";
import React from "react";
import CaretRightIcon from "@public/icons/caret-right.svg";

type Props = {
  icon: StaticImageData;
  name: string;
  features: string[];
  availGb: number;
  gb: number;
};

const ResidentialCard: React.FC<Props> = ({
  icon,
  name,
  features,
  availGb,
  gb,
}) => {
  return (
    <div className="bg-darkmode-300 rounded-xl p-6 z-10">
      <div className="flex items-center gap-2">
        <Image src={icon} alt="" />
        <p className="text-white text-lg font-semibold">{name}</p>
      </div>

      <div className="mt-[18px] flex flex-col gap-2.5">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Image src={CaretRightIcon} alt="" />
            <p className="text-base text-grey-300">{feature}</p>
          </div>
        ))}
      </div>

      <div className="mt-[18px] border border-darkmode-100 rounded-lg p-3">
        <div className="flex items-center justify-between">
          <p className="text-grey-400 text-xs leading-5">Left Of {gb}GB</p>
          <p className="text-sm font-semibold text-blue-100">{availGb} MB</p>
        </div>
      </div>
    </div>
  );
};
export default ResidentialCard;
