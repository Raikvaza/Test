import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCompanyData } from "../../../service/api";

export const fetchCompanyDataAsync = createAsyncThunk(
  "companyData/fetchCompanyData",
  async (symbol) => {
    try {
      const data = await fetchCompanyData(symbol);
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }
);
// When user chooses another company from SearchBar
export const updateCompanySymbol = createAsyncThunk(
  "companyData/updateCompanySymbol",
  async (symbol, { dispatch }) => {
    // Update the company symbol in the state
    dispatch(companyDataSlice.actions.updateSymbol(symbol));
  }
);
// Storing extra data for future optimization
const companyDataSlice = createSlice({
  name: "companyData",
  initialState: {
    logo: "",
    loading: false,
    error: null,
    detailsFetched: false,
    details: {
      companyName: "",
      symbol: "",
      latestPrice: 0,
      change: 0,
      changePercent: 0,
      previousClose: 0,
      open: 0,
      high: 0,
      low: 0,
      week52High: 0,
      week52Low: 0,
      latestVolume: 0,
      avgTotalVolume: 0,
      marketCap: 0,
      peRatio: 0,
      ytdChange: 0,
      primaryExchange: "",
      currency: "",
      latestTime: "",
    },
  },
  reducers: {
    updateSymbol: (state, action) => {
      state.detailsFetched = false;
      state.loading = true;
      state.error = null;
      state.logo = "";
      state.details = { ...state.details, symbol: action.payload }; // Update the symbol
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyDataAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanyDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.detailsFetched = true;
        state.details = action.payload.details;
        state.logo = action.payload.logo;
      })
      .addCase(fetchCompanyDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.detailsFetched = false;
        state.error = action.error.message;
      })
      .addCase(updateCompanySymbol.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default companyDataSlice.reducer;
