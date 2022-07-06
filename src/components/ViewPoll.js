import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function ViewPoll() {
  let { id } = useParams();
  const pollId = id;
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);
  const user = questions?.value?.[0]?.[pollId];
  const userThatMadePoll = users?.value?.[0]?.[user?.author];
  const userLoggedIn = useSelector((state) => state.users.userLoggedIn);
  console.log(user?.optionOne.text);
  //////////////////////////////////////////////////////
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  //////////////////////////////////////////////////////
  return (
    <>
      {userLoggedIn && <Nav />}
      <Container
        maxWidth="lg"
        sx={{
          margin: "2rem",
        }}
      >
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h4" component="div">
            Poll by {user?.author}
          </Typography>
          <Avatar
            alt="Remy Sharp"
            sx={{ width: 206, height: 200, border: "3px solid black" }}
            src={userThatMadePoll?.avatarURL}
          />
          <Link to="/">Home</Link>
          <Typography
            variant="h2"
            component="div"
            sx={{
              marginTop: "2rem",
            }}
          >
            Would you rather?
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <Typography variant="h5">{user?.optionOne.text}</Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <Typography variant="h5">{user?.optionTwo.text}</Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="success"
              sx={{
                width: "100%",
              }}
            >
              Vote
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="success"
              sx={{
                width: "100%",
              }}
            >
              Vote
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ViewPoll;
