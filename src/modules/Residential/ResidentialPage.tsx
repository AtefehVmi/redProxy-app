"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import cn from "@/utils/cn";
import Button from "@/components/Button/Button";
import ShoppingCartIcon from "@public/icons/shopping-cart.svg";
import MagicWandIcon from "@public/icons/magic-wand.svg";
import Image from "next/image";
import SearchInput from "@/components/SearchInput/SearchInput";
import SearchIcon from "@public/icons/search.svg";

const tabs = [
  {
    title: "Configurations",
    key: "configs",
    content: <></>,
  },
  {
    title: "Plans",
    key: "plans",
    content: <></>,
  },
];

const ResidentialPage = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const limit = params.get("limit") ? parseInt(params.get("limit")!) : 4;
  const offset = params.get("offset") ? parseInt(params.get("offset")!) : 0;

  // const paginatedData = data.slice(offset, offset + limit);

  const activeTab = params.get("tab") || tabs[0].key;
  const handleTabClick = (tabKey: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("tab", tabKey);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <div className="w-full h-full">
      <p className="text-xl font-semibold text-white">
        New Residential configuration
      </p>
      <p className="text-grey-500 text-sm mt-2">
        Configurate your new proxy settings
      </p>

      <div className="flex items-center justify-end border-b border-darkmode-100 pb-6 mb-6">
        <div className="flex items-center gap-3">
          <Button
            icon={<Image src={ShoppingCartIcon} alt="" />}
            variant="secondary"
          >
            Purchase Plan
          </Button>
          <Button icon={<Image src={MagicWandIcon} alt="" />}>
            Generate New
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="bg-darkmode-200 rounded p-2 w-fit grid grid-cols-2 gap-2.5">
          {tabs.map((item) => (
            <button
              key={item.key}
              onClick={() => handleTabClick(item.key)}
              className={cn(
                "rounded border px-3 py-1.5 text-white text-sm",
                activeTab === item.key
                  ? "bg-darkmode-100 border-darkmode-100 cursor-not-allowed"
                  : "bg-darkmode-300 border-darkmode-300 cursor-pointer"
              )}
            >
              {item.title}
            </button>
          ))}
        </div>

        <SearchInput
          placeholder="Search"
          endAdornment={
            <div className="border-l border-darkmode-200">
              <Image src={SearchIcon} alt="" className="ml-3" />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ResidentialPage;
