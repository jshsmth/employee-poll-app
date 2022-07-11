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

function AnsweredCard() {
  const currentUser = useSelector((state) => state.users.userLoggedIn);
  const questions = useSelector((state) => state.questions);
  const currentUserAnswer = Object.keys(currentUser?.answers);

  let navigate = useNavigate();

  const handleViewPoll = (pollId) => {
    navigate(`/questions/${pollId}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {currentUserAnswer
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((questionId) => {
          const poll = questions?.value[0][questionId];
          return (
            <Card key={questionId} sx={{ maxWidth: 275, margin: "2rem" }}>
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

export default AnsweredCard;
