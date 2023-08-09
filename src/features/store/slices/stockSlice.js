import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStockReports } from "../../../service/api";

export const fetchStockReportsAsync = createAsyncThunk(
  "stockReports/fetchStockReports",
  async () => {
    const data = await fetchStockReports();
    return data;
  }
);

const stockReportsSlice = createSlice({
  name: "stockReports",
  initialState: {
    reports: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockReportsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockReportsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.reports = action.payload;
      })
      .addCase(fetchStockReportsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default stockReportsSlice.reducer;
