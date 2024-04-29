import React from "react";
import HomeBefore from "../assets/home-before.svg";
import HomeAfter from "../assets/home-after.svg";
import EditAfter from "../assets/edit-after.svg";
import EditBefore from "../assets/edit-before.svg";
import Img from "./Img";

function NavEle() {
  return (
    <div className="flex flex-row justify-center gap-7 w-20 h-10">
      <Img src={HomeBefore} alt={"home"} className="" />
      <Img src={EditBefore} alt={"edit"} className="" />
    </div>
  );
}

export default NavEle;
