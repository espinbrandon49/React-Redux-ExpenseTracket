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
    removeTransaction: (currentSlice, action) => {
      let list = currentSlice.transactionList
      list = list.splice(action.payload, 1)
    },
  },
});

export const { addTransactionAction, removeTransaction } = transactionSlice.actions;