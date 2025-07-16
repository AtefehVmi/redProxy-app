import Button from "@/components/Button/Button";
import Link from "next/link";
import ArrowRightIcon from "@public/icons/arrow-small-right.svg";
import Image from "next/image";
import ResidentialFirstView from "@/components/ResidentialFirstView/ResidentialFirstView";
import ResidentialImage from "@public/icons/residential.svg";
import CheckIcon from "@public/icons/blue-check.svg";
import ResidentialCards from "@/components/ResidentialFirstView/ResidentialCards";

const FirstViewPage = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col items-start gap-1.5">
          <p className="text-xl font-semibold text-white">
            New Residential Configuration
          </p>
          <p className="text-sm font-medium text-nav-sub-menu-heading-text">
            Configure your new proxy settings
          </p>
        </div>
        <Link href={"/plan/residential"}>
          <Button
            rightIcon={<Image src={ArrowRightIcon} alt="" />}
            className="py-2 px-4"
          >
            <p>Create New</p>
          </Button>
        </Link>
      </div>

      <ResidentialFirstView
        numberColor="bg-blue-100"
        color="bg-blue-100/15"
        desc="A Residential Proxy is an intermediary server that  routes your internet traffic through a real residential IP address  provided by an Internet Service Provider (ISP). Unlike datacenter  proxies (which come from cloud servers), residential proxies use IPs  assigned to actual home devices, making them appear as legitimate,  organic users rather than bots or automated traffic."
        title="Residential Proxy"
        className="my-8"
        image={ResidentialImage}
        checkIcon={CheckIcon}
        resiCards={<ResidentialCards />}
      />
    </div>
  );
};
export default FirstViewPage;
