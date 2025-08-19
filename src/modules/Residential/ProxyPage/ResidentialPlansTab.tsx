import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination/Pagination";
import Image from "next/image";
import NoDataImage from "@public/image/plans.png";
import ResidentialPlanCard from "../ResidentialPlanCard";
import Button from "@/components/Button/Button";
import Link from "next/link";
import ShoppingCartIcon from "@public/icons/shopping-cart.svg";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import { getUserPlans } from "@/service/api";
import NoSearchResultImage from "@public/image/search.png";

interface Props {
  filterValue?: string;
  searchValue?: string;
}

const ResidentialPlansTab = ({ filterValue, searchValue }: Props) => {
  const params = useSearchParams();
  const limit = params.get("limit") ? parseInt(params.get("limit")!) : 8;
  const offset = params.get("offset") ? parseInt(params.get("offset")!) : 0;

  const { data } = useQuery({
    queryKey: [...QUERY_KEYS.PLANS, filterValue, searchValue],
    queryFn: () =>
      getUserPlans(
        filterValue !== "All" ? filterValue : undefined,
        true,
        searchValue || undefined
      ),
  });

  const totalCount = data?.length ?? 0;
  const paginatedData = data?.slice(offset, offset + limit) ?? [];
  const isDataAvailable = offset + limit < totalCount;

  return (
    <div>
      {paginatedData?.length === 0 ? (
        <div className="flex items-center justify-center h-[560px]">
          {searchValue ? (
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
                There are no Plans.
              </p>
              <Link
                className="mt-6 flex items-center justify-center"
                href={"/plan/residential"}
              >
                <Button
                  className="px-4 py-3 text-base"
                  icon={<Image src={ShoppingCartIcon} alt="" />}
                >
                  Order Now
                </Button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-y-5 gap-x-4">
          {paginatedData?.map((item) => (
            <ResidentialPlanCard
              key={item.uuid}
              name={item.pool_type.name}
              desc={item.pool_type.description}
              purchaseDate={item.created}
              expireDate={item.expiration}
              // remainingGb={item.remainingGb}
              planId={item.uuid}
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
export default ResidentialPlansTab;
