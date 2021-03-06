import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/UserReducers";
import {
  getPostsReduer,
  createPostsReduer,
  deletePostsReduer,
  likePostsReduer,
  getPostReduer
} from "./reducers/PostReducers";
import {recentChatsReducer} from "./reducers/ChatReducers" 

const reducer = combineReducers({
  userLogin: userLoginReducer,
  postsByCategory: getPostsReduer,
  postCreate: createPostsReduer,
  postDelete: deletePostsReduer,
  postLike: likePostsReduer,
  recentChats:recentChatsReducer,
  postById:getPostReduer
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
