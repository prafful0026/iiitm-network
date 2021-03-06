import React, { useEffect } from "react";
import ChatCard from "../components/ChatCard";
import { useSelector, useDispatch } from "react-redux";
import { getRecentChats } from "../redux/actions/ChatActions";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import PageHeader from "../components/PageHeader"
import Error from "../components/Error";
import Loader from "../components/Loader";
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
    if(recentChats?.length===0)
    dispatch(getRecentChats());
  }, [dispatch,recentChats?.length]);
  return (
    <div>
      <Error error={error} />
      <PageHeader title="Recent Chats"/>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div className={classes.root}>
          {recentChats.map((chat) => (
      <Paper elevation={14} style={{ padding: "20px",marginBottom:"10px" }}>
            <ChatCard chat={chat} />
          </Paper>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chat;
