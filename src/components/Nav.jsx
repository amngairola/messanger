import React from "react";

import "@reach/menu-button/styles.css";
import { Menubtn } from "../Index";
import { auth } from "../Firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import logo from "../assets/icone.png";
import HomeBefore from "../assets/home-before.svg";
import HomeAfter from "../assets/home-after.svg";
import EditAfter from "../assets/edit-after.svg";
import EditBefore from "../assets/edit-before.svg";
import Img from "./Img";

function Nav() {
  const { user } = useAuth();
  const navigateTo = useNavigate();

  const handleNavigateToEdit = () => {
    console.log("Clicked to edit");
    navigateTo("/edit");
  };

  const handleNavigateToChat = () => {
    console.log("Clicked to chat");
    navigateTo("/chats");
  };
  return (
    <div className="fixed inset-0 bg-surfaceDark bg-opacity-80 rounded-md w-full h-12 flex flex-row justify-between items-center px-4 sm:px-8 py-2 sm:py-4 z-10">
      <div className="flex items-center">
        <img
          src={logo}
          alt="user image"
          className="h-10 w-10 sm:h-10 sm:w-10 rounded-full border border-gray-300 p-1"
        />

        <span className="ml-2 text-white text-sm sm:text-base w-full">
          {user.displayName}
        </span>
      </div>
      {/* <div className="sm:w-full xl:w-50 flex items-center justify-center gap-10 mt-4 ">
        <button onClick={handleNavigateToChat} className="bg-red-400">
          <Img src={HomeBefore} alt={"home"} className="w-12" />
        </button>
        <button onClick={handleNavigateToEdit} className="bg-blue-400">
          <Img src={EditBefore} alt={"edit"} className="w-12" />
        </button>
      </div> */}

      <div className="flex items-center space-x-4">
        <Menubtn user={user} />
      </div>
    </div>
  );
}

export default Nav;
