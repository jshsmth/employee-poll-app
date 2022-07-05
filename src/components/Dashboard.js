import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";
import DashboardCard from "./DashboardCard";

function Dashboard({ allQuestions }) {
  const currentUser = useSelector((state) => state.users.userLoggedIn);
  const userQuestions = allQuestions[0] || {};
  const userQuestionsIds = Object.keys(userQuestions);
  // const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const questionsAnswered = currentUser?.answers;
  const questions = currentUser?.questions;

  // console.log(userQuestions);
  console.log(userQuestionsIds);

  return (
    <Box>
      <Nav />
      <h1>Welcome, {currentUser?.name}</h1>
      <Typography variant="h5" component="div">
        New Questions
      </Typography>
      <DashboardCard title="New questions" />
      <Typography variant="h5" component="div">
        Done
      </Typography>
      <DashboardCard title="Done" />
    </Box>
  );
}

export default Dashboard;
