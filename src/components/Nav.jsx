import React from "react";

import "@reach/menu-button/styles.css";
import { Button, Menubtn } from "../Index";
import { auth } from "../Firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "boxicons";

function Nav() {
  const { user } = useAuth();
  const navigateTo = useNavigate();

  return (
    <div className=" bg-primary rounded-md w-full flex flex-row justify-between py-4 px-8">
      <div className="align-left ">
        <img
          src={user.photoURL}
          alt="user image"
          className="h-12 w-12 rounded-full border border-gray-300 p-1"
        />
      </div>
      <div className="align-right">
        <Menubtn user={user} />
      </div>
    </div>
  );
}

export default Nav;
