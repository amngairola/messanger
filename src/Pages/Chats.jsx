import React, { useEffect, useRef, useState } from "react";
import { Button, Loading, Nav, Allusers, Message, TweetBox } from "../Index";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase";

import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";

import InfiniteScroll from "react-infinite-scroll-component";
import { useAuth } from "../context/AuthContext";

export default function Chats() {
  const navigateTo = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "thread"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages = [];
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full p-2">
      {!user ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <div className="h-1/2 w-full overflow-hidden  justify-center flex items-center">
            <div
              className="overflow-y-auto h-full"
              style={{ maxHeight: "calc(100vh - 15vh)" }}
            >
              {messages?.map((message) => (
                <TweetBox key={message.id} message={message} />
              ))}
            </div>
            <span ref={scroll}></span>
          </div>

          <Message scroll={scroll} />
        </>
      )}
    </div>
  );
}

//https://www.freecodecamp.org/news/building-a-real-time-chat-app-with-reactjs-and-firebase/
