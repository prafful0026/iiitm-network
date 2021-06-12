import React, { useState } from "react";
import calculateTime from "../utils/calculateTime";
import "./messageStyles.css"

function Message({ message, user,profilePicUrl, bannerProfilePic,divRef}) {
//    console.log(message)
  const ifYouSender = message.sender === user;

  return (
    <div className="bubbleWrapper" ref={divRef}>
      <div
        className={ifYouSender ? "inlineContainer own" : "inlineContainer"}
      >
        <img
          className="inlineIcon"
          src={ifYouSender ?profilePicUrl : bannerProfilePic}
        />

        <div className={ifYouSender ? "ownBubble own" : "otherBubble other"}>
          {message.msg}
        </div>

      </div>

      <span className={ifYouSender ? "own" : "other"}>{calculateTime(message.date)}</span>
    </div>
  );
}

export default Message;