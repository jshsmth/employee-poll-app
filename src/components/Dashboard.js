import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import UnanswerdCard from "./UnanswerdCard";
import AnsweredCard from "./AnsweredCard";

function Dashboard() {
  const currentUser = useSelector((state) => state.users.userLoggedIn);

  return (
    <Box>
      {currentUser && (
        <>
          <h1>Welcome, {currentUser?.name}</h1>
          <Typography
            variant="h5"
            component="div"
            sx={{
              margin: "2rem",
              textTransform: "uppercase",
              color: "red",
              backgroundColor: "white",
            }}
          >
            Unanswered ⛔️ NEWEST - OLDEST
          </Typography>
          <UnanswerdCard />
          <Typography
            variant="h5"
            component="div"
            sx={{
              margin: "2rem",
              textTransform: "uppercase",
              color: "green",
              backgroundColor: "white",
            }}
          >
            Answered 🎈 NEWEST - OLDEST
          </Typography>
          <AnsweredCard />
        </>
      )}
    </Box>
  );
}

export default Dashboard;
