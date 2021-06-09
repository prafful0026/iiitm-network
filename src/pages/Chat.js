import React, { useEffect } from "react";
import ChatCard from "../components/ChatCard";
import { useSelector, useDispatch } from "react-redux";
import { getRecentChats } from "../redux/actions/ChatActions";
const Chat = () => {
  const dispatch = useDispatch();
  const { loading, error, recentChats } = useSelector(
    (state) => state.recentChats
  );
  useEffect(() => {
    dispatch(getRecentChats());
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {recentChats.map((chat) => (
            <ChatCard chat={chat} />
          ))}
        </>
      )}
    </div>
  );
};

export default Chat;
