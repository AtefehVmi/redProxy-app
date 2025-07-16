import Image, { StaticImageData } from "next/image";
import React from "react";
import TrendUpIcon from "@public/icons/trend-up-green.svg";
import TrendDownIcon from "@public/icons/trend-down-red.svg";
import cn from "@/utils/cn";
import AreaLineChart from "@/components/Charts/AreaLineChart";
import EyeIcon from "@public/icons/eye-icon.svg";
import Button from "@/components/Button/Button";
import Link from "next/link";

type Props = {
  icon: StaticImageData;
  gb?: number;
  plan?: string;
  name: string;
  percent: number;
  dataUsage: { month: string; usage: number }[];
  className: string;
};

const StatCard: React.FC<Props> = ({
  icon,
  gb,
  name,
  percent,
  dataUsage,
  className,
  plan,
}) => {
  return (
    <div className={cn("bg-darkmode-200 rounded-lg p-6", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={icon} alt="" />
          <p className="text-white font-semibold text-lg">{name}</p>
        </div>

        {plan && (
          <Link href={"/proxy/residential/oxylab"}>
            <Button>
              <Image src={EyeIcon} alt="" />
            </Button>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-5 gap-7 mt-6 place-content-center">
        <div className="col-span-2">
          {gb && <p className="text-white font-bold text-lg">{gb} GB</p>}
          {plan && <p className="text-white font-bold text-lg">{plan}</p>}
          <p className="flex items-center gap-1">
            <Image src={percent > 0 ? TrendUpIcon : TrendDownIcon} alt="" />
            <p
              className={cn(
                percent > 0 ? "text-proxy-color" : "text-error",
                "text-xs"
              )}
            >
              {percent}%
            </p>
          </p>
        </div>

        <div className="col-span-3">
          <AreaLineChart color={"#5CA7FF"} data={dataUsage} />
        </div>
      </div>
    </div>
  );
};
export default StatCard;
