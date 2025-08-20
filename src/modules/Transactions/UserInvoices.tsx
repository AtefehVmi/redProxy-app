"use client";
import React from "react";
import SelectWithCustomCard from "@/components/CustomSelect/SelectWithCustomCard";
import Table from "@/components/Table/Table";
import cn from "@/utils/cn";
import { getTransactions } from "@/service/api";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/querykeys";
import { Transaction } from "@/service/models";
import Pagination from "@/components/Pagination/Pagination";
import { useSearchParams } from "next/navigation";
import TableCell from "@/components/Table/TableCell";
import { ColumnDef } from "@tanstack/react-table";

const UserInvoices = ({ height }: { height?: string }) => {
  const params = useSearchParams();
  const limit = params.get("limit") ? parseInt(params.get("limit")!) : 4;
  const offset = params.get("offset") ? parseInt(params.get("offset")!) : 0;

  function onFilterChange() {}
  const { data: orders, isLoading } = useQuery({
    queryKey: QUERY_KEYS.TRANSACTIONS,
    queryFn: () => getTransactions(),
  });

  const TransactionsColumns: ColumnDef<Transaction, any>[] = [
    {
      accessorKey: "created",
      header: "Date",
      cell: ({ getValue }) => {
        return <TableCell type={"TEXT"} value={getValue()} />;
      },
    },
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ getValue }) => {
        return <TableCell type={"TEXT"} value={getValue()} />;
      },
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ getValue }) => {
        return <TableCell type={"TEXT"} value={getValue()} />;
      },
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
      cell: ({ getValue }) => {
        return <TableCell type={"TEXT"} value={getValue()} />;
      },
    },
    {
      accessorKey: "provider",
      header: "Provider",
      cell: ({ getValue }) => {
        return <TableCell type={"TEXT"} value={getValue()} />;
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue }) => {
        return <TableCell type={"BADGE"} value={getValue()} />;
      },
    },
    {
      accessorKey: "total_amount",
      header: "Total Amount",
      cell: ({ getValue }) => {
        return <TableCell type={"TEXT"} value={getValue()} />;
      },
    },
    {
      accessorKey: "duration",
      header: "Duration",
      cell: ({ getValue }) => {
        return <TableCell type={"TEXT"} value={getValue()} />;
      },
    },
  ];

  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "px-4 pt-5 flex flex-col items-center gap-[18px] overflow-auto",
          "border border-darkmode-100 bg-darkmode-200/60 rounded w-full",
          height ? height : "h-[700px]"
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
          columns={TransactionsColumns}
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
