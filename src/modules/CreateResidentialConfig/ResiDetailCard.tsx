import TimeIcon from "@public/icons/time-past.svg";
import CalendarIcon from "@public/icons/calendar.svg";
import Image from "next/image";

const ResiDetailCard = () => {
  return (
    <div className="mt-4 border border-darkmode-100 bg-darkmode-200 rounded-lg p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-darkmode-300 rounded">
            <Image src={TimeIcon} alt="" className="m-2.5" />
          </div>

          <p className="text-xs text-gray-600">Order Date</p>
        </div>
        <p className="text-base text-white font-semibold">12 April 2026</p>
      </div>

      <div className="my-6 h-px w-full bg-darkmode-100"></div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-darkmode-300 rounded">
            <Image src={CalendarIcon} alt="" className="m-2.5 w-6 h-6" />
          </div>

          <p className="text-xs text-gray-600">Expiration Date</p>
        </div>
        <p className="text-base text-white font-semibold">12 April 2026</p>
      </div>
    </div>
  );
};
export default ResiDetailCard;
