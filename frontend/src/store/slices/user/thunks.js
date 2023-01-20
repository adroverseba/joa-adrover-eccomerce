import { productApi } from "../../../api/productApi";
import {
  userLoginFail,
  userLoginRequest,
  userLoginSucces,
  userLogout,
} from "./userSlice";

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      dispatch(userLoginRequest());
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await productApi.post(
        "/api/users/login",
        { email, password },
        config
      );

      dispatch(userLoginSucces(data));

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      // console.log(error);
      dispatch(userLoginFail(error.response.data.message));
    }
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    localStorage.removeItem("userInfo");
    dispatch(userLogout());
  };
};
