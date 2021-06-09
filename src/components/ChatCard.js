import React from "react";
import ReactDOM from "react-dom";

import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import { Chat } from "@material-ui/icons";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const ChatCard=({chat})=> {
  console.log(chat)
  const {messageWith,name,profilePicUrl,lastMessage,date}=chat
  return (
    <div style={{ padding: 14 }} className="App">
      <h1>Recent chats</h1>
      <Paper style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={profilePicUrl} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{name.toUpperCase()}</h4>
            <p style={{ textAlign: "left" }}>
             {lastMessage}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              {date}
            </p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      </Paper>
    </div>
  );
}
export default ChatCard
