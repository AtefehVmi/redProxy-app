import cn from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Feature = {
  feature: string;
  featureDesc: string;
};

type Props = {
  className?: string;
  image: StaticImageData;
  title: string;
  desc: string;
  keyFeatures: Feature[];
  usecases: string[];
  text1: string;
  text2: string;
  checkIcon: StaticImageData;
  color: string;
};

const ResidentialFirstView: React.FC<Props> = ({
  className,
  image,
  title,
  desc,
  keyFeatures,
  usecases,
  text1,
  text2,
  checkIcon,
  color,
}) => {
  return (
    <div
      className={cn(
        "bg-darkmode-200 border border-darkmode-100 rounded p-8 relative overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "h-[435px] w-[548px] opacity-45 absolute -top-28 -right-28 rounded-full blur-3xl rotate-12",
          color
        )}
      ></div>
      <div className="flex items-center gap-5">
        <Image src={image} alt="" />
        <p className="text-24px font-bold text-white">{title}</p>
      </div>

      <p className="mt-6 text-white text-base">{desc}</p>

      <p className="mt-8 text-grey-400 text-18px font-semibold">{text1}</p>
      <div className="mt-6 flex flex-col gap-3">
        {keyFeatures.map((keyFeature, index) => (
          <div key={keyFeature.feature} className="flex items-center gap-4">
            <div className="rounded-lg h-7 w-7 bg-blue-100 flex items-center justify-center">
              <p className="text-base text-white">{index}</p>
            </div>

            <div className="flex items-center gap-1">
              <p className="text-base font-semibold text-white">
                {keyFeature.feature}
              </p>
              <p className="text-base text-grey-300">
                {keyFeature.featureDesc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-18px font-semibold text-grey-400">{text2}</p>
      <div className="mt-6 flex flex-wrap items-center gap-6">
        {usecases.map((usecase) => (
          <div key={usecase} className="flex items-center gap-3">
            <Image src={checkIcon} alt="" />
            <p className="text-white text-base font-semibold">{usecase}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ResidentialFirstView;
