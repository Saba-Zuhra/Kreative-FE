import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, userSlice } from "./features";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
});

