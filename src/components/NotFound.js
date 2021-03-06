import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "./Nav";
import App from "./App";

function NotFound() {
  const userLoggedIn = useSelector((state) => state.users?.userLoggedIn?.id);
  return (
    <div>
      {userLoggedIn && (
        <>
          {userLoggedIn && <Nav />}
          <h1>
            Sorry mate something has happened to the page we were trying to find
            or we need to authiencate you again for the current action you are
            performing{" "}
          </h1>
          <Link to="/">Go back to dashboard</Link>
        </>
      )}
      {!userLoggedIn && <App />}
    </div>
  );
}

export default NotFound;
