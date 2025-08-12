import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination/Pagination";
import NoDataImage from "@public/image/config.png";
import Image from "next/image";
import ResidentialConfigCard from "./ResidentialConfigCard";
import ShoppingCartIcon from "@public/icons/shopping-cart.svg";
import Button from "@/components/Button/Button";
import Link from "next/link";

const CHART_DATA = [
  {
    month: "Page A",
    usage: 2400,
  },
  {
    month: "Page B",
    usage: 1398,
  },
  {
    month: "Page C",
    usage: 3800,
  },
  {
    month: "Page D",
    usage: 3908,
  },
  {
    month: "Page E",
    usage: 4800,
  },
  {
    month: "Page F",
    usage: 3800,
  },
  {
    month: "Page G",
    usage: 4300,
  },
];

const data = [
  {
    configName: "Residential for reddit",
    location: "China",
    portType: "Socks5",
    rotation: "Sticky",
    quantity: 720,
    format: "hostname:port:username:password",
    port: 6608,
    username: "mopoproxy@gmail.com",
    password: "prrrrrjhhkjdsfiued",
    dataUsage: CHART_DATA,
    dataUsed: 4.92,
  },
  {
    configName: "Residential for reddit",
    location: "China",
    portType: "Socks5",
    rotation: "Sticky",
    quantity: 720,
    format: "hostname:port:username:password",
    port: 6608,
    username: "mopoproxy@gmail.com",
    password: "prrrrrjhhkjdsfiued",
    dataUsage: CHART_DATA,
    dataUsed: 4.92,
  },
];

const ResidentialConfigTab = () => {
  const params = useSearchParams();
  const limit = params.get("limit") ? parseInt(params.get("limit")!) : 4;
  const offset = params.get("offset") ? parseInt(params.get("offset")!) : 0;

  const paginatedData = data.slice(offset, offset + limit);

  return (
    <div>
      {paginatedData.length === 0 ? (
        <div className="flex items-center justify-center h-[560px]">
          <div>
            <Image quality={100} priority src={NoDataImage} alt="" />
            <p className="mt-6 text-base font-semibold text-white">
              There are no Configurations.
            </p>
            <Link
              className="mt-6 flex items-center justify-center"
              href={"/generate/residential"}
            >
              <Button
                className="px-4 py-3 text-base"
                icon={<Image src={ShoppingCartIcon} alt="" />}
              >
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {paginatedData.map((config, index) => (
            <ResidentialConfigCard
              key={index}
              configName={config.configName}
              dataUsage={config.dataUsage}
              portType={config.portType}
              geoLocation={config.location}
              rotation={config.rotation}
              quantityGenerated={config.quantity}
              format={config.format}
              port={config.port}
              username={config.username}
              password={config.password}
              dataUsed={config.dataUsed}
            />
          ))}
        </div>
      )}

      <Pagination
        totalCount={data.length}
        limit={limit}
        offset={offset}
        isDataAvailable={data?.length >= limit}
      />
    </div>
  );
};
export default ResidentialConfigTab;
