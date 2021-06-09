import {
  CHATS_RECENT_FAIL,
  CHATS_RECENT_SUCCESS,
  CHATS_RECENT_REQUEST,
} from "../constants/ChatConstants";

import BASE_URL from "../../utils/baseUrl.js";
import axios from "axios";

export const getRecentChats = () => async (dispatch) => {
  try {
    dispatch({
      type: CHATS_RECENT_REQUEST,
    });
    const token = JSON.parse(localStorage.getItem("userInfo")).token;
    const Axios = axios.create({
      baseURL: `${BASE_URL}/api/chat`,
      headers: { Authorization: token },
    });
    const { data } = await Axios.get(`/`);

    dispatch({
      type: CHATS_RECENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CHATS_RECENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
