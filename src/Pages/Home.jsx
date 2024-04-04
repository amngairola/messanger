import React from "react";
import { Button } from "../Index";

export default function Home({ user, setUser }) {
  const handelLogOut = async () => {
    setUser(null);
  };

  return (
    <div>
      Loged in {user.displayName}
      Loged in {user.email}
      <img src={user.photoURL} />
      {console.log(user)}
      <div>
        <p>Log out</p>
        <Button onClick={handelLogOut} />
      </div>
    </div>
  );
}
