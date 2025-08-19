import React from "react";

interface PaginationButtonProps {
  pageNumber: number;
  currentPage: number;
  onClick: (pageNumber: number) => void;
  disabled?: boolean;
  color?: string;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  pageNumber,
  currentPage,
  onClick,
  disabled = false,
  color,
}) => {
  return (
    <button
      className={`px-2.5 py-[3px] h-full text-sm font-semibold rounded border ${
        currentPage === pageNumber
          ? `text-grey-50  ${color}`
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
