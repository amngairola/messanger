import React, { useState } from "react";
import { Home } from "../Index";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { auth, gitProvider, googleProvider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const [user, setUser] = useState(null);

  const signInWithGitHub = async () => {
    try {
      const result = await signInWithPopup(auth, gitProvider);
      setUser(result.user);
    } catch (error) {
      console.error(error.message);
    }
  };
  const signInWithGoogle = async () => {
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Google authentication error:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center  w-full h-screen ">
      {user ? (
        <Home user={user} setUser={setUser} />
      ) : (
        <div className="  bg-gray-500 rounded-xl  w-1/2 border shadow-lg border-gray-200 bg-opacity-20 p-4 h-1/2">
          <h2 className="text-center text-2xl font-bold leading-tight mt-5">
            Sign in to your account
          </h2>
          <div className=" flex flex-col items-center">
            <div
              className="bg-blue-600 hover:bg-blue-800 txt-white rounded-lg text-center mt-7 w-1/2 cursor-pointer"
              onClick={signInWithGoogle}
            >
              <GoogleOutlined /> Sign In With Google
            </div>
            <br />
            <div
              className="bg-blue-800 hover:bg-blue-900 txt-white font-bold rounded-lg text-center cursor-pointer w-1/2"
              onClick={signInWithGitHub}
            >
              <FacebookOutlined /> Sign In With Git
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
