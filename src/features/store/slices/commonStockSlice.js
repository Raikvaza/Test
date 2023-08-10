import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStockData } from "../../../service/api";

// I fetch common Stock data from the API to get symbols and company data
export const fetchCommonStocksAsync = createAsyncThunk(
  "commonStock/fetchCommonStocks",
  async () => {
    try {
      const data = await fetchStockData();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
// Store common stock companies' data in redux
const commonStockSlice = createSlice({
  name: "commonStock",
  initialState: {
    data: [],
    loading: false,
    error: null,
    hasFetched: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommonStocksAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommonStocksAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCommonStocksAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commonStockSlice.reducer;
