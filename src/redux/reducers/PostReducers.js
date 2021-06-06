import {
  POST_GET_FAIL,
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_CREATE_SUCCESS,
  POST_CREATE_REQUEST,
  POST_CREATE_FAIL,
  NEW_POST_ADD,
  POST_DELETE_REQUEST,
  POST_DELETE_FAIL,
  POST_DELETE_SUCCESS,
  POST_DELETE_UPDATE
} from "../constants/PostConstants";

export const getPostsReduer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_GET_REQUEST:
      return { loading: true, posts: [] };
    case POST_GET_SUCCESS:
      return { loading: false, posts: action.payload };
    case POST_GET_FAIL:
      return { loading: false, error: action.payload };
    case NEW_POST_ADD: {
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    }
    case POST_DELETE_UPDATE:{
      return {
        ...state,
       posts: state.posts.filter(post => post._id !== action.payload)
      }
    }
    default:
      return state;
  }
};

export const createPostsReduer = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return { success: false, loading: true };
    case POST_CREATE_SUCCESS:
      return { loading: false, success: true, newPost: action.payload };
    case POST_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deletePostsReduer = (state = {}, action) => {
  switch (action.type) {
    case POST_DELETE_REQUEST:
      return { success: false, loading: true };
    case POST_DELETE_SUCCESS:
      return { loading: false, success: true};
    case POST_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

