import { createSlice } from "@reduxjs/toolkit";
import { _saveQuestionAnswer } from "../store/_DATA";

const initialState = {
  value: [],
  userLoggedIn: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value = [action.payload];
    },
    setUser: (state, action) => {
      state.userLoggedIn = action.payload;
    },
    addVoteToUsersArray: (state, action) => {
      const { authedUser, qid, answer } = action.payload;
      _saveQuestionAnswer({
        authedUser,
        qid,
        answer,
      });
    },
  },
});

export const { addUser, setUser, addVoteToUsersArray } = userSlice.actions;

export default userSlice.reducer;
