"use client";

import React from "react";
import Image from "next/image";
import cn from "@/utils/cn";
import RotationIcon from "@public/icons/rotation.svg";
import PortIcon from "@public/icons/port.svg";
import Autocomplete from "@/components/AutoComplete/Autocomplete";
import ToggleBox from "@/components/ToggleBox/ToggleBox";
import ResidentialGenerateTab from "../CreateResidentialConfig/ResidentialGenerateTab";
import ActivePlanCard from "../Shared/ActivePlanCard";
import InvoiceDetailsCard from "../Shared/InvoiceDetailsCard";

const CreateDatacenterConfig = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-9 gap-4">
      <div
        className={cn(
          "rounded w-full h-auto p-8 order-2 lg:order-1",
          "bg-darkmode-200 border-2 border-darkmode-100 lg:col-span-6 1665:col-span-7"
        )}
      >
        <p className="text-white text-xl font-bold">Proxy settings</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div
            className={cn(
              "md:col-span-2 border border-darkmode-100 bg-darkmode-300 px-4 py-5 rounded",
              "grid md:grid-cols-2"
            )}
          >
            <div className="flex items-center justify-between md:pr-4">
              <p className="text-grey-50 font-semibold">Auto Renew</p>
              <ToggleBox checked={true} />
            </div>

            <div className="h-px w-full bg-darkmode-100 my-4 md:hidden"></div>

            <div className="flex items-center justify-between md:pl-4 md:border-l border-darkmode-100">
              <p className="text-grey-50 font-semibold">Manual Renew</p>
              <ToggleBox checked={false} />
            </div>
          </div>

          <Autocomplete
            value={"hostname:port:username:password"}
            options={[
              {
                label: "hostname:port:username:password",
                value: "hostname:port:username:password",
              },
            ]}
            onChange={() => {}}
            label={"Change Format *"}
            startAdornment={<Image src={RotationIcon} alt="" />}
          />

          <Autocomplete
            value={"HTTP"}
            options={[
              { label: "HTTP", value: "HTTP" },
              { label: "Socks5", value: "Socks5" },
            ]}
            onChange={() => {}}
            label={"Change Port Type *"}
            startAdornment={<Image src={PortIcon} alt="" />}
          />
        </div>

        <ResidentialGenerateTab />
      </div>

      <div className="lg:col-span-3 1665:col-span-2 order-1 lg:order-2">
        <ActivePlanCard />
        <InvoiceDetailsCard className="mt-4" />
      </div>
    </div>
  );
};

export default CreateDatacenterConfig;
