import { createSlice } from "@reduxjs/toolkit";
import { mockUsers } from "./mockUsers";

const initialState = {
  value: [],
  userLoggedIn: {
    id: "sarahedo",
    password: "password123",
    name: "Sarah Edo",
    avatarURL: "https://i.pravatar.cc/150?img=47",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
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
  },
});

export const { addUser, setUser } = userSlice.actions;

export default userSlice.reducer;
