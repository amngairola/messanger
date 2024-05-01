import { Button, ErrorDialog, Img, ProgressBar } from "../Index";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { auth, db } from "../Firebase";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import image from "../assets/bxs-file-image.svg";

function Message() {
  const { user } = useAuth();

  const [tweet, setTweet] = useState("");
  const [error, setError] = useState({
    message: "",
  });
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  const SendTweet = async (event) => {
    event.preventDefault();
    if (tweet.trim() === "") {
      setError({ message: error });

      setOpenErrorDialog(true);
    }
    console.log(tweet);

    const { uid, displayName, photoURL } = auth.currentUser;
    const storage = getStorage();
    const storageRef = ref(storage, `images/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",

      (snapshot) => {
        // Calculate progress percentage
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Error uploading file:", error);
      },
      () => {
        // Upload completed successfully
        getDownloadURL(storageRef).then((downloadURL) => {
          const threadRef = collection(db, "thread");
          setDoc(doc(threadRef, `${tweet}`), {
            avatar: photoURL,
            createdAt: serverTimestamp(),
            image: downloadURL,
            thread: tweet,
            userId: uid,
            username: displayName,
          });
        });

        // Reset form and progress bar
        setTweet("");
        setFile(null);
        setUploadProgress(0);
      }
    );
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
        className="w-full lg:w-1/2 gap-3 flex p-2 bg-white rounded-xl m-4"
        onSubmit={(e) => SendTweet(e)}
      >
        <input
          id="messageIP"
          className="border border-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-2 rounded-md w-full text-gray-700"
          placeholder="What is happening?!"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />
        <label
          htmlFor="fileInput"
          className="flex items-center rounded-lg cursor-pointer transition duration-300 ease-in-out"
        >
          <img src={image} alt="img" className="" />
        </label>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          accept="image/*"
          onChange={handleFile}
        />

        <div className="flex gap-2 p-2">
          <Button type={"submit"} child={"Post"} style={"bg-primary"} />
        </div>
      </form>
      {file && (
        <div className="fixed top-12 left-0 w-screen h-2 bg-surfaceDark opacity-50 z-50">
          <div
            className="h-full bg-lightGrayDark rounded"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Message;
