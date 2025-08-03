"use client";
import React, { Fragment } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";

interface TableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  className?: string;
  bottomRounded?: boolean;
}

const Table = <TData extends object>({
  columns,
  data,
  className,
  bottomRounded,
}: TableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    // initialState: {pagination: {pageIndex: 0}},
  });

  return (
    <>
      <table
        cellSpacing={0}
        cellPadding={0}
        className={`
                    h-auto border-separate min-w-[1000px] w-full overflow-auto ml-auto
                    ${className ?? ""}
                `}
      >
        <thead className="w-full">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="
                                h-[14px] pb-3 bg-transport
                                text-xs text-profile-card-text font-medium text-left
                            "
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {data.length > 0 ? (
            table.getRowModel().rows.map((row, rowIndex) => (
              <tr
                key={row.id}
                className="transition-all duration-150 hover:bg-nav-link-active-bg"
              >
                {row.getVisibleCells().map((cell, cellIndex) => (
                  <td
                    key={cell.id}
                    className={`
                                        py-1.5
                                        text-xs font-medium text-white
                                        ${
                                          rowIndex ===
                                            table.getRowModel().rows.length -
                                              1 && bottomRounded
                                            ? "border-b-0"
                                            : ""
                                        }
                                        ${
                                          rowIndex ===
                                            table.getRowModel().rows.length -
                                              1 &&
                                          cellIndex === 0 &&
                                          bottomRounded
                                            ? "rounded-bl-2xl"
                                            : ""
                                        }
                                        ${
                                          rowIndex ===
                                            table.getRowModel().rows.length -
                                              1 &&
                                          cellIndex ===
                                            row.getVisibleCells().length - 1 &&
                                          bottomRounded
                                            ? "rounded-br-2xl"
                                            : ""
                                        }
                                    `}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-grey-400">There is no data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
