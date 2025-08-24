import Button from "@/components/Button/Button";
import LayersIcon from "@public/icons/layers.svg";
import Image from "next/image";
import PlusIcon from "@public/icons/plus.svg";
import Link from "next/link";

type Props = { href: string };

const ActivePlanCard = ({ href }: Props) => {
  return (
    <div className="border border-darkmode-100 bg-darkmode-200 rounded-lg py-5 px-4 relative overflow-hidden">
      <div className="h-44 w-96 rotate-12 opacity-45 bg-orange-300/45 absolute blur-3xl -top-28 -right-40"></div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-darkmode-300 rounded">
            <Image src={LayersIcon} alt="" className="m-2.5" />
          </div>

          <div>
            <p className="text-white font-bold text-sm">Add Plan</p>
          </div>
        </div>

        <Link href={href}>
          <Button>
            <Image src={PlusIcon} alt="" />
          </Button>
        </Link>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <p className="text-white font-extrabold text-xl">24 Plans</p>
        </div>
      </div>
    </div>
  );
};
export default ActivePlanCard;
