import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setUserFromLocalStorage: (state) => {
      const user = JSON.parse(localStorage.getItem("user"));
      state.name = user.name;
      state.email = user.email;
      state.password = user.password;
      state.token = user.token;
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
      state.token = "";
      localStorage.clear();
    },
  },
});

export const { setUser, logout, setUserFromLocalStorage } = userSlice.actions;
export const { reducers } = userSlice;
