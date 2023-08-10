import React from "react";
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/solid";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-1 ${currentPage === i ? "bg-gray-300" : "bg-white"} 
          px-3
          py-2 
          hover:border-gold
          hover:py-3 transition duration-500
          rounded-md 
          border-[1px] 
          text-black 
          border-gray-300`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div
      className="
        w-full h-20 
        font-mono
        flex 
        flex-row 
        text-center
        text-white
        bg-brown-gold
        text-lg
        border-[1px]
        border-black
        items-center
        justify-evenly 
        rounded-b-lg
        "
    >
      {currentPage !== 1 ? (
        <button
          disabled={currentPage === 1}
          className="
            px-10 
            py-2
            bg-brown-gold
            min-w-[200px] 
            rounded-xl 
            flex
            hover:bg-dark-gold transition duration-300
            font-extrabold
            items-center
            justify-center
            border-[2px] 
            border-black"
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronDoubleLeftIcon
            className="
              h-5 
              w-5
              mr-2
              inline-block"
          />
          Previous
        </button>
      ) : (
        <div
          className="
            min-w-[200px]
            
          "
        ></div>
      )}
      <div>{renderPageNumbers()}</div>

      {currentPage !== totalPages ? (
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="
            min-w-[200px] 
            px-10 
            py-2
            flex 
            font-extrabold
            items-center
            justify-center
            bg-brown-gold
            hover:bg-dark-gold transition duration-300
            rounded-xl 
            border-[2px] 
            border-black"
        >
          Next
          <ChevronDoubleRightIcon
            className="
              h-5 
              w-5 
              ml-2
              inline-block"
          />
        </button>
      ) : (
        <div
          className="
            min-w-[200px]
            
          "
        ></div>
      )}
    </div>
  );
};

export default Pagination;
