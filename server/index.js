import express from "express";
// import cors from "cors";
import dotenv from "dotenv";
import path from "path"
import connectDB from "./config/connectDB.js"
import userRoutes from "./routes/UserRoutes.js"
import studentRoutes from "./routes/StudentRoutes.js"
import postRoutes from "./routes/PostRoutes.js"
import chatRoutes from "./routes/ChatRoutes.js"
import http from 'http'
import { loadMessages,sendMsg,setMsgToUnread } from "./utils/MessagesUtils.js";
import {addUser,findConnectedUser} from "./utils/RoomUtils.js"
import { Server } from 'socket.io';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
// app.use(cors());

const server = http.createServer(app); 
const io = new Server(server,{
  cors: {
    origin: '*',
  }
});

io.on("connection", socket => {
  socket.on("join", async ({ userId }) => {
    const users = await addUser(userId, socket.id);
    setInterval(() => {
      socket.emit("connectedUsers", {
        users: users.filter(user => user.userId !== userId)
      });
    }, 10000);
  });
  socket.on("loadMessages", async ({ userId, messagesWith }) => {
    const { chat, error ,name,profilePicUrl} = await loadMessages(userId, messagesWith);
    !error ? socket.emit("messagesLoaded", { chat }) : socket.emit("noChatFound",{name,profilePicUrl});
  });
  socket.on("sendNewMsg", async ({ userId, msgSendToUserId, msg }) => {
    const { newMsg, error } = await sendMsg(userId, msgSendToUserId, msg);
    const receiverSocket = findConnectedUser(msgSendToUserId);

    if (receiverSocket) {
      // WHEN YOU WANT TO SEND MESSAGE TO A PARTICULAR SOCKET
      io.to(receiverSocket.socketId).emit("newMsgReceived", { newMsg });
    }
    //
    else {
      await setMsgToUnread(msgSendToUserId);
    }

    !error && socket.emit("msgSent", { newMsg });
  });
  // socket.on("join", async ({ userId }) => {
  //   const users = await addUser(userId, socket.id);
  //   console.log(users);

  //   setInterval(() => {
  //     socket.emit("connectedUsers", {
  //       users: users.filter(user => user.userId !== userId)
  //     });
  //   }, 10000);
  // });

  // socket.on("disconnect", () => removeUser(socket.id));
});


app.use("/api/user/", userRoutes);
app.use("/api/student/", studentRoutes);
app.use("/api/post/", postRoutes);
app.use("/api/chat/", chatRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*",(req,res)=>res.sendFile(path.resolve(__dirname,'..','build','index.html')));
} else {
  app.get("/", (req, res) => {
    res.send("yo");
  });
}

 {
  app.get("/", (req, res) => {
    res.send("yo");
  });
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`server on ${process.env.NODE_ENV} on ${PORT}`));
