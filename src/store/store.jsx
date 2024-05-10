import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// Configuring the Redux store with the cart slice
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
