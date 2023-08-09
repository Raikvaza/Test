import React from "react";

const PaginationButton = ({ pageNumber, onClick }) => {
  return <button onClick={() => onClick(pageNumber)}>{pageNumber}</button>;
};

export default PaginationButton;
