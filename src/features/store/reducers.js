import { combineReducers } from "@reduxjs/toolkit";
import stockReportsReducer from "./slices/stockSlice";

const rootReducer = combineReducers({
  stockReports: stockReportsReducer,
});

export default rootReducer;
