import { createSlice } from "@reduxjs/toolkit";

export const productListSlice = createSlice({
  name: "productList",
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
  productListSlice.actions;

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    product: { reviews: [] },
  },
  reducers: {
    productDetailsRequest: (state) => {
      state.isLoading = true;
      // state.product = { reviews: [] };
    },
    productDetailsSuccess: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    },
    productDetailsFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsFail,
} = productDetailsSlice.actions;
