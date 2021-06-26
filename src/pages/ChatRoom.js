import React, { useState, useEffect, useRef } from "react";
import ChatBanner from "../components/ChatBanner";
import MessageInput from "../components/MessageInput";
import Message from "../components/Message";
import io from "socket.io-client";
import BASE_URL from "../utils/baseUrl";
import { useParams,Redirect,useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import Error from "../components/Error";


const scrollDivToBottom = (divRef) => {
  divRef.current && divRef.current.scrollIntoView({ behaviour: "smooth" });
};

const ChatRoom = () => {
  const history=useHistory()
  const socket = useRef();
  const params = useParams();
  const { userInfo } = useSelector((state) => state.userLogin);
  const divRef = useRef();
  const [messages, setMessages] = useState([]);
  const [bannerData, setBannerData] = useState({ name: "", profilePicUrl: "" });
  const [error, setError] = useState(null);

  useEffect(()=>{
    if(params.userId===userInfo.userId)
     history.replace("/")
  })
  useEffect(() => {
    if (!socket.current) {
      socket.current = io(BASE_URL);
    }
    if (socket.current) {
      socket.current.emit("join", { userId: userInfo.userId });
    }

    return () => {
      if (socket.current) {
        socket.current.disconnect();
        socket.current.off();
      }
    };
  }, []);

  useEffect(() => {
    const loadMessages = () => {
      socket.current.emit("loadMessages", {
        userId: userInfo.userId,
        messagesWith: params.userId,
      });

      socket.current.on("messagesLoaded", async ({ chat }) => {
        setMessages(chat.messages);
        setBannerData({
          name: chat.messagesWith.name,
          profilePicUrl: chat.messagesWith.profilePicUrl,
        });
        divRef.current && scrollDivToBottom(divRef);
      });

      socket.current.on("noChatFound", async ({ name, profilePicUrl }) => {
        if(name&&profilePicUrl)
        setBannerData({ name, profilePicUrl });
        else{
          setError("Invalid User")
        }
        setMessages([]);
      });
    };

    if (socket.current) loadMessages();
  }, []);
  const sendMsg = (msg) => {
    if (socket.current) {
      socket.current.emit("sendNewMsg", {
        userId: userInfo.userId,
        msgSendToUserId: params.userId,
        msg,
      });
    }
  };
  useEffect(() => {
    if (socket.current) {
      socket.current.on("msgSent", ({ newMsg }) => {
        if (newMsg.receiver === params.userId) {
          setMessages((prev) => [...prev, newMsg]);
        }
      });

      socket.current.on("newMsgReceived", async ({ newMsg }) => {
        if (newMsg.sender === params.userId) {
          setMessages((prev) => [...prev, newMsg]);
          divRef.current && scrollDivToBottom(divRef);
        }
      });
    }
  }, []);
  useEffect(() => {
    messages.length > 0 && scrollDivToBottom(divRef);
  }, [messages]);

  return (
    <div>
      <BackButton />
      {error ? (
        <Error error={error} />
      ) : (
        <div
          style={{
            overflow: "auto",
            overflowX: "hidden",
            maxHeight: "35rem",
            maxWidth: "1000px",
            margin: "auto",
            backgroundColor: "whitesmoke",
          }}
        >
          <div style={{ position: "sticky", top: "0" }}>
            <ChatBanner
              name={bannerData.name}
              profilePicUrl={bannerData.profilePicUrl}
            />
          </div>
          {messages.length > 0 &&
            messages.map((message) => (
              <Message
                divRef={divRef}
                message={message}
                bannerProfilePic={bannerData.profilePicUrl}
                user={userInfo.userId}
                profilePicUrl={userInfo.userProfilePic}
              />
            ))}
          <div style={{ position: "sticky", bottom: "0" }}>
            <MessageInput sendMsg={sendMsg} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
