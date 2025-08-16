import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination/Pagination";
import NoDataImage from "@public/image/config.png";
import Image from "next/image";
import ResidentialConfigCard from "./ResidentialConfigCard";
import ShoppingCartIcon from "@public/icons/shopping-cart.svg";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import { getUserConfigs } from "@/service/api";
import NoSearchResultImage from "@public/image/search.png";

const ResidentialConfigTab = ({ planUuid }: { planUuid?: string }) => {
  const params = useSearchParams();
  const limit = params.get("limit") ? parseInt(params.get("limit")!) : 4;
  const offset = params.get("offset") ? parseInt(params.get("offset")!) : 0;

  const { data: configs } = useQuery({
    queryKey: [...QUERY_KEYS.USER_CONFIGS, planUuid],
    queryFn: () =>
      getUserConfigs(planUuid ? { plan_uuid: planUuid } : undefined),
  });

  const totalCount = configs?.length ?? 0;

  const paginatedData = configs?.slice(offset, offset + limit) ?? [];

  const isDataAvailable = offset + limit < totalCount;

  return (
    <div>
      {paginatedData?.length === 0 ? (
        <div className="flex items-center justify-center h-[560px]">
          {planUuid ? (
            <div>
              <Image quality={100} priority src={NoSearchResultImage} alt="" />
              <p className="mt-6 text-base font-semibold text-white">
                Search Not Found.
              </p>
            </div>
          ) : (
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
                  Create Now
                </Button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {paginatedData?.map((config, index) => (
            <ResidentialConfigCard
              key={index}
              configName={config.name}
              // dataUsage={config.dataUsage}
              portType={config.protocol}
              geoLocation={config.country}
              rotation={config.rotation}
              quantityGenerated={config.quantity}
              format={config.format}
              port={config.quantity}
              username={config.city}
              password={config.city}
              dataUsed={config.quantity}
            />
          ))}
        </div>
      )}

      <Pagination
        color="bg-blue-100 border-blue-100 hover:bg-blue-400"
        totalCount={totalCount}
        limit={limit}
        offset={offset}
        isDataAvailable={isDataAvailable}
      />
    </div>
  );
};
export default ResidentialConfigTab;
