import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    userInfo: userInfoFromStorage,
    error: null,
  },
  reducers: {
    userLoginRequest: (state) => {
      state.loading = true;
    },
    userLoginSucces: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.error = null;
    },
    userLoginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userLogout: (state, action) => {
      state.userInfo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLoginRequest, userLoginSucces, userLoginFail, userLogout } =
  userSlice.actions;
