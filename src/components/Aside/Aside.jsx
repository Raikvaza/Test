import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { fetchCompanyDataAsync } from "../../features/store/slices/companyDataSlice";
const Aside = () => {
  const dispatch = useDispatch();
  const { details, logo, loading, error } = useSelector(
    (state) => state.companyData
  );
  //Checking existing symbol data
  useEffect(() => {
    // Always fetch company details based on the storedSymbol
    if (details.symbol) {
      dispatch(fetchCompanyDataAsync(details.symbol));
    } else {
      dispatch(fetchCompanyDataAsync("AAPL"));
    }
  }, [details.symbol]);
  //TODO improve the loader. Make a skeleton or something
  if (loading) {
    return (
      <div
        className="
        w-[768px] 
        h-96
        rounded-xl
        border-[2px]
        border-black
        bg-brown-gold
        flex
        flex-col
        justify-between
        p-4
        "
      ></div>
    );
  }
  //TODO make a better and more complicated error handling
  if (error) {
    return (
      <div
        className="
        w-[768px] 
        h-96
        rounded-xl
        border-[2px]
        border-black
        bg-brown-gold
        text-white-gold
        text-4xl
        flex
        justify-center
        items-center
        p-4
        "
      >
        FORGOT API KEY?
      </div>
    );
  }

  return (
    // MAIN CONTAINER
    // TODO split the component into files for maintainability
    <div
      className="
        w-[768px] 
        h-96
        rounded-xl
        border-[2px]
        border-black
        bg-brown-gold
        flex
        flex-col
        justify-between
        p-4
        "
    >
      {/* TOP CONTAINER */}
      <div
        className="
            flex
            flex-row
            overflow-hidden
            justify-between
            w-full 
            text-lg
            text-white
          "
      >
        {/* LOGO & SYMBOL CONTAINER */}
        <div
          className="
            flex
          "
        >
          {/* TODO use a backup photo if none are existent */}
          <img
            src={logo}
            alt="Company Logo"
            className="
              h-20 
              w-20
              border-[2px]
              border-black
              rounded-xl
              "
          />
          {/* company name and symbol */}
          <div className="ml-4">
            <h2
              className=" 
              font-bold 
              text-2xl
              "
            >
              {details.companyName}
            </h2>
            <p
              className="
              text-sm"
            >
              {details.symbol}
            </p>
          </div>
        </div>
        {/* DATE CONTAINER */}
        <div>
          <p
            className="
              text-md
              font-bold
              "
          >
            Latest Time: {details.latestTime}
          </p>

          <p
            className="
              text-sm
              text-end
              "
          >
            Currency - {details.currency}
          </p>
        </div>
      </div>
      {/* BOTTOM INFO CONTAINER */}
      <div
        className="
          flex 
          flex-row
          mt-4 
          font-mono 
          font-medium
          "
      >
        {/* BOTTOM LEFT */}
        <div
          className="
            flex-1  
            flex
            flex-col
            gap-4
            p-2
            border-r-[1px]
            border-t-[2px]
          "
        >
          <div className="flex justify-between">
            <p>Latest Price:</p>
            <p className="text-right">
              {details.latestPrice ? details.latestPrice : "Unavailable"}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Change:</p>
            <p className="text-right">
              {details.change ? details.change : "Unavailable"}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Change Percent:</p>
            <p className="text-right">
              {details.changePercent ? details.changePercent : "Unavailable"}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Total Volume:</p>
            <p className="text-right">
              {details.avgTotalVolume ? details.avgTotalVolume : "Unavailable"}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Latest Volume:</p>
            <p className="text-right">
              {details.latestVolume ? details.latestVolume : "Unavailable"}
            </p>
          </div>
        </div>
        {/* BOTTOM RIGHT CONTAINER */}
        <div
          className="
            flex-1  
            flex
            flex-col
            gap-4
            p-2
            border-l-[1px]
            border-t-[2px]
          "
        >
          <div className="flex justify-between">
            <p>Open:</p>
            <p className="text-right">
              {details.open ? details.open : "Unavailable"}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Close:</p>
            <p className="text-right">
              {details.close ? details.close : "Unavailable"}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Previous Close:</p>
            <p className="text-right">
              {details.previousClose ? details.previousClose : "Unavailable"}
            </p>
          </div>
          <div className="flex justify-between">
            <p>PE Ratio:</p>
            <p className="text-right">
              {details.peRatio ? details.peRatio : "Unavailable"}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Primary Exchange:</p>
            <p className="text-right">
              {details.primaryExchange
                ? details.primaryExchange
                : "Unavailable"}
            </p>
          </div>
        </div>
        {/* Add more information rows here */}
      </div>
    </div>
  );
};

export default Aside;
