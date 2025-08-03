import Button from "@/components/Button/Button";
import Link from "next/link";
import ArrowRightIcon from "@public/icons/arrow-small-right.svg";
import Image from "next/image";
import ResidentialFirstView from "@/components/ResidentialFirstView/ResidentialFirstView";
import MobileImage from "@public/icons/mobile.svg";
import CheckIcon from "@public/icons/yellow-check.svg";

const FirstViewPage = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
        <div className="flex flex-col items-start gap-1.5">
          <p className="text-lg md:text-xl font-semibold text-white">
            New Mobile Configuration
          </p>
          <p className="text-xs md:text-sm font-medium text-nav-sub-menu-heading-text">
            Configure your new proxy settings
          </p>
        </div>
        <Link className="mt-4 md:mt-0" href={"/plan/mobile"}>
          <Button
            rightIcon={<Image src={ArrowRightIcon} alt="" />}
            className="py-2 px-4"
          >
            <p>Create New</p>
          </Button>
        </Link>
      </div>

      <ResidentialFirstView
        numberColor="bg-yellow-100"
        color="bg-yellow-100/15"
        text1="Key Features of LTE / Mobile Proxies"
        text2="Use Cases of LTE / Mobile Proxies"
        desc="An LTE/Mobile Proxy routes your internet traffic  through a real mobile device’s cellular IP address (4G/LTE/5G), assigned by a mobile carrier (e.g., Verizon, T-Mobile, AT&T). These proxies  mimic genuine smartphone users, making them extremely difficult to  detect and block compared to residential or datacenter proxies."
        title="LTE / Mobile Proxies"
        className="my-8"
        keyFeatures={[
          {
            feature: "Highest Anonymity",
            featureDesc: "–  Nearly indistinguishable from real mobile users.",
          },
          {
            feature: " Dynamic IP Rotation",
            featureDesc:
              "– IPs change automatically (rotating) or can be sticky (semi-static).",
          },
          {
            feature: "Low Block Rates",
            featureDesc:
              "– Hard for websites to detect (ideal for sneaker bots, social media automation).",
          },
          {
            feature: "Geo-Targeting",
            featureDesc:
              "–Choose IPs from specific mobile carriers & locations.",
          },
          {
            feature: "High Success Rates",
            featureDesc:
              "– Effective for bypassing anti-bot systems (e.g., Nike, Shopify, Twitter).",
          },
        ]}
        usecases={[
          "Sneaker & Limited-Edition Drops",
          "Social Media Automation",
          "Ad Verification",
          "Web Scraping",
          "Gaming & App Testing",
        ]}
        image={MobileImage}
        checkIcon={CheckIcon}
      />
    </div>
  );
};
export default FirstViewPage;
