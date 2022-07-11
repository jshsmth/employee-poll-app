import { createSlice } from "@reduxjs/toolkit";
import { _saveQuestion } from "../store/_DATA";

const initialState = {
  value: [],
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestions: (state, action) => {
      state.value = [action.payload];
    },
    savePoll: (state, action) => {
      const { optionOneText, optionTwoText, author } = action.payload;
      _saveQuestion({
        optionOneText,
        optionTwoText,
        author,
      });
    },
  },
});

export const { addQuestions, savePoll } = questionSlice.actions;

export default questionSlice.reducer;
