import React from "react";
import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";

function Dashboard() {
  const user = useSelector((state) => state.users.userLoggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      <Nav />
      <h1>Welcome, {user?.name}</h1>
    </div>
  );
}

export default Dashboard;
