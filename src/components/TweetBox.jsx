import React from "react";
import { useAuth } from "../context/AuthContext";

function TweetBox({ message }) {
  const { user } = useAuth();

  const messageStyle = {
    // Adjust the max-width and max-height based on your design preferences
    maxWidth: "400px",
    maxHeight: "200px",
    overflow: "hidden",
    wordWrap: "break-word",
  };

  return (
    <div className="flex items-start mt-5 sm:w-1/2 rounded-xl  lg:w-full m-5  p-3 bg-background text-black">
      <img
        src={message.avatar}
        alt="user image"
        className="h-14 w-14 rounded-full border border-gray-200 p-1 mr-4"
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex items-center justify-between">
          <p id="user-name" className="font-bold mr-2">
            {message.username}
          </p>
          <p id="tweet" className="text-gray-900">
            {message.time}
          </p>
        </div>
        <p className="mt-2" style={messageStyle}>
          {message.thread}
        </p>
      </div>
    </div>
  );
}

export default TweetBox;
