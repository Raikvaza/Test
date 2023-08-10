import React, { useState } from "react";
import { useEffect } from "react";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import { fetchStockReportsAsync } from "../../features/store/slices/stockSlice";
import { useDispatch, useSelector } from "react-redux";
const tableData = [
  "ID",
  "Date",
  "Open bid",
  "Close bid",
  "Highest",
  "Lowest",
  "Percent Change",
];

const Table = () => {
  const dispatch = useDispatch();
  const { reports, loading, error, reportsFetched } = useSelector(
    (state) => state.stockReports
  );
  const { details } = useSelector((state) => state.companyData);
  useEffect(() => {
    if (details.symbol && !reportsFetched) {
      // console.log(details.symbol);

      dispatch(fetchStockReportsAsync(details.symbol));
    }
  }, [details.symbol, reportsFetched]);
  if (loading) {
    return (
      <div
        className="
            h-full 
            w-full 
            flex 
            rounded-xl 
            bg-white 
            flex-col 
            items-center 
            justify-evenly 
            "
      >
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // State to keep track of current page
  const [currentPage, setCurrentPage] = useState(1);

  // Number of items to display per page
  const itemsPerPage = 10;

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Display only items for the current page
  const displayedReports = reports.slice(startIndex, endIndex);
  // Fill empty rows to reach the desired row count
  const emptyRowCount = Math.max(itemsPerPage - displayedReports.length, 0);
  const emptyRows = Array.from({ length: emptyRowCount }, (_, index) => (
    <tr
      key={index}
      className="odd:bg-gray-200 
        "
    >
      {tableData.map((_, colIndex) => (
        <td key={colIndex}>-</td>
      ))}
    </tr>
  ));
  return (
    <div
      className="
            h-full 
            w-full 
            flex  
            flex-col 
            items-center 
            justify-evenly 
            "
    >
      <SearchBar />
      <table
        className="
          w-full
          flex-1
          table-auto
          shadow-2xl
          "
      >
        {/* TABLE HEADER */}
        <thead
          className="
            bg-brown-gold
            border-[1px]
            border-black
          "
        >
          <tr>
            {tableData.map((value, index) => (
              <th
                key={index}
                className=" 
                  p-2
                  font-mono
                  text-lg 
                  font-semibold
                  text-white  
                "
              >
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {displayedReports.map((report, index) => (
            <tr
              key={index}
              className="
              odd:bg-gray-200 
              hover:bg-white
                hover:cursor-pointer
                border-l-[1px]
                border-black
              "
            >
              <td
                className="
                  border-r-[1px]
                  border-b-[1px]
                  border-black
                "
              >
                {index}
              </td>
              <td
                className="
                  border-r-[1px]
                  border-b-[1px]
                  border-black
                "
              >
                {report.date}
              </td>
              <td
                className="
                  border-r-[1px]
                  border-b-[1px]
                  border-black
                "
              >
                {report.open}
              </td>
              <td
                className="
                  border-r-[1px]
                  border-b-[1px]
                  border-black
                "
              >
                {report.close}
              </td>
              <td
                className="
                  border-r-[1px]
                  border-b-[1px]
                  border-black
                "
              >
                {report.high}
              </td>
              <td
                className="
                  border-r-[1px]
                  border-b-[1px]
                  border-black
                "
              >
                {report.low}
              </td>
              <td
                className="
                  border-r-[1px]
                  border-b-[1px]
                  border-black
                "
              >
                {report.changePercent}
              </td>
            </tr>
          ))}
          {emptyRows}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(reports.length / itemsPerPage)}
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
};

export default Table;
