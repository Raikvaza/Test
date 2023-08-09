import React from "react";
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/solid";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div
      className="
            w-full
            flex 
            flex-row justify-evenly
            m-2
        "
    >
      <button
        disabled={currentPage === 1}
        className="
            px-10 
            py-3
            min-w-[200px]
            rounded-xl 
            border-[2px] 
            border-black
        "
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronDoubleLeftIcon className="h-5 w-5 inline-block" />
        Previous
      </button>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="
            min-w-[200px] 
            px-10 
            py-3
            rounded-xl 
            border-[2px] 
            border-black
        "
      >
        Next
        <ChevronDoubleRightIcon className="h-5 w-5 inline-block" />
      </button>
    </div>
  );
};

export default Pagination;
