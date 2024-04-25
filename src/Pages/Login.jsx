import React, { useState } from "react";

import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { useAuth } from "../context/AuthContext";

import { auth, gitProvider, googleProvider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import { Img, Loader } from "../Index";

function Login() {
  const [user, setUser] = useState(null);

  const signInWithGitHub = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, gitProvider);

      setUser(result.user);

      console.log("git result  ", result.json());
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        console.log("User account exists with a different credential.");
      } else {
        console.error(error.message);
      }
    }
  };
  const signInWithGoogle = async () => {
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);

      console.log("google result  ", result.json());
    } catch (error) {
      console.error("Google authentication error:", error.message);
    }
  };

  return (
    <div className="flex w-full h-screen ">
      <div className="w-1/2 bg-blue-700 flex justify-center items-center">
        <div
          id="left"
          className="  bg-gray-500 rounded-xl border shadow-lg border-gray-200 bg-opacity-20 p-4 m-3"
        >
          <h2 className="text-center text-2xl font-bold leading-tight mt-5">
            Sign in to your account
          </h2>
          <div className=" flex flex-col items-center">
            <div
              className="bg-blue-600 hover:bg-blue-800 text-white rounded-lg text-center mt-7 w-1/2 cursor-pointer"
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
      </div>

      <div id="right" className="w-1/2">
        <div className="flex justify-center items-center h-screen bg-gray-200">
          <Img />
        </div>
      </div>
    </div>
  );
}

export default Login;
