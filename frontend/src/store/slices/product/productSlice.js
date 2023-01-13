import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    products: [],
    error: null,
  },
  reducers: {
    productListRequest: (state, action) => {
      state.isLoading = true;
    },
    productListSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    productListFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { productListRequest, productListSuccess, productListFail } =
  productSlice.actions;
