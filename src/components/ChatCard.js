import React from "react";
import { Divider, Avatar, Grid, Paper, makeStyles } from "@material-ui/core";
import CalculateTime from "../utils/calculateTime";
import { Link } from "react-router-dom";

const ChatCard = ({ chat }) => {
  console.log(chat);
  const { messagesWith, name, profilePicUrl, lastMessage, date } = chat;
  return (
    <div style={{ padding: 14 }} className='App'>
      <h1>Recent chats</h1>
      <Paper style={{ padding: "40px 20px" }}>
        <Grid container wrap='nowrap' spacing={2}>  
          <Grid item>
            <Avatar alt='Remy Sharp' src={profilePicUrl} />
          </Grid>
          <Grid justifyContent='left' item xs zeroMinWidth>
            <Link to={`/chat/${messagesWith}`}>
              <h4 style={{ margin: 0, textAlign: "left" }}>
                {name.toUpperCase()}
              </h4>
            </Link>

            <p style={{ textAlign: "left" }}>
              {lastMessage.length > 50
                ? `${lastMessage.substring(0, 50)}...`
                : lastMessage}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              <CalculateTime createdAt={date} />
            </p>
          </Grid>
        </Grid>
        <Divider variant='fullWidth' style={{ margin: "30px 0" }} />
      </Paper>
    </div>
  );
};
export default ChatCard;
