import { createSlice } from "@reduxjs/toolkit";
//For potential usage of redux
const initialState = {
  activeToken: {
    id: "",
    name: "",
    price: "",
    rarity: "",
    imagePath: "",
  },
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setActiveToken: (state, action) => {
      state.activeToken = action.payload;
    },
  },
});

export const { setActiveToken } = storeSlice.actions;

export default storeSlice;
