import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import UnanswerdCard from "./UnanswerdCard";
import AnsweredCard from "./AnsweredCard";

function Dashboard() {
  const currentUser = useSelector((state) => state.users.userLoggedIn);

  // // const users = useSelector((state) => state.users);
  // const dispatch = useDispatch();
  // const currentUserAnswers = currentUser?.answers;
  // const currentUserQuestions = currentUser?.questions;

  return (
    <Box>
      <h1>Welcome, {currentUser?.name}</h1>
      <Typography variant="h5" component="div">
        Unanswered
      </Typography>
      <UnanswerdCard title="New questions" />
      <Typography variant="h5" component="div">
        Answered
      </Typography>
      <AnsweredCard title="Answered questions" />
    </Box>
  );
}

export default Dashboard;
