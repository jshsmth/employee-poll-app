import React from "react";
import Nav from "./Nav";
import { useSelector } from "react-redux";

function Leaderboard() {
  const userLoggedIn = useSelector((state) => state.users.userLoggedIn);
  return (
    <div>
      {userLoggedIn && <Nav />}
      <h1>Leaderboards</h1>
    </div>
  );
}

export default Leaderboard;
