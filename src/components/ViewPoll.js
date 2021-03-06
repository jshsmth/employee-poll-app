import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import App from "./App";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import { addVoteToUsersArray } from "../store/userSlice";

function ViewPoll() {
  let { id } = useParams();
  const pollId = id;
  const users = useSelector((state) => state.users);
  const currentUserNameId = useSelector(
    (state) => state.users?.userLoggedIn?.id
  );
  const questions = useSelector((state) => state.questions);
  const user = questions?.value?.[0]?.[pollId];
  const userThatMadePoll = users?.value?.[0]?.[user?.author];
  const userLoggedIn = useSelector((state) => state.users.userLoggedIn);
  const totalVotesForOptionOne = user?.optionOne?.votes.length;
  const totalVotesForOptionTwo = user?.optionTwo?.votes.length;
  const totalVotes = totalVotesForOptionOne + totalVotesForOptionTwo;
  const [tempVote, setTempVote] = React.useState("");

  const hasUserAlreadyVoted =
    user?.optionOne?.votes.includes(currentUserNameId) ||
    user?.optionTwo?.votes.includes(currentUserNameId);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  //////////////////////////////////////////////////////
  const handleAddVote = async (option) => {
    // prevent user from voting on their own poll
    if (user?.author === currentUserNameId) {
      alert("You cannot vote on your own poll");
      return;
    }
    // prevent user from voting on a poll they've already voted on
    if (hasUserAlreadyVoted) {
      alert("You have already voted on this poll");
      return;
    }
    try {
      // secondary safety check to prevent user from voting on a poll twice
      if (tempVote === "optionOne" || tempVote === "optionTwo") {
        return;
      }
      setTempVote(option);
      dispatch(
        addVoteToUsersArray({
          authedUser: currentUserNameId,
          qid: pollId,
          answer: option,
        })
      );
      navigate(`/questions/${pollId}`);
    } catch {
      alert("Error saving vote");
    }
  };
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
      {userLoggedIn && user?.author && <Nav />}
      {userLoggedIn && user?.author && (
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
                onClick={() => handleAddVote("optionOne")}
                variant="contained"
                color="success"
                sx={{
                  width: "100%",
                }}
              >
                {tempVote === "optionOne" ? "Voted ????" : "Vote"}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={() => handleAddVote("optionTwo")}
                variant="contained"
                color="success"
                sx={{
                  width: "100%",
                }}
              >
                {tempVote === "optionTwo" ? "Voted ????" : "Vote"}
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <Typography variant="h5">
                  Total votes: {totalVotesForOptionOne}
                  <Typography>
                    Percentage: {(totalVotesForOptionOne / totalVotes) * 100}%
                  </Typography>
                </Typography>
                {user?.optionOne?.votes.includes(currentUserNameId) && (
                  <Typography>You voted for this poll ????</Typography>
                )}
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                {" "}
                <Typography variant="h5">
                  Total votes: {totalVotesForOptionTwo}
                  <Typography>
                    Percentage: {(totalVotesForOptionTwo / totalVotes) * 100}%
                  </Typography>
                </Typography>
                {user?.optionTwo?.votes.includes(currentUserNameId) && (
                  <Typography>You voted for this poll ????</Typography>
                )}
              </Item>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Container>
      )}
      {!userLoggedIn && <App />}
      {userLoggedIn && !user?.author && <NotFound />}
    </>
  );
}

export default ViewPoll;
