import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: "transactionSlice",
  initialState: {
    transactionList: [],
  },
  reducers: {
    addTransactionAction: (currentSlice, action) => {
      currentSlice.transactionList.push(action.payload)
    },
  },
});

export const { addTransactionAction } = transactionSlice.actions;