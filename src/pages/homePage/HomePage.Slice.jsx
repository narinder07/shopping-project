import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroProps: {
    label: "Here is the best products in best price",
  },
};

export const HomePageSlice = createSlice({
  name: "HomePageSlice",
  initialState,
  reducers: {
    hero: (state) => {
      state.heroProps;
    },
  },
});
export const { heroProps } = HomePageSlice.actions;
export default HomePageSlice.reducer;
