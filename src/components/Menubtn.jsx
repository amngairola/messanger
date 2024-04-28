import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import menu from "../assets/bx-menu.svg";

function Menubtn({ user }) {
  const { displayName, photoURL } = user;
  const navigateTo = useNavigate();
  const { signOut } = auth;
  const [showOptions, setShowOptions] = useState(false);

  const handleLogOut = async () => {
    await auth.signOut();
    navigateTo("/");
    console.log("clicked");
    setShowOptions(!showOptions);
  };

  return (
    <>
      <img
        src={menu}
        onClick={() => setShowOptions(!showOptions)}
        className="w-8 h-8"
      />

      {showOptions && (
        <div
          className="absolute top-14 right-1
        bg-background border border-gray-200 rounded-lg shadow-lg p-2  max-w-30 "
        >
          <div className="flex items-center justify-center mb-4">
            <img
              src={photoURL}
              alt="User Avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-800">{displayName}</span>
          </div>
          <button
            className="text-gray-800 hover:text-primary bg-red-300 rounded-lg cursor-pointer shadow-lg block w-full text-center"
            onClick={handleLogOut}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}

export default Menubtn;
