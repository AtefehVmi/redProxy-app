import Button from "@/components/Button/Button";
import Link from "next/link";
import ArrowRightIcon from "@public/icons/arrow-small-right.svg";
import Image from "next/image";
import DatacenterImage from "@public/icons/datacenter.svg";
import CheckIcon from "@public/icons/red-check.svg";
import FirstView from "@/modules/Residential/PlanPage/FirstView";
import FirstViewOrder from "@/modules/Shared/FirstViewOrder";

const FirstViewPage = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
        <div className="flex flex-col items-start gap-1.5">
          <p className="text-lg md:text-xl font-semibold text-white">
            New Datacenter Configuration
          </p>
          <p className="text-xs md:text-sm font-medium text-nav-sub-menu-heading-text">
            Configure your new proxy settings
          </p>
        </div>

        <Link className="mt-4 md:mt-0" href={"/plan/datacenter"}>
          <Button
            rightIcon={<Image src={ArrowRightIcon} alt="" />}
            className="py-2 px-4"
          >
            <p>Create New</p>
          </Button>
        </Link>
      </div>

      <div className="grid xl:grid-cols-18 gap-4 my-8">
        <FirstView
          numberColor="bg-orange-300"
          color="bg-orange-300/15"
          text1="Key Features of Datacenter Proxies"
          text2="Use Cases of Datacenter Proxies"
          desc="A datacenter proxy is an intermediary server that  routes your internet traffic through an IP address hosted in a data  center (e.g., AWS, Google Cloud, or private server farms). Unlike  residential or mobile proxies, datacenter IPs are not assigned by ISPs—they come from cloud hosting providers, making them faster but easier to detect and block."
          title="Datacenter Proxies"
          className="xl:col-span-13"
          keyFeatures={[
            {
              feature: "Blazing Fast",
              featureDesc:
                "– Best for high-speed tasks (scraping, bulk requests).",
            },
            {
              feature: "Cheap & Scalable",
              featureDesc: "– Much cheaper than residential/mobile proxies.",
            },
            {
              feature: "Dedicated or Shared IPs",
              featureDesc:
                "– Choose between private (exclusive) or shared (public) IPs.",
            },
            {
              feature: "No ISP Association",
              featureDesc:
                "– Not linked to an Internet Service Provider (unlike residential proxies).",
            },
          ]}
          usecases={[
            "Gaming & Low-Security Bypasses",
            "Ad Verification (Basic)",
            "Bulk Account Creation",
            "SEO Monitoring",
            "Web Scraping",
          ]}
          image={DatacenterImage}
          checkIcon={CheckIcon}
        />

        <FirstViewOrder
          bestPlanColor="bg-orange-300"
          planName="30 Days"
          discount={20}
          totalPrice={12}
          ellipseColor="bg-orange-300/35"
          className="xl:col-span-5"
        />
      </div>
    </div>
  );
};
export default FirstViewPage;
