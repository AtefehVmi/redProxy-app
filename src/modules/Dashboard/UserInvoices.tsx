"use client";
import React from "react";
import CustomCard from "@/components/CustomCard/customCard";
import SelectWithCustomCard from "@/components/CustomSelect/SelectWithCustomCard";
import Table from "@/components/Table/Table";
import { InvoiceColumns } from "@/constants/TableColumns";
import cn from "@/utils/cn";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import { getOrders } from "@/service/api";
import Pagination from "@/components/Pagination/Pagination";
import { useSearchParams } from "next/navigation";

const UserInvoices = () => {
  const params = useSearchParams();
  const limit = params.get("limit") ? parseInt(params.get("limit")!) : 4;
  const offset = params.get("offset") ? parseInt(params.get("offset")!) : 0;

  function onFilterChange() {}

  const { data: orders, isLoading } = useQuery({
    queryKey: QUERY_KEYS.ORDERS,
    queryFn: () => getOrders({ completed: false, all: true }),
  });

  return (
    <div className="flex flex-col col-span-4">
      <div
        className={cn(
          "rounded h-[331px] p-[1.75px] px-4 pt-5 pb-4 flex flex-col items-center gap-[18px] overflow-auto",
          "border border-darkmode-100 bg-darkmode-200"
        )}
      >
        <div className="w-full flex justify-between items-center">
          <p className="text-base font-semibold text-white">Invoices</p>
          <SelectWithCustomCard
            options={[
              { label: "Last 12 months", value: "year" },
              { label: "Last 30 days", value: "month" },
              { label: "Last 7 days", value: "week" },
            ]}
            defaultValue={"week"}
            onChange={onFilterChange}
            className="w-[119px] h-26px"
          />
        </div>
        <Table
          isLoading={isLoading}
          columns={InvoiceColumns}
          data={orders ?? []}
        />
      </div>
      <Pagination
        color="bg-orange-200 border-orange-200 hover:bg-orange-400"
        noMargin={true}
        totalCount={orders?.length}
        limit={limit}
        offset={offset}
        isDataAvailable={(orders?.length ?? 0) >= limit}
      />
    </div>
  );
};

export default UserInvoices;
