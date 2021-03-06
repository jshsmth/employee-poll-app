import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { addUser, setUser } = userSlice.actions;

export default userSlice.reducer;
