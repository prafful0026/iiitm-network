
import Chat from "../models/ChatModel.js";

// GET ALL RECENT CHATS

export const recentChats= async (req, res) => {
  try {
    const { userId } = req;

    const user = await Chat.findOne({ user: userId }).populate("chats.messagesWith");
    // console.log(user)
    let chatsToBeSent = [];

    if (user.chats.length > 0) {
        chatsToBeSent = await user.chats.map(chat => ({
        messagesWith: chat.messagesWith._id,
        name: chat.messagesWith.name,
        profilePicUrl: chat.messagesWith.profilePicUrl,
        lastMessage: chat.messages[chat.messages.length - 1].msg,
        lastMessageSender:chat.messages[chat.messages.length - 1].sender,
        date: chat.messages[chat.messages.length - 1].date
      }));
    }

    return res.json(chatsToBeSent);
  } catch (error) {
    console.error(error);
    return res.status(500).send({message:"Server Error"});
  }
};
