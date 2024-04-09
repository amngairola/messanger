import React, { useEffect, useState } from "react";
import { Button, Nav } from "../Index";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../Firebase";

import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { ArrowsAltOutlined } from "@ant-design/icons";

export default function Chats() {
  const navigateTo = useNavigate();
  const { user } = useAuth();
  console.log("getting user from user auth ", user);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigateTo("/");
    }

    const getFile = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
      } catch (error) {
        console.error("Error fetching file:", error);
        return null;
      }
    };

    fetch("https://api.chatengine.io/users/me/", {
      method: "GET",
      headers: {
        "project-id": "d79c8c4f-f783-4602-9552-99c68169cb6e",
        "user-name": user.email,
        "user-secret": user.uid,
      },
    })
      .then((response) => {
        setLoading(false);
        console.log(
          "API call successful",
          user.email,
          user.uid,
          user,
          response.json()
        );
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);

        // https://rest.chatengine.io/

        // let formData = new FormData();
        // formData.append("email", user.email);
        // formData.append("username", user.email);
        // formData.append("secret", user.authToken);

        // getFile(user.photoURL).then((avatar) => {
        //   formData.append("avatar", avatar, avatar.name);

        //   axios
        //     .post("https://api.chatengine.io/users/", formData, {
        //       headers: {
        //         "private-key": "f485d95b-db30-4d11-a7f1-edf3d0ff9848",
        //       },
        //     })
        //     .then(() => {
        //       console.log("User data sent successfully", formData);
        //     })
        //     .catch((err) => console.error("Error sending user data:", err));
        // });
      });
  }, [user, navigateTo]);

  return (
    <div className="w-full p-2">
      {/* main outer parent */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Nav />
          <ChatEngine
            height="calc(100vh - 66px)"
            projectID="d79c8c4f-f783-4602-9552-99c68169cb6e"
            userName={user.email}
            userSecret={user.uid}
          />
        </div>
      )}
    </div>
  );
}
