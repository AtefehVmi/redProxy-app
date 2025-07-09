import ResidentialCard from "./ResidentialCard";
import IpRoyalIcon from "@public/icons/ip-royal.svg";
import NetNutIcon from "@public/icons/net-nut.svg";
import OxyLabsIcon from "@public/icons/oxy-labs.svg";

const ResidentialCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <ResidentialCard
        availGb={6451}
        gb={35}
        icon={IpRoyalIcon}
        name="IP Royal"
        features={[
          "Pay-as-you-go or monthly plans",
          "Global IP pool",
          "Great for sneaker copping and web scraping",
        ]}
      />

      <ResidentialCard
        availGb={6451}
        gb={35}
        icon={NetNutIcon}
        name="Net Nut"
        features={[
          "Pay-as-you-go or monthly plans",
          "Global IP pool",
          "Great for sneaker copping and web scraping",
        ]}
      />

      <ResidentialCard
        availGb={6451}
        gb={35}
        icon={OxyLabsIcon}
        name="Oxylabs"
        features={[
          "Over 100M residential IPs",
          "Built for high-volume data collection",
          "Advanced features like session control",
        ]}
      />
    </div>
  );
};
export default ResidentialCards;
