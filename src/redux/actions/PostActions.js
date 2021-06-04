import {
    POST_GET_FAIL,
    POST_GET_REQUEST,
    POST_GET_SUCCESS,
  } from "../constants/PostConstants";
  import { useSelector } from "react-redux";
  import BASE_URL from "../../utils/baseUrl.js";
  import axios from "axios"

 export const getPosts = (postCategory) => async (dispatch) => {
    try {
      dispatch({
        type: POST_GET_REQUEST,
      });
  const token=JSON.parse(localStorage.getItem("userInfo"))
  const Axios = axios.create({
    baseURL: `${BASE_URL}/api/post`,
    headers: { Authorization: token }
  });
     const {data}=await Axios.get(`/${postCategory}`)

      dispatch({
        type: POST_GET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: POST_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };