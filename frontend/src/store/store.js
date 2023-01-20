import { configureStore } from "@reduxjs/toolkit";
import { productDetailsSlice, productListSlice } from "./slices/product";
import { cartSlice } from "./slices/cart/cartSlice";
import { userRegisterSlice, userSlice } from "./slices/user";

export const store = configureStore({
  reducer: {
    productList: productListSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    cart: cartSlice.reducer,
    userLogin: userSlice.reducer,
    userRegister: userRegisterSlice.reducer,
  },
});
