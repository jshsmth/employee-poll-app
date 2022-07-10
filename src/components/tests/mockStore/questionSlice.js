import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { addQuestions } = questionSlice.actions;

export default questionSlice.reducer;
