import React, { useEffect, useState } from "react";
import { Button, Loading, Nav } from "../Index";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Chats() {
  const navigateTo = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full p-2">
      {!user ? (
        <Loading />
      ) : (
        <div>
          <Nav />
          <p>Welcome {user.displayName}`</p>
        </div>
      )}
    </div>
  );
}
