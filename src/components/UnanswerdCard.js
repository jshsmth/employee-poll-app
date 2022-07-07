import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

function DashboardCard({ title }) {
  const currentUserId = useSelector((state) => state.users.userLoggedIn?.id);
  const currentUser = useSelector((state) => state.users?.value[0]);
  const questions = useSelector((state) => state.questions);
  const questionsFromUsers = questions?.value[0];
  const currentUserAnsweredQuestions = Object.keys(
    currentUser[currentUserId]?.answers
  );

  const unAnsweredQuestions = Object.keys(questionsFromUsers)
    .filter((key) => {
      return !currentUserAnsweredQuestions.includes(key);
    })
    .reduce((obj, key) => {
      return Object.assign(obj, {
        [key]: questionsFromUsers[key],
      });
    }, {});

  console.log(unAnsweredQuestions);

  return (
    <>
      <Card sx={{ maxWidth: 275, margin: "2rem" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            USERNAME
          </Typography>
          <Typography variant="h5" component="div">
            TIMESTAMP
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View poll</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default DashboardCard;
