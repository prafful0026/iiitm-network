import {
    CHATS_RECENT_FAIL,
    CHATS_RECENT_SUCCESS,
    CHATS_RECENT_REQUEST,
  } from "../constants/ChatConstants";


  export const recentChatsReducer = (state = {recentChats:[]}, action) => {
    switch (action.type) {
      case CHATS_RECENT_REQUEST:
        return { loading: true };
      case CHATS_RECENT_SUCCESS:
        return { loading: false, recentChats:action.payload };
      case CHATS_RECENT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
    