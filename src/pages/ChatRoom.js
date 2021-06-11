import React, { useState, useEffect } from "react";
import ChatBanner from "../components/ChatBanner";
import { makeStyles } from "@material-ui/core";
import MessageInput from "../components/MessageInput";
import Message from "../components/Message";
import io from "socket.io-client";
import BASE_URL from "../utils/baseUrl";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const createStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 1000,
    margin: "auto",
  },
});
const ChatRoom = () => {
  const params = useParams();
  const { userInfo } = useSelector((state) => state.userLogin);
  // console.log(params)
  // const chatWithId=params.userId

  const classes = createStyles();
  const [messages, setMessages] = useState([]);
  const [bannerData, setBannerData] = useState({ name: "", profilePicUrl: "" });

  useEffect(() => {
    const socket = io(BASE_URL);
    socket.emit("hello", { name: "papa chaudhary" });
    socket.on("helloThere", ({ msg }) => console.log(msg));
    return () => {};
  }, []);
  useEffect(() => {
    const socket = io(BASE_URL);
    socket.emit("loadMessages", {
      userId: userInfo.userId,
      messagesWith: params.userId,
    });
    socket.on("messagesLoaded", async ({ chat }) => {
      // console.log("hi")
      setMessages(chat.messages);
      setBannerData({
        name: chat.messagesWith.name,
        profilePicUrl: chat.messagesWith.profilePicUrl,
      });
    });
    socket.on("noChatFound", async ({ name, profilePicUrl }) => {
      setBannerData({ name, profilePicUrl });
      setMessages([]);
    });
  }, []);
  return (
    <div>
      <div
        className={classes.root}
        style={{
          overflow: "auto",
          overflowX: "hidden",
          maxHeight: "35rem",
          //   height: "35rem",
          backgroundColor: "whitesmoke",
        }}
      >
        <div style={{ position: "sticky", top: "0" }}>
          <ChatBanner
            name={bannerData.name}
            profilePicUrl={bannerData.profilePicUrl}
          />
        </div>
        {messages.length > 0 ? (
          messages.map((message, i) => <Message text={message.msg} />)
        ) : (
          <Message text='SAY HI' />
        )}
        <div style={{ position: "sticky", bottom: "0" }}>
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
