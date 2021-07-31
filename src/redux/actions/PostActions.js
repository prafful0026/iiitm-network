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
  POST_DISLIKE_UPDATE,
  POST_GET_BYID_REQUEST,
  POST_GET_BYID_SUCCESS,
  POST_GET_BYID_FAIL,
  SINGLE_POST_DELETE_UPDATE,
  SINGLE_POST_DISLIKE_UPDATE,
  SINGLE_POST_LIKE_UPDATE,
  POST_COMMENT_REQUEST,
  POST_COMMENT_FAIL,
  POST_COMMENT_SUCCESS
} from "../constants/PostConstants";
import BASE_URL from "../../utils/baseUrl.js";
import axios from "axios";
import uploadPic from "../../utils/uploadPicToCloudinary";

export const getPosts =
  (postCategory, isFavourite = false,isUserById=false) =>
  async (dispatch) => {
    try {
      dispatch({
        type: POST_GET_REQUEST,
      });
      const token = JSON.parse(localStorage.getItem("userInfo")).token;
      const Axios = axios.create({
        baseURL: `${BASE_URL}/api/post`,
        headers: { Authorization: token },
      });
      let res;
      if(isUserById)
      {
        res = await Axios.get(`/user/${postCategory}`);
      }
      else if (isFavourite) {
        res = await Axios.get(`/profile/favourite`);
      } else {
        res = await Axios.get(`/category/${postCategory}`);
      }

      dispatch({
        type: POST_GET_SUCCESS,
        payload: res.data,
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

export const createPost =
  ({ postCategory, postTitle, postDesc, media }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: POST_CREATE_REQUEST,
      });
      const token = JSON.parse(localStorage.getItem("userInfo")).token;
      const Axios = axios.create({
        baseURL: `${BASE_URL}/api/post`,
        headers: { Authorization: token },
      });
      let picUrl;
      if (media) picUrl = await uploadPic(media);
      if (!picUrl && media) {
        dispatch({
          type: POST_CREATE_FAIL,
          payload: "IMAGE UPLOAD FAILED",
        });
      } else {
        const { data } = await Axios.post(`/create`, {
          postCategory,
          postTitle,
          postDesc,
          picUrl,
        });
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
  };

export const deletePost = (postId,isFavourite=false,isSinglePost) => async (dispatch) => {
  try {
    dispatch({
      type: POST_DELETE_REQUEST,
    });
    const token = JSON.parse(localStorage.getItem("userInfo")).token;
    const Axios = axios.create({
      baseURL: `${BASE_URL}/api/post`,
      headers: { Authorization: token },
    });

    await Axios.delete(`/${postId}`);
    dispatch({
      type: POST_DELETE_SUCCESS,
    });
    if(!isSinglePost)
    dispatch({ type: POST_DELETE_UPDATE, payload:{ postId ,isFavourite}});
    else
    dispatch({type:SINGLE_POST_DELETE_UPDATE,payload:{ postId }})
  } catch (error) {
    dispatch({
      type: POST_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const likePost = (postId,isFavourite,isSinglePost) => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIKE_REQUEST,
    });
    const token = JSON.parse(localStorage.getItem("userInfo")).token;
    const userId = JSON.parse(localStorage.getItem("userInfo")).userId;
    const Axios = axios.create({
      baseURL: `${BASE_URL}/api/post`,
      headers: { Authorization: token },
    });

    const { data } = await Axios.put(`/like/${postId}`);
    console.log(data)
    dispatch({
      type: POST_LIKE_SUCCESS,
    });
    // console.log(isSinglePost)
    if(isSinglePost)
    {
      if (!data.isLiked)
      dispatch({ type: SINGLE_POST_LIKE_UPDATE, payload: { postId, userId } });
    if (data.isLiked)
      dispatch({ type: SINGLE_POST_DISLIKE_UPDATE, payload: { postId, userId ,isFavourite} });
    }
    else
    {
      if (!data.isLiked)
      dispatch({ type: POST_LIKE_UPDATE, payload: { postId, userId } });
    if (data.isLiked)
      dispatch({ type: POST_DISLIKE_UPDATE, payload: { postId, userId ,isFavourite} });
    }
    
  } catch (error) {
    dispatch({
      type: POST_LIKE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPostById = (postId) => async (dispatch) => {
  try {
    dispatch({
      type: POST_GET_BYID_REQUEST,
    });
    const token = JSON.parse(localStorage.getItem("userInfo")).token;
    const userId = JSON.parse(localStorage.getItem("userInfo")).userId;
    const Axios = axios.create({
      baseURL: `${BASE_URL}/api/post`,
      headers: { Authorization: token },
    });

    const { data } = await Axios.get(`/${postId}`);
    dispatch({
      type: POST_GET_BYID_SUCCESS,
      payload:data
    });
  } catch (error) {
    dispatch({
      type: POST_GET_BYID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const commentOnPost = (text,postId) => async (dispatch) => {
  try {
    dispatch({
      type: POST_COMMENT_REQUEST,
    });
    // console.log(text)
    const token = JSON.parse(localStorage.getItem("userInfo")).token;
    const Axios = axios.create({
      baseURL: `${BASE_URL}/api/post`,
      headers: { Authorization: token },

    });
   
    
    const { data } = await Axios.post(`/comment/${postId}`,{text});
    dispatch({
      type: POST_COMMENT_SUCCESS,
      payload:{newComment:data,postId}
    });
  } catch (error) {
    dispatch({
      type: POST_COMMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};