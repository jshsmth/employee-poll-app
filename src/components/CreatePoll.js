import React from "react";
import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { savePoll } from "../store/questionSlice";

import App from "./App";

function CreatePoll() {
  const userLoggedIn = useSelector((state) => state.users?.userLoggedIn?.id);
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  ////////////////////////////////////////////////////////////

  const handleCreatePoll = async (question) => {
    try {
      dispatch(
        savePoll({
          optionOneText: question?.optionOneText,
          optionTwoText: question?.optionTwoText,
          author: userLoggedIn,
        })
      );
      navigate("/");
    } catch {
      alert("Error creating poll");
    }
  };

  return (
    <div>
      {userLoggedIn && <Nav />}
      {userLoggedIn && (
        <Box
          sx={{
            margin: "10rem",
          }}
        >
          <form onSubmit={handleSubmit(handleCreatePoll)}>
            <Typography variant="h1">Create poll</Typography>
            <Typography variant="h4">Would you rather?</Typography>
            <FormControl
              variant="filled"
              sx={{
                width: "100%",
              }}
            >
              <Typography>Option One:</Typography>
              <FilledInput
                id="component-helper"
                {...register("optionOneText")}
                placeholder="Pleae enter option one"
                sx={{
                  marginBottom: "1rem",
                }}
              />
            </FormControl>
            <FormControl
              variant="filled"
              sx={{
                width: "100%",
              }}
            >
              <Typography>Option Two:</Typography>
              <FilledInput
                id="component-helper"
                {...register("optionTwoText")}
                placeholder="Pleae enter option two"
              />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{
                marginTop: "1rem",
              }}
            >
              Create
            </Button>
          </form>
        </Box>
      )}
      {!userLoggedIn && <App />}
    </div>
  );
}

export default CreatePoll;
