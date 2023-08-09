import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStockReportsAsync } from "../features/store/slices/stockSlice";
import TableRow from "../components/TableRow";
import Table from "../components/Table/Table";
import Aside from "../components/Aside/Aside";
import Graph from "../components/Graph/Graph";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { reports, loading, error } = useSelector(
    (state) => state.stockReports
  );

  useEffect(() => {
    dispatch(fetchStockReportsAsync());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    // CONTAINER
    <div
      className="
            h-screen
            w-screen
            flex
            flex-col
            justify-center
            items-center
            "
    >
      {/* APPBAR / HEADER */}
      <div
        className="
            w-full
            h-[10%]
            bg-blue-500"
      >
        HEADER
      </div>
      {/* BODY CONTAINER */}
      <div
        className="
            min-h-[80%]
            min-w-[95%]
            m-4
            flex
            bg-black
            flex-row 
            justify-evenly
            items-stretch
            gap-4
        "
      >
        {/* LEFT BLOCK */}
        <div
          className="
                flex-1
                bg-blue-300
            "
        >
          <Table />
        </div>
        {/* RIGHT BLOCK */}
        <div
          className="
                bg-red-400
                flex-1
                flex
                flex-col
                justify-center
                items-center
                gap-4
            "
        >
          <Aside />
          <Graph />
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="
                w-full
                h-[10%]
                bg-green-200
                "
      >
        FOOTER
      </div>
    </div>
  );
};

export default LandingPage;
