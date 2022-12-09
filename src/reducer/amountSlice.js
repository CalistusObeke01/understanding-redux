import { createSlice } from "@reduxjs/toolkit";

export const amountSlice = createSlice({
  name: "amount",
  initialState: {
    value: 0
  },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      if (action.payload > state.value) {
        alert("Insufficient Amount");
      } else {
        state.value -= action.payload;
      }
    }
  }
});

export const { deposit, withdraw } = amountSlice.actions;
export const selectAmount = (state) => state.amount.value;
export default amountSlice.reducer;
