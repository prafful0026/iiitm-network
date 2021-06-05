import {
    POST_GET_FAIL,
    POST_GET_REQUEST,
    POST_GET_SUCCESS,
    POST_CREATE_SUCCESS,
    POST_CREATE_REQUEST,
    POST_CREATE_FAIL
  } from "../constants/PostConstants";
  import BASE_URL from "../../utils/baseUrl.js";
  import axios from "axios"
  const token=JSON.parse(localStorage.getItem("userInfo"))
  const Axios = axios.create({
    baseURL: `${BASE_URL}/api/post`,
    headers: { Authorization: token }
  });
 export const getPosts = (postCategory) => async (dispatch) => {
    try {
      dispatch({
        type: POST_GET_REQUEST,
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

  export const createPost=({postCategory,postTitle,postDesc})=>async(dispatch)=>{
    try {
        dispatch({
          type: POST_CREATE_REQUEST,
        });
  
       const {data}=await Axios.post(`/create`,{postCategory,postTitle,postDesc})
      //  console.log(data)
  
        dispatch({
          type: POST_CREATE_SUCCESS,
          payload:data
        });
      } catch (error) {
        dispatch({
          type: POST_CREATE_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }

  }