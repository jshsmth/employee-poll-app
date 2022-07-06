import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";

function DashboardCard({ title }) {
  const currentUser = useSelector((state) => state.users.userLoggedIn);
  const questions = useSelector((state) => state.questions);

  // console.log(questions?.value[0]);

  // currentUser?.questions.forEach((question) => {
  //   console.log(questions?.value[0][question]);
  // });

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
