import React from "react";

const TableRow = ({ symbol, latestPrice }) => {
  return (
    <tr>
      {symbol} - {latestPrice}
    </tr>
  );
};

export default TableRow;
