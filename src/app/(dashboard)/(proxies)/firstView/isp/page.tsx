import Button from "@/components/Button/Button";
import Link from "next/link";
import ArrowRightIcon from "@public/icons/arrow-small-right.svg";
import Image from "next/image";
import IspImage from "@public/icons/isp.svg";
import CheckIcon from "@public/icons/purple-check.svg";
import FirstView from "@/modules/Residential/PlanPage/FirstView";
import FirstViewOrder from "@/modules/Shared/FirstViewOrder";

const FirstViewPage = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
        <div className="flex flex-col items-start gap-1.5">
          <p className="text-lg md:text-xl font-semibold text-white">
            New ISP Configuration
          </p>
          <p className="text-xs md:text-sm font-medium text-nav-sub-menu-heading-text">
            Configure your new proxy settings
          </p>
        </div>
        <Link className="mt-4 md:mt-0" href={"/plan/isp"}>
          <Button
            rightIcon={<Image src={ArrowRightIcon} alt="" />}
            className="py-2 px-4"
          >
            <p>Create New</p>
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-9 gap-4 my-8">
        <FirstView
          numberColor="bg-indigo-100"
          color="bg-indigo-100/15"
          text1="Key Features of Static Residential Proxies"
          text2="Use Cases of Static Residential Proxies"
          desc="A Static Residential Proxy is an IP address provided by an Internet Service Provider (ISP) that remains the same (static) over  time, unlike rotating proxies that change periodically. These proxies  route your internet traffic through a real residential device (such as a home computer or router), making your requests appear as if they come  from a legitimate residential user rather than a data center or VPN."
          title="Static Residential Proxies"
          className="col-span-7"
          keyFeatures={[
            {
              feature: "Fixed IP Address",
              featureDesc:
                "– The IP does not change unless manually reassigned.",
            },
            {
              feature: "Residential Origin",
              featureDesc:
                "– The IP belongs to an ISP (e.g., Comcast, Verizon), making it appear more legitimate.",
            },
            {
              feature: "High Anonymity",
              featureDesc:
                "– Harder to detect and block compared to datacenter proxies.",
            },
            {
              feature: "Reliable for Long-term Tasks",
              featureDesc:
                "– Ideal for activities requiring consistent IPs (e.g., managing social media accounts, e-commerce).",
            },
          ]}
          usecases={[
            "Web Scraping",
            "Social Media Automation",
            "Ad Verification",
            "Sneaker & Limited Drops",
          ]}
          image={IspImage}
          checkIcon={CheckIcon}
        />

        <FirstViewOrder ellipseColor="bg-[#735CFF5C]" className="col-span-2" />
      </div>
    </div>
  );
};
export default FirstViewPage;
