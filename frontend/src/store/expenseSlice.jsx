import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
  },
});

export const { increment } = expenseSlice.actions;

export default expenseSlice.reducer;
