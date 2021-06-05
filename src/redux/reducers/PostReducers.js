import {
  POST_GET_FAIL,
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
      POST_CREATE_SUCCESS,
    POST_CREATE_REQUEST,
    POST_CREATE_FAIL,
    NEW_POST_ADD
} from "../constants/PostConstants";

export const getPostsReduer = (state = {posts:[]}, action) => {
  switch (action.type) {
    case POST_GET_REQUEST:
      return { loading: true,posts:[] };
    case POST_GET_SUCCESS:
      return { loading: false, posts:action.payload};
    case POST_GET_FAIL:
      return { loading: false, error: action.payload };
      case NEW_POST_ADD:{
       return{
         ...state,posts:[action.payload,...state.posts]
       }
      }
    default:
      return state;
  }
};

export const createPostsReduer = (state = {}, action) => {
    switch (action.type) {
      case POST_CREATE_REQUEST:
        return {success:false,loading: true };
      case POST_CREATE_SUCCESS:
        return { loading: false,success:true,newPost:action.payload};
      case POST_CREATE_FAIL:
        return {loading: false, error: action.payload };
      default:
        return state;
    }
  };