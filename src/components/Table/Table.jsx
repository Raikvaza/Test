import React, { useState } from "react";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

const tableData = [
  "Date",
  "Open bid",
  "Close bid",
  "Highest",
  "Lowest",
  "Percent Change",
];

const Table = () => {
  const reports = useSelector((state) => state.stockReports.reports);
  const loading = useSelector((state) => state.stockReports.loading);
  const error = useSelector((state) => state.stockReports.error);

  // State to keep track of current page
  const [currentPage, setCurrentPage] = useState(1);

  // Number of items to display per page
  const itemsPerPage = 10;

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the reports array to display only items for the current page
  const displayedReports = reports.slice(startIndex, endIndex);

  return (
    <div
      className="
            h-full 
            w-full 
            flex 
            rounded-xl 
            bg-amber-200 
            flex-col 
            items-center 
            justify-evenly 
            overflow-auto"
    >
      <table className="w-full flex-1 table-auto">
        <thead>
          <tr>
            {tableData.map((value, index) => (
              <th key={index} className="bg-gray-200 p-2">
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {displayedReports.map((report, index) => (
            <tr key={index}>
              <td>{report.date}</td>
              <td>{report.open}</td>
              <td>{report.close}</td>
              <td>{report.high}</td>
              <td>{report.low}</td>
              <td>{report.changePercent}</td>
            </tr>
          ))}
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
