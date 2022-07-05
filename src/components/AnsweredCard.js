import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";

function AnsweredCard({ title }) {
  const currentUser = useSelector((state) => state.users.userLoggedIn);
  const questions = useSelector((state) => state.questions);
  const currentUserAnswer = Object.keys(currentUser?.answers);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {currentUserAnswer.map((questionId) => {
        const poll = questions?.value[0][questionId];
        console.log(poll);
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
                {poll?.timestamp}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View poll</Button>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}

export default AnsweredCard;
