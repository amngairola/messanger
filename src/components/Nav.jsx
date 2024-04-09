import React from "react";
import { Button } from "../Index";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigateTo = useNavigate();

  const handleLogOut = async () => {
    await auth.signOut();
    navigateTo("/");
  };

  return (
    <div className=" bg-red-400  rounded-md w-full flex flex-row justify-between py-4 px-8">
      <div className="align-left">logo</div>
      <div className="align-right">
        <Button child={"Logout"} onClick={handleLogOut} />
      </div>
    </div>
  );
}

export default Nav;
