import {
  POST_GET_FAIL,
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
} from "../constants/PostConstants";

export const getPostsReduer = (state = {posts:[]}, action) => {
  switch (action.type) {
    case POST_GET_REQUEST:
      return { loading: true,posts:[] };
    case POST_GET_SUCCESS:
      return { loading: false, posts:action.payload  };
    case POST_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
