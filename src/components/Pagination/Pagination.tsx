"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import style from "./pagination.module.css";

import PrevIcon from "@public/icons/chevron-left.svg";
import PrevDoubleIcon from "@public/icons/chevron-left-double.svg";
import PaginationButton from "./PaginationButton";
import PaginationButtton from "./PaginationButton";
import cn from "@/utils/cn";
import Image from "next/image";

interface PaginationProps {
  limit: number;
  offset: number;
  totalCount?: number;
  isDataAvailable: boolean;
  noMargin?: boolean;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  limit,
  offset,
  totalCount,
  isDataAvailable,
  className,
  noMargin = false,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [currentLimit, setCurrentLimit] = useState<number>(limit);
  const [currentOffset, setCurrentOffset] = useState<number>(offset);
  const [totalPages, setTotalPages] = useState<number | undefined>(1);

  useEffect(() => {
    if (!totalCount) {
      return setTotalPages(undefined);
    }
    setTotalPages(Math.ceil(totalCount / currentLimit));
  }, [totalCount, currentLimit]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const newLimit = Number(params.get("limit") ?? limit);
    const newOffset = Number(params.get("offset") ?? offset);
    setCurrentLimit(newLimit);
    setCurrentOffset(newOffset);
  }, [searchParams.toString()]);

  const handlePageChange = (newOffset: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("offset", newOffset.toString());
    setCurrentOffset(newOffset);
    const url = `${pathname}?${params.toString()}`;
    router.push(url);
  };

  const handleSetLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = Number(e.target.value);
    const params = new URLSearchParams(searchParams);
    params.set("limit", newLimit.toString());
    params.set("offset", "0"); // Reset offset when limit changes
    setCurrentLimit(newLimit);
    setCurrentOffset(0);
    const url = `${pathname}?${params.toString()}`;
    router.push(url);
  };

  const pageNumberButtons = () => {
    const currentPage = Math.floor(currentOffset / currentLimit) + 1;
    if (!totalPages) {
      return <></>;
    }
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => (
        <PaginationButton
          key={i + 1}
          pageNumber={i + 1}
          currentPage={currentPage}
          onClick={() => handlePageChange(i * currentLimit)}
        />
      ));
    } else {
      const pages = [];
      if (currentPage > 2) {
        pages.push(
          <PaginationButtton
            key={1}
            pageNumber={1}
            currentPage={currentPage}
            onClick={() => handlePageChange(0)}
          />
        );
        pages.push(
          <span
            key="start-ellipsis"
            className="px-3.5 py-2 h-full text-sm font-medium"
          >
            ...
          </span>
        );
      }
      if (currentPage > 1) {
        pages.push(
          <PaginationButton
            key={currentPage - 1}
            pageNumber={currentPage - 1}
            currentPage={currentPage}
            onClick={() => handlePageChange((currentPage - 2) * currentLimit)}
          />
        );
      }
      pages.push(
        <PaginationButton
          key={currentPage}
          pageNumber={currentPage}
          currentPage={currentPage}
          onClick={() => handlePageChange((currentPage - 1) * currentLimit)}
        />
      );
      if (currentPage < totalPages) {
        pages.push(
          <PaginationButton
            key={currentPage + 1}
            pageNumber={currentPage + 1}
            currentPage={currentPage}
            onClick={() => handlePageChange(currentPage * currentLimit)}
          />
        );
      }
      if (currentPage < totalPages - 1) {
        pages.push(
          <span
            key="end-ellipsis"
            className="px-3.5 py-2 h-full text-sm font-medium"
          >
            ...
          </span>
        );
        pages.push(
          <PaginationButton
            key={totalPages}
            pageNumber={totalPages}
            currentPage={currentPage}
            onClick={() => handlePageChange((totalPages - 1) * currentLimit)}
          />
        );
      }
      return pages;
    }
  };

  const currentPage = Math.floor(currentOffset / currentLimit) + 1;

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-center justify-between p-4 bg-darkmode-200 border border-darkmode-100 mb-8",
        noMargin ? "-mt-1 rounded-b-lg" : "mt-8 rounded-lg",
        className
      )}
    >
      <div className="hidden lg:block">
        {totalCount && (
          <p className="text-sm text-grey-400">
            <span className="font-medium">
              {isDataAvailable ? currentLimit : 0}
            </span>{" "}
            of {totalCount} items
          </p>
        )}
      </div>

      <div
        className="flex items-center justify-center px-3 gap-5"
        style={{ borderRadius: "8px" }}
      >
        <button
          className="px-2.5 py-1 h-full flex items-center gap-0.5 cursor-pointer bg-darkmode-300 hover:bg-darkmode-200 rounded disabled:cursor-not-allowed *:text-white *:disabled:text-grey-400"
          onClick={() => handlePageChange(0)}
          disabled={currentOffset === 0}
        >
          <Image src={PrevDoubleIcon} alt="" /> <p className="text-sm">First</p>
        </button>

        <button
          className={cn(
            "px-2.5 py-1 h-full items-center gap-0.5 cursor-pointer bg-darkmode-300 hover:bg-darkmode-200 rounded disabled:cursor-not-allowed *:text-white *:disabled:text-grey-400",
            "hidden md:flex"
          )}
          onClick={() => handlePageChange(currentOffset - currentLimit)}
          disabled={currentOffset === 0}
        >
          <Image src={PrevIcon} alt="" /> <p className="text-sm">Prev</p>
        </button>

        <span className="flex items-center text-sm gap-2.5">
          {pageNumberButtons()}
        </span>

        <button
          className="px-2.5 py-1 h-full flex items-center gap-0.5 cursor-pointer bg-darkmode-300 hover:bg-darkmode-200 rounded disabled:cursor-not-allowed *:text-white *:disabled:text-grey-400"
          onClick={() => handlePageChange(currentOffset + currentLimit)}
          disabled={
            !isDataAvailable ||
            (!!totalCount && currentOffset + currentLimit >= totalCount)
          }
        >
          <p className="text-sm">Next</p>
          <Image src={PrevIcon} alt="" className="rotate-180" />
        </button>

        <button
          className={cn(
            "px-2.5 py-1 h-full items-center gap-0.5 cursor-pointer bg-darkmode-300 hover:bg-darkmode-200 rounded disabled:cursor-not-allowed *:text-white *:disabled:text-grey-400",
            "hidden md:flex"
          )}
          onClick={() => handlePageChange((totalPages! - 1) * currentLimit)}
          disabled={
            !isDataAvailable ||
            (!!totalCount && currentOffset + currentLimit >= totalCount)
          }
        >
          <p className="text-sm">Last</p>
          <Image src={PrevDoubleIcon} alt="" className="rotate-180" />
        </button>
      </div>

      <div className="flex items-center justify-between w-full lg:w-fit mt-4 lg:mt-0">
        <div className="block lg:hidden">
          {totalCount && (
            <p className="text-sm text-grey-400">
              <span className="font-medium">
                {isDataAvailable ? currentLimit : 0}
              </span>{" "}
              of {totalCount} items
            </p>
          )}
        </div>

        <div className="flex gap-2 items-center">
          <select
            value={currentLimit}
            onChange={handleSetLimit}
            className={cn(
              style.select,
              "bg-darkmode-100 text-sm text-grey-300 font-semibold"
            )}
          >
            {[4, 10, 15, 20, 25, 30, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <p className="text-grey-400 text-sm">ITEMS per Page</p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
