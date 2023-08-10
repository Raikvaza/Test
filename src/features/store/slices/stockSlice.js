import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStockReports } from "../../../service/api";

export const fetchStockReportsAsync = createAsyncThunk(
  "stockReports/fetchStockReports",
  async (symbol) => {
    try {
      const data = await fetchStockReports(symbol);
      return data;
    } catch (error) {
      throw error;
    }
  }
);
// Storing stock reports data of a certain company
const stockReportsSlice = createSlice({
  name: "stockReports",
  initialState: {
    reports: [],
    loading: false,
    error: null,
    reportsFetched: false,
  },
  reducers: {
    setReportsFetched: (state, action) => {
      state.reportsFetched = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockReportsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockReportsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.reportsFetched = true;
        state.reports = action.payload;
      })
      .addCase(fetchStockReportsAsync.rejected, (state, action) => {
        state.loading = false;
        state.reportsFetched = false;
        state.error = action.error.message;
      });
  },
});
export const { setReportsFetched } = stockReportsSlice.actions;
export default stockReportsSlice.reducer;
