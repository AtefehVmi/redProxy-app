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
import ResidentialConfigTab from "./ResidentialConfigTab";
import ResidentialPlansTab from "./ResidentialPlansTab";
import ConfigIcon from "@public/icons/globe.svg";
import PlansIcon from "@public/icons/plans.svg";
import SettingsIcon from "@public/icons/settings-sliders.svg";
import StatusFilterButton from "./StatusFilterButton";
import Link from "next/link";

const tabs = [
  {
    title: (
      <div className="flex items-center justify-center gap-1">
        <Image className="min-w-5 min-h-5" src={ConfigIcon} alt="" />{" "}
        <p className="text-sm">Configurations</p>
      </div>
    ),
    key: "configs",
    content: <ResidentialConfigTab />,
  },
  {
    title: (
      <div className="flex items-center gap-1 justify-center">
        <Image className="min-w-5 min-h-5" src={PlansIcon} alt="" />
        <p className="text-sm">Plans</p>
      </div>
    ),
    key: "plans",
    content: <ResidentialPlansTab />,
  },
];

const ResidentialPage = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

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

      <div className="flex items-center md:justify-end border-b border-darkmode-100 pb-6 mb-6 mt-4 md:mt-0">
        <div className="flex items-center gap-3">
          <Link href={"/plan/residential"}>
            <Button
              icon={<Image src={ShoppingCartIcon} alt="" />}
              variant="secondary"
            >
              Purchase Plan
            </Button>
          </Link>
          <Button icon={<Image src={MagicWandIcon} alt="" />}>
            Generate New
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="bg-darkmode-200 rounded p-2 w-full md:w-fit grid grid-cols-2 gap-2.5">
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

        <div className="flex items-center gap-2 mt-6 md:mt-0">
          <SearchInput
            className="w-full"
            placeholder="Search"
            endAdornment={
              <div className="border-l border-darkmode-200">
                <Image src={SearchIcon} alt="" className="ml-3" />
              </div>
            }
          />

          {activeTab === "plans" && (
            <StatusFilterButton field="status" value="active" />
          )}
        </div>
      </div>

      <div className="mt-5">
        {tabs.find((t) => t.key === activeTab)?.content}
      </div>
    </div>
  );
};

export default ResidentialPage;
