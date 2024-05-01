import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import menu from "../assets/bx-menu.svg";

function Menubtn({ user }) {
  const { displayName, photoURL } = user;
  const navigate = useNavigate();
  const { signOut } = auth;
  const [showOptions, setShowOptions] = useState(false);

  const handleLogOut = async () => {
    await auth.signOut();
    navigate("/");
    setShowOptions(!showOptions);
  };

  return (
    <div className="mr-2 gap-3">
      <img
        src={menu}
        onClick={() => setShowOptions(!showOptions)}
        className="w-8 h-8 bg-white rounded-xl"
      />

      {showOptions && (
        <div
          className="absolute top-14 
        bg-background border border-gray-200 rounded-lg shadow-lg p-2"
        >
          <div className="mb-4">
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
    </div>
  );
}

export default Menubtn;
