import LayersIcon from "@public/icons/layers.svg";
import Image from "next/image";
import TrendupIcon from "@public/icons/trend-up.svg";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import AddBandwidthModal from "./AddBandwidthModal";

const AddBandwidthCard = () => {
  return (
    <div className="border border-darkmode-100 bg-darkmode-200 rounded-lg p-5 relative overflow-hidden">
      <div className="h-44 w-96 rotate-12 opacity-45 bg-orange-300/45 absolute blur-3xl -top-28 -right-40"></div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-darkmode-300 rounded">
            <Image src={LayersIcon} alt="" className="m-2.5" />
          </div>

          <div>
            <p className="text-white font-bold text-sm">Bandwidth</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <p className="text-white font-extrabold text-xl">45 GB</p>
          <AddBandwidthModal />
        </div>
      </div>
    </div>
  );
};
export default AddBandwidthCard;
