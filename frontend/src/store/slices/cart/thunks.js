import { productApi } from "../../../api/productApi";
import { cartAddItem, cartRemoveItem } from "./cartSlice";

export const addToCart = (id, qty) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await productApi.get(`/api/products/${id}`);
      dispatch(
        cartAddItem({
          product: data._id,
          name: data.name,
          image: data.image,
          price: data.price,
          countInStock: data.countInStock,
          qty,
        })
      );
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFromCart = (id) => {
  return async (dispatch, getState) => {
    dispatch(cartRemoveItem(id));
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};
