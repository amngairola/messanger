import React, { useEffect, useRef, useState } from "react";
import { Button, Loading, Nav, Message, TweetBox } from "../Index";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase";

import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  doc,
  getDoc,
} from "firebase/firestore";

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

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const fetchedMessages = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMessages(fetchedMessages);
      },
      (error) => {
        console.error("Error fetching messages:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full h-full">
      <Nav user={user} />
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-xl p-5 overflow-y-auto">
          {messages?.map((message) => (
            <TweetBox key={message.id} message={message} />
          ))}
        </div>
      </div>
      <Message />
    </div>
  );
}
