import { Button, ErrorDialog } from "../Index";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { auth, db } from "../Firebase";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
function Message() {
  const { user } = useAuth();

  const [tweet, setTweet] = useState("");
  const [error, setError] = useState({
    message: "",
  });
  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  const SendTweet = async (event) => {
    event.preventDefault();
    if (tweet.trim() === "") {
      setError({ message: error });

      setOpenErrorDialog(true);
    }
    console.log(tweet);
    const { uid, displayName, photoURL } = auth.currentUser;

    await addDoc(collection(db, "thread"), {
      avatar: photoURL,
      createdAt: serverTimestamp(),
      thread: tweet,
      userId: uid,
      username: displayName,
    });
    setTweet("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleCloseErrorDialog = () => {
    setOpenErrorDialog(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center">
      {openErrorDialog && (
        <ErrorDialog
          open={openErrorDialog}
          error={error}
          onClose={handleCloseErrorDialog}
        />
      )}

      <img
        src={user.photoURL}
        alt="user image"
        className="h-14 w-14 rounded-full border border-gray-300 p-1"
      />

      <form
        className="w-full lg:w-1/2 gap-3 flex p-2"
        onSubmit={(e) => SendTweet(e)}
      >
        <input
          id="messageIP"
          className="border border-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-2 rounded-md w-full text-gray-700"
          placeholder="What is happening?!"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />

        <div className="flex gap-2 p-2">
          <Button type={"submit"} child={"Post"} style={"bg-primary"} />
        </div>
      </form>
    </div>
  );
}

export default Message;
