import React, { useEffect } from "react";
import ChatCard from "../components/ChatCard";
import { useSelector, useDispatch } from "react-redux";
import { getRecentChats } from "../redux/actions/ChatActions";
import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      maxWidth: 1000,
      margin: "auto",
    },
  });
const Chat = () => {
  const classes=createStyles()
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
        <h1>Loading....</h1>
      ) : (
        <div className={classes.root}>
          {recentChats.map((chat) => (
            <ChatCard chat={chat} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Chat;
