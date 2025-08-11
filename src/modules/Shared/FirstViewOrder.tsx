import cn from "@/utils/cn";
import PartyIcon from "@public/icons/party.svg";
import Image from "next/image";
import CardDesignImage from "@public/image/card-design.png";
import ArrowDownIcon from "@public/icons/arrow-small-right.svg";
import PlanIcon from "@public/icons/plans.svg";
import TagIcon from "@public/icons/tag.svg";
import CountriesImage from "@public/icons/countries.svg";
import Button from "@/components/Button/Button";
import ShoppingCartIcon from "@public/icons/shopping-cart.svg";
import BlackPlanIcon from "@public/icons/black-cube.svg";

type Props = {
  className?: string;
  ellipseColor: string;
  bestPlanColor: string;
  planName: string;
  totalPrice: number;
  discount: number;
};

const FirstViewOrder = ({
  className,
  ellipseColor,
  bestPlanColor,
  planName,
  totalPrice,
  discount,
}: Props) => {
  return (
    <div
      className={cn(
        className,
        "border border-darkmode-100 bg-darkmode-200 rounded relative overflow-hidden",
        "flex flex-col"
      )}
    >
      <Image
        src={CardDesignImage}
        alt=""
        className="absolute -top-8 left-1/2 -translate-x-1/2"
      />

      <div
        className={cn(
          "rounded-full h-52 w-72 opacity-45 blur-3xl left-1/2 -translate-x-1/2 -top-28 absolute",
          ellipseColor
        )}
      ></div>

      <div className="grow">
        <div className="flex items-center justify-center mt-14">
          <div
            className={cn(
              "border-4 border-white/10 bg-white/5 rounded-full px-4 py-1.5 backdrop-blur-sm",
              "flex items-center gap-2.5"
            )}
          >
            <Image src={PartyIcon} alt="" />
            <p className="text-white text-lg font-semibold leading-8">
              Start Now
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center">
          <p className="text-white font-semibold text-base">
            10% discount on first purchase
          </p>

          <p className="mt-2 text-grey-400 text-sm">
            Best-selling planBest-selling plan
          </p>

          <Image src={ArrowDownIcon} alt="" className="rotate-90 mt-2" />
        </div>

        <div className="mt-8 bg-darkmode-300 border border-darkmode-100 rounded-lg p-4 mx-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={cn("rounded", bestPlanColor)}>
                <Image
                  src={
                    bestPlanColor === "bg-yellow-100" ? BlackPlanIcon : PlanIcon
                  }
                  alt=""
                  className="m-1.5 w-4 h-4"
                />
              </div>

              <p className="text-lg text-white font-semibold">{planName}</p>
            </div>

            <div
              className={cn(
                "bg-darkmode-300 border border-orange-200 px-3 py-1.5 rounded-full",
                "flex items-center gap-1 mt-2 2xl:mt-0"
              )}
            >
              <Image src={TagIcon} alt="" />
              <p className="text-orange-200 text-[10px]">
                Best Seller - <span className="font-medium">{discount}%</span>
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-1">
            <p className="text-sm font-semibold text-grey-50">${totalPrice}</p>
            <p className="text-grey-500 text-base leading-4">/ Per IP</p>
          </div>

          <div
            className={cn(
              "mt-4 p-2 rounded border border-darkmode-100",
              "flex items-center justify-between"
            )}
          >
            <p className="text-xs text-white">Popular Countries</p>
            <div className="flex items-center gap-1">
              <Image src={CountriesImage} alt="" />
              <Image src={ArrowDownIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mb-9 mt-8 xl:mt-0">
        <Button
          className="text-base py-3 px-11"
          icon={<Image src={ShoppingCartIcon} alt="" />}
        >
          Order Now
        </Button>
      </div>
    </div>
  );
};
export default FirstViewOrder;
