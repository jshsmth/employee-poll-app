import { createSlice } from "@reduxjs/toolkit";
import { mockQuestions } from "./mockQuestions";

const initialState = {
  value: mockQuestions,
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestions: (state, action) => {
      state.value = [action.payload];
    },
  },
});

export const { addQuestions } = questionSlice.actions;

export default questionSlice.reducer;
