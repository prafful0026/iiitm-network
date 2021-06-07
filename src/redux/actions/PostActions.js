import {
    POST_GET_FAIL,
    POST_GET_REQUEST,
    POST_GET_SUCCESS,
    POST_CREATE_SUCCESS,
    POST_CREATE_REQUEST,
    POST_CREATE_FAIL,
    POST_DELETE_REQUEST,
    POST_DELETE_FAIL,
    POST_DELETE_SUCCESS,
    POST_DELETE_UPDATE,
    NEW_POST_ADD,
    POST_LIKE_UPDATE,
    POST_LIKE_REQUEST,
    POST_LIKE_SUCCESS,
    POST_LIKE_FAIL,
    POST_DISLIKE_UPDATE
  } from "../constants/PostConstants";
  import BASE_URL from "../../utils/baseUrl.js";
  import axios from "axios"
  import uploadPic from "../../utils/uploadPicToCloudinary";

 export const getPosts = (postCategory) => async (dispatch) => {
    try {
      dispatch({
        type: POST_GET_REQUEST,
      });
      const token=JSON.parse(localStorage.getItem("userInfo")).token
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

  export const createPost=({postCategory,postTitle,postDesc,media})=>async(dispatch)=>{
    try {
        dispatch({
          type: POST_CREATE_REQUEST,
        });
        const token=JSON.parse(localStorage.getItem("userInfo")).token
        const Axios = axios.create({
          baseURL: `${BASE_URL}/api/post`,
          headers: { Authorization: token }
        });
        let picUrl;
        if(media)
        picUrl=await uploadPic(media)
       if(!picUrl&&media)
       {
        dispatch({
          type: POST_CREATE_FAIL,
          payload:"IMAGE UPLOAD FAILED"
        });
       }
       else
       {
        const {data}=await Axios.post(`/create`,{postCategory,postTitle,postDesc,picUrl})
        //  console.log(data)
        
          dispatch({
            type: POST_CREATE_SUCCESS,
          });
          
          dispatch({ type: NEW_POST_ADD, payload: data });
       }
      
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

  export const deletePost=(postId)=>async(dispatch)=>{
     try {
      dispatch({
        type: POST_DELETE_REQUEST,
      });
      const token=JSON.parse(localStorage.getItem("userInfo")).token
      const Axios = axios.create({
        baseURL: `${BASE_URL}/api/post`,
        headers: { Authorization: token }
      });

      await Axios.delete(`/${postId}`)
        dispatch({
          type: POST_DELETE_SUCCESS,
        });
        dispatch({type:POST_DELETE_UPDATE,payload:postId})
  
       
     } catch (error) {
      dispatch({
        type: POST_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
     }
  }

  export const likePost=(postId)=>async(dispatch)=>{
    try {
      dispatch({
        type: POST_LIKE_REQUEST,
      });
      const token=JSON.parse(localStorage.getItem("userInfo")).token
      const userId=JSON.parse(localStorage.getItem("userInfo")).userId
      const Axios = axios.create({
        baseURL: `${BASE_URL}/api/post`,
        headers: { Authorization: token }
      });

      const {data}=await Axios.put(`/like/${postId}`)
        dispatch({
          type: POST_LIKE_SUCCESS,
        });
        if(!data.isLiked)
        dispatch({type:POST_LIKE_UPDATE,payload:{postId,userId}})
        if(data.isLiked)
        dispatch({type:POST_DISLIKE_UPDATE,payload:{postId,userId}})

  
       
     } catch (error) {
      dispatch({
        type: POST_LIKE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
     }
  }