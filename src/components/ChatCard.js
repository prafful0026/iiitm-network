import React from "react";
import { Avatar, Grid} from "@material-ui/core";
import CalculateTime from "../utils/calculateTime";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ChatCard = ({ chat }) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const {
    messagesWith,
    name,
    profilePicUrl,
    lastMessage,
    date,
    lastMessageSender,
  } = chat;
  return (
    <div style={{ padding: 14, }} className='App'>
      <Grid container wrap='nowrap' spacing={2}>
        <Grid item>
          <Avatar alt='Remy Sharp' src={profilePicUrl} />
        </Grid>
        <Grid justifyContent='left' item xs zeroMinWidth>
          <Link style={{textDecoration:"none"}} to={`/chat/${messagesWith}`}>
            <h4 style={{ margin: 0, textAlign: "left",color:"black" ,textDecoration:"none"}}>
              {name.toUpperCase()}
            </h4>
          </Link>

          <p style={{ textAlign: "left" }}>
            {lastMessageSender === userInfo.userId
              ? "YOU : "
              : `${name.split(" ")[0].toUpperCase()} : `}
            {lastMessage.length > 50
              ? `${lastMessage.substring(0, 50)}...`
              : lastMessage}
          </p>
          <p style={{ textAlign: "left", color: "gray" }}>
            <CalculateTime createdAt={date} />
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default ChatCard;
