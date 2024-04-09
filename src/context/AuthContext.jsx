import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../Firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigateTo = useNavigate();
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        navigateTo("/chats");
      }
    });
  }, [user, navigateTo]);

  const value = { user, authToken, setAuthToken };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
