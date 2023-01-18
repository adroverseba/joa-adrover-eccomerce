import { configureStore } from "@reduxjs/toolkit";
import { productDetailsSlice, productListSlice } from "./slices/product";
import { cartSlice } from "./slices/cart/cartSlice";

export const store = configureStore({
  reducer: {
    productList: productListSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
