import Image, { StaticImageData } from "next/image";
import React from "react";
import CaretRightIcon from "@public/icons/caret-right.svg";
import Button from "../../components/Button/Button";
import ArrowIcon from "@public/icons/arrow-small-right.svg";
import Link from "next/link";

type Props = {
  icon: StaticImageData;
  name: string;
  features: string[];
  start_price: number;
};

const ResidentialCard: React.FC<Props> = ({
  icon,
  name,
  features,
  start_price,
}) => {
  return (
    <div className="bg-darkmode-300 rounded-xl p-6 z-10 h-full flex flex-col">
      <div className="grow">
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 rounded-lg">
            <Image width={24} height={24} src={icon} alt="" className="m-1.5" />
          </div>
          <p className="text-white text-lg font-semibold">{name}</p>
        </div>
        <div className="mt-6 flex flex-col gap-2.5">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image src={CaretRightIcon} alt="" />
              <p className="text-base text-grey-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 w-full">
          <div className="border border-darkmode-100 rounded-lg px-3 py-3 flex items-center justify-between w-3/5">
            <p className="text-grey-400 text-xs">Start From</p>
            <p className="text-orange-200 font-semibold text-sm">
              {start_price}
            </p>
          </div>

          <Link className="w-2/5" href={"/purchase/residential"}>
            <Button
              className="px-3 py-2.5 text-base"
              rightIcon={<Image src={ArrowIcon} alt="" />}
            >
              Purchase
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ResidentialCard;
