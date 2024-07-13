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
    removeToken: (state, action) => {
      state.isLogin = "";
      localStorage.removeItem("user");
    },
  },
});

export const { userDetails, userToken, removeToken } = userSlice.actions;

export default userSlice.reducer;
