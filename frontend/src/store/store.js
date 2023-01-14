import { configureStore } from "@reduxjs/toolkit";
import { productDetailsSlice, productListSlice } from "./slices/product";

export const store = configureStore({
  reducer: {
    products: productListSlice.reducer,
    productDetail: productDetailsSlice.reducer,
  },
});
