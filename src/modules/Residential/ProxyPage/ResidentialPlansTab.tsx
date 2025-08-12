import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination/Pagination";
import Image from "next/image";
import NoDataImage from "@public/image/plans.png";
import ResidentialPlanCard from "../ResidentialPlanCard";
import Button from "@/components/Button/Button";
import Link from "next/link";
import ShoppingCartIcon from "@public/icons/shopping-cart.svg";

const data = [
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
  {
    name: "Universal Scraper API",
    desc: "Scraping Pool",
    purchase_date: "01 April 2026",
    expire_date: "12 April 2026",
    remainingGb: 12,
    id: 1,
  },
];

const ResidentialPlansTab = () => {
  const params = useSearchParams();
  const limit = params.get("limit") ? parseInt(params.get("limit")!) : 8;
  const offset = params.get("offset") ? parseInt(params.get("offset")!) : 0;

  const paginatedData = data.slice(offset, offset + limit);

  return (
    <div>
      {paginatedData.length === 0 ? (
        <div className="flex items-center justify-center h-[560px]">
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
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-y-5 gap-x-4">
          {paginatedData?.map((item) => (
            <ResidentialPlanCard
              key={item.id}
              name={item.name}
              desc={item.desc}
              purchaseDate={item.purchase_date}
              expireDate={item.expire_date}
              remainingGb={item.remainingGb}
              planId={item.id}
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
export default ResidentialPlansTab;
