import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import questionSlice from "./questionSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    questions: questionSlice,
  },
});
