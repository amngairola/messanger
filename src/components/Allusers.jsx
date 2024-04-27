import React, { useState, useEffect } from "react";
import { auth } from "../Firebase";
import "firebase/auth";
import { useAuth } from "../context/AuthContext";
import ErrorDialog from "./ErrorDialog";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const authInstance = useAuth(); // Use useAuth directly here

  useEffect(() => {
    const listAllUsers = async (nextPageToken) => {
      try {
        const listUsersResult = await authInstance.listUsers(
          1000,
          nextPageToken
        );
        const newUserList = [...users, ...listUsersResult.users];
        setUsers(newUserList);
        if (listUsersResult.pageToken) {
          listAllUsers(listUsersResult.pageToken);
        }
      } catch (error) {
        setError(error);
        setOpenErrorDialog(true);
      }
    };

    listAllUsers();
  }, [authInstance, users]); // Include authInstance in the dependency array

  const handleCloseErrorDialog = () => {
    setOpenErrorDialog(false);
  };

  return (
    <div className="container flex items-center justify-center ">
      <h4 className="font-bold">Available users</h4>
      <ul>
        {users.map((user) => (
          <li className="text-black" key={user.uid}>
            {user.displayName}
          </li>
        ))}
      </ul>
      {error && (
        <ErrorDialog
          open={openErrorDialog}
          error={error}
          onClose={handleCloseErrorDialog}
        />
      )}
    </div>
  );
}

export default AllUsers;
