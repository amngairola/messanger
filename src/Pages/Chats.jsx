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
    <div className="w-full h-full">
      {!user ? (
        <Loading />
      ) : (
        <>
          <Nav user={user} />
          <div className="h-full overflow-hidden  flex  items-center  justify-center mt-8">
            <div className="h-full overflow-y-auto xl:w-1/2 p-5  ">
              {messages?.map((message) => (
                <TweetBox key={message.id} message={message} />
              ))}
            </div>
            <span ref={scroll}></span>
          </div>
          <Message />
        </>
      )}
      ;
    </div>
  );
}
