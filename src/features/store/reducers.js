import { combineReducers } from "@reduxjs/toolkit";
import stockReportsReducer from "./slices/stockSlice";
import commonStockReducer from "./slices/commonStockSlice";
import companyDataReducer from "./slices/companyDataSlice";
const rootReducer = combineReducers({
  stockReports: stockReportsReducer,
  companyData: companyDataReducer,
  commonStock: commonStockReducer,
});

export default rootReducer;
