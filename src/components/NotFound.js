import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Sorry mate something has happened</h1>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default NotFound;
