import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./mockUserSlice";
import questionSlice from "./mockQuestionSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    questions: questionSlice,
  },
});
