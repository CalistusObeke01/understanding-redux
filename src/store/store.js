import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "../reducer/amountSlice";

export const store = configureStore({
  reducer: {
    amount: amountReducer
  }
});
