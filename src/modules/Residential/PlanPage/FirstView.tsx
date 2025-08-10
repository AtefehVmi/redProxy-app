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
  keyFeatures?: Feature[];
  usecases?: string[];
  text1?: string;
  text2?: string;
  checkIcon: StaticImageData;
  color: string;
  numberColor: string;
  resiCards?: React.ReactNode;
};

const FirstView: React.FC<Props> = ({
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
  numberColor,
  resiCards,
}) => {
  return (
    <div
      className={cn(
        "bg-darkmode-200 border border-darkmode-100 rounded py-6 pl-6 pr-4 md:p-8 relative overflow-hidden",
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
        <p className="text-lg md:text-2xl font-bold text-white">{title}</p>
      </div>

      <p className="mt-6 text-white text-sm md:text-base">{desc}</p>

      {text1 && (
        <p className="mt-8 text-grey-400 text-base md:text-lg font-semibold">
          {text1}
        </p>
      )}
      {keyFeatures && (
        <div className="mt-6 flex flex-col gap-3">
          {keyFeatures?.map((keyFeature, index) => (
            <div key={keyFeature.feature} className="flex items-start gap-4">
              <div
                className={cn(
                  "rounded-lg min-h-7 min-w-7 flex items-center justify-center",
                  numberColor
                )}
              >
                <p
                  className={cn(
                    "text-base",
                    numberColor === "bg-yellow-100"
                      ? "text-black"
                      : "text-white"
                  )}
                >
                  {index}
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-1">
                <p className="text-sm md:text-base font-semibold text-white">
                  {keyFeature.feature}
                </p>
                <p className="text-sm md:text-base text-grey-300">
                  {keyFeature.featureDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {text2 && (
        <p className="mt-8 text-base md:text-lg font-semibold text-grey-400">
          {text2}
        </p>
      )}
      {usecases && (
        <div className="mt-6 flex flex-wrap items-center gap-6">
          {usecases?.map((usecase) => (
            <div key={usecase} className="flex items-center gap-3">
              <Image src={checkIcon} alt="" />
              <p className="text-white text-sm md:text-base font-semibold">
                {usecase}
              </p>
            </div>
          ))}
        </div>
      )}

      {resiCards && <div className="mt-8">{resiCards}</div>}
    </div>
  );
};
export default FirstView;
