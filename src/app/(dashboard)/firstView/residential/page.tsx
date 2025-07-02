import Button from "@/components/Button/Button";
import Link from "next/link";
import ArrowRightIcon from "@public/icons/arrow-small-right.svg";
import Image from "next/image";
import ResidentialFirstView from "@/components/ResidentialFirstView/ResidentialFirstView";
import ResidentialImage from "@public/icons/residential.svg";
import CheckIcon from "@public/icons/blue-check.svg";

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
        color="bg-blue-100/15"
        text1="Key Features of Residential Proxies"
        text2="Use Cases of Residential Proxies"
        desc="A Residential Proxy is an intermediary server that  routes your internet traffic through a real residential IP address  provided by an Internet Service Provider (ISP). Unlike datacenter  proxies (which come from cloud servers), residential proxies use IPs  assigned to actual home devices, making them appear as legitimate,  organic users rather than bots or automated traffic."
        title="Residential Proxy"
        className="my-8"
        keyFeatures={[
          {
            feature: "High Anonymity",
            featureDesc: "–  Harder to detect than datacenter proxies.",
          },
          {
            feature: "Geo-Specific IPs",
            featureDesc: "– Choose IPs from specific countries/cities.",
          },
          {
            feature: "Rotating or Static Options",
            featureDesc:
              "– IPs can change automatically (rotating) or stay fixed (static residential).",
          },
          {
            feature: "Lower Block Rates",
            featureDesc:
              "– Ideal for scraping, sneaker copping, and social media automation.",
          },
        ]}
        usecases={[
          "Web Scraping",
          "Social Media Automation",
          "Ad Verification",
          "Sneaker & Limited Drops",
          "SEO Monitoring",
          "Streaming & Geo-Unblocking",
        ]}
        image={ResidentialImage}
        checkIcon={CheckIcon}
      />
    </div>
  );
};
export default FirstViewPage;
