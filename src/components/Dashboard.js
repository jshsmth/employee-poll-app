import React from "react";
import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";

function Dashboard({ allQuestions }) {
  const user = useSelector((state) => state.users.userLoggedIn);
  const users = useSelector((state) => state.users);
  console.log(allQuestions);

  const dispatch = useDispatch();

  return (
    <div>
      <Nav />
      <h1>Welcome, {user?.name}</h1>
    </div>
  );
}

export default Dashboard;
