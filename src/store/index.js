import { configureStore } from "@reduxjs/toolkit";
import { transactionSlice } from "./transaction/transactionSlice";

const store = configureStore({
  reducer: {
    TRANSACTION: transactionSlice.reducer,
  }
})

export { store };