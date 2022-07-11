import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { convertTimestamp } from "../helpers/convertTimestamp";

function DashboardCard() {
  const currentUserId = useSelector((state) => state.users.userLoggedIn?.id);
  const currentUser = useSelector((state) => state.users?.value[0]);
  const questions = useSelector((state) => state.questions);
  const questionsFromUsers = questions?.value[0];
  const currentUserAnsweredQuestions = Object.keys(
    currentUser[currentUserId]?.answers
  );

  let navigate = useNavigate();

  const handleViewPoll = (pollId) => {
    navigate(`/questions/${pollId}`);
  };

  const unAnsweredQuestions = Object.keys(questionsFromUsers)
    .filter((key) => {
      return !currentUserAnsweredQuestions.includes(key);
    })
    .reduce((obj, key) => {
      return Object.assign(obj, {
        [key]: questionsFromUsers[key],
      });
    }, {});

  const currentUsersNotAnswered = Object.values(unAnsweredQuestions);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {currentUsersNotAnswered
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((poll) => {
          return (
            <Card key={poll?.id} sx={{ maxWidth: 275, margin: "2rem" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {poll?.id}
                </Typography>
                <Typography variant="h5" component="div">
                  {poll?.author}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {convertTimestamp(poll?.timestamp)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleViewPoll(poll?.id)}>
                  View poll
                </Button>
              </CardActions>
            </Card>
          );
        })}
    </Box>
  );
}

export default DashboardCard;
