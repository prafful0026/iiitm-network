import React, { useEffect } from "react";
import ChatCard from "../components/ChatCard";
import { useSelector, useDispatch } from "react-redux";
import { getRecentChats } from "../redux/actions/ChatActions";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import BackButton from "../components/BackButton";


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
      <BackButton/>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className={classes.root}>
      <h1>Recent chats</h1>
      <Paper style={{ padding: "40px 20px" }}>
          {recentChats.map((chat) => (
            <ChatCard chat={chat} />
          ))}
          </Paper>
        </div>
      )}
    </div>
  );
};

export default Chat;
