import ResidentialCard from "./ResidentialCard";
import ScrapingIcon from "@public/icons/globe.svg";
import GamingIcon from "@public/icons/gamepad.svg";
import GenericIcon from "@public/icons/plans.svg";

const ResidentialCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <ResidentialCard
        start_price={12}
        icon={ScrapingIcon}
        name="Scraping"
        features={[
          "Pay-as-you-go or monthly plans",
          "Global IP pool",
          "Great for sneaker copping and web scraping",
          "Expiration Date : 13/Jun/2025",
        ]}
      />

      <ResidentialCard
        start_price={12}
        icon={GamingIcon}
        name="Gaming"
        features={[
          "Pay-as-you-go or monthly plans",
          "Global IP pool",
          "Great for sneaker copping and web scraping",
          "Expiration Date : 13/Jun/2025",
        ]}
      />

      <ResidentialCard
        start_price={12}
        icon={GenericIcon}
        name="Generic"
        features={[
          "Over 100M residential IPs",
          "Built for high-volume data collection",
          "Advanced features like session control",
          "Expiration Date : 13/Jun/2025",
        ]}
      />
    </div>
  );
};
export default ResidentialCards;
