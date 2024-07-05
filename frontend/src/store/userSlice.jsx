import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  isLogin: JSON.parse(localStorage.getItem("user")),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userDetails: (state, action) => {
      state.userInfo = action.payload;
    },
    userToken: (state, action) => {
      state.isLogin = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { userDetails, userToken } = userSlice.actions;

export default userSlice.reducer;
