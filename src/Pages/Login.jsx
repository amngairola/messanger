import React, { useState } from "react";

import { useAuth } from "../context/AuthContext";

import { auth, gitProvider, googleProvider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import { ErrorDialog, Img } from "../Index";

function Login() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  const signInWithGitHub = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, gitProvider);

      setUser(result.user);

      console.log("git result  ", result.json());
    } catch (error) {
      setError(error);
      setOpenErrorDialog(true);
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
      setError(error);
      setOpenErrorDialog(true);
    }
  };
  const handleCloseErrorDialog = () => {
    setOpenErrorDialog(false);
  };

  return (
    <div className="flex w-full h-screen ">
      <div className="w-1/2 bg-primary flex justify-center items-center">
        <div
          id="left"
          className="  bg-gray-500 rounded-xl border shadow-lg border-gray-200 bg-opacity-20 p-4 m-3"
        >
          {openErrorDialog && (
            <ErrorDialog
              open={openErrorDialog}
              error={error}
              onClose={handleCloseErrorDialog}
            />
          )}
          <h2 className="text-center text-2xl font-bold leading-tight mt-5">
            Connect With Others
          </h2>
          <div className=" flex flex-col items-center">
            <div
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-center mt-7 cursor-pointer  w-60 h-10  p-2 flex justify-center"
              onClick={signInWithGoogle}
            >
              <box-icon name="google" type="logo"></box-icon>{" "}
              <p className="pl-2">Continue With Google</p>
            </div>
            <br />
            <div
              className="bg-background hover:bg-blue-900 text-black  rounded-lg text-center cursor-pointer w-60 h-10 flex p-2 justify-center items-center"
              onClick={signInWithGitHub}
            >
              <box-icon className="w-8" type="logo" name="github"></box-icon>{" "}
              <p className="pl-2"> Continue With Git</p>
            </div>
          </div>
          <p className="text-center mt-5">
            By creating an account you agree to our terms and conditions
          </p>
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
