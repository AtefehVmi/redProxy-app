import React from "react";

interface PaginationButtonProps {
  pageNumber: number;
  currentPage: number;
  onClick: (pageNumber: number) => void;
  disabled?: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  pageNumber,
  currentPage,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`px-2.5 py-[3px] h-full text-sm font-semibold rounded border ${
        currentPage === pageNumber
          ? "text-darkmode-100 bg-orange-200 border-orange-200 hover:bg-orange-400"
          : "border-darkmode-100 bg-darkmode-100 text-grey-400 hover:bg-darkmode-200"
      }`}
      onClick={() => onClick(pageNumber)}
      disabled={disabled}
    >
      {pageNumber}
    </button>
  );
};

export default PaginationButton;
