import React from "react";
import Nav from "./Nav";
import { useSelector } from "react-redux";

function CreatePoll(props) {
  const userLoggedIn = useSelector((state) => state.users.userLoggedIn);

  return (
    <div>
      {userLoggedIn && <Nav />}
      <h1>Create Poll</h1>
    </div>
  );
}

export default CreatePoll;
