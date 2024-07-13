import React from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = React.useContext(UserContext);

  if (!user) return <h1>Pls Login</h1>;
  return <h1>{user.username}</h1>;
}

export default Profile;
