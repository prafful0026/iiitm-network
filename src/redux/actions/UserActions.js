import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/UserConstants.js";
import BASE_URL from "../../utils/baseUrl.js";

export const userLogin = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const user={email:email,password:password}
      const { data } = await axios.post(
        `${BASE_URL}/api/user/login`,
        {user:user},
        config
      );
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
    //   localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };