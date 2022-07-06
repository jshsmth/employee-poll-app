import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>
        Sorry mate something has happened to the page we were trying to find or
        we need to authiencate you again for the current action you are
        performing{" "}
      </h1>
      <Link to="/">Go back to home or login</Link>
    </div>
  );
}

export default NotFound;
