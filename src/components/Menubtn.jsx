import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { useAuth } from "../context/AuthContext";

function Menubtn({ user }) {
  const { displayName } = user;
  const navigateTo = useNavigate();
  const { signOut } = auth;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogOut = async () => {
    console.log("clicked");
    await signOut();
    navigateTo("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex flex-col gap-6 bg-red-500">
      <div onClick={toggleDropdown} className="cursor-pointer">
        {displayName}
      </div>
      {dropdownOpen && (
        <Select label={displayName}>
          <Option value="logout" onClick={handleLogOut}>
            <div className="flex items-center justify-between">
              <button className="text-red-500 hover:text-red-700 focus:outline-none">
                Sign out
              </button>
            </div>
          </Option>
        </Select>
      )}
    </div>
  );
}

export default Menubtn;
