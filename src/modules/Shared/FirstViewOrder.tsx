import cn from "@/utils/cn";
import PartyIcon from "@public/icons/party.svg";
import Image from "next/image";
import CardDesignImage from "@public/image/card-design.png";
import ArrowDownIcon from "@public/icons/arrow-small-right.svg";

type Props = {
  className?: string;
  ellipseColor: string;
};

const FirstViewOrder = ({ className, ellipseColor }: Props) => {
  return (
    <div
      className={cn(
        className,
        "border border-darkmode-100 bg-darkmode-200 rounded relative overflow-hidden"
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
    </div>
  );
};
export default FirstViewOrder;
