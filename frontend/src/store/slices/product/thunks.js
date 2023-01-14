import { productApi } from "../../../api/productApi";
import {
  productDetailsFail,
  productDetailsRequest,
  productDetailsSuccess,
  productListFail,
  productListRequest,
  productListSuccess,
} from "./productSlice";

export const getProducts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(productListRequest());
      const { data } = await productApi.get("/api/products");
      dispatch(productListSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(
        productListFail(
          error.respose && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
};

export const getProductDetail = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(productDetailsRequest());
      const { data } = await productApi.get(`/api/products/${id}`);
      dispatch(productDetailsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(
        productDetailsFail(
          error.respose && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
};

// { message: error.message, stack: error.stack }
