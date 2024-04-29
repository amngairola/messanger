import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

import beforeLike from "../assets/before-like.svg";
import afterLike from "../assets/after-like.svg";
import replay from "../assets/bx-message-rounded.svg";
import { Img } from "../Index";

function TweetBox({ message }) {
  const messageStyle = {
    maxWidth: "400px",
    maxHeight: "200px",
    overflow: "hidden",
    wordWrap: "break-word",
  };

  const [like, setLike] = useState(true);

  return (
    <div className="flex top-0 items-start mt-5 lg:mt-5 lg:w-full m-5 lg:m-5 lg:p-3 bg-surfaceDark text-white relative  bg-opacity-30">
      <div className="flex items-center">
        <Img
          src={message.avatar}
          alt="user image"
          className="h-10 w-10 lg:h-14 lg:w-14 rounded-full border border-gray-200 p-1"
        />
      </div>
      <div className="flex flex-col ml-4 lg:ml-6 border-l border-lightGrayDark p-4">
        <div className="flex items-center mb-1">
          <p
            id="user-name"
            className="font-bold mr-1 lg:mr-2 text-sm lg:text-base"
          >
            {message.username}
          </p>
          <p id="tweet" className="text-gray-900 text-xs lg:text-sm">
            {message.time}
          </p>
        </div>
        <p className="text-sm lg:text-base text-gray-400" style={messageStyle}>
          {message.thread}
        </p>
        <Img
          src={message.image}
          alt={"message image"}
          className="mt-2 rounded-lg object-contain h-[200px] lg:h-[300px] w-full"
        />

        <div className="flex items-center mt-2">
          <div className="flex items-center mr-2">
            <Img
              src={like ? beforeLike : afterLike}
              className="p-3 m-3"
              onClick={() => setLike(!like)}
            />
            Like
          </div>
          <div className="flex items-center">
            <Img src={replay} className="p-3 m-3" />
            Comment
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetBox;
