import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { transactionSlice } from "./transaction/transactionSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

//[] 1 Combine the reducers ( slices content ) into a single reducer
const rootReducer = combineReducers({
  TRANSACTION: transactionSlice.reducer,
});

//[x] 2 Create a basic configuration to tell redux to use the local storage
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["TRANSACTION"],
};

//[x] 3 Persist the reducers
const persistedReducers = persistReducer(persistConfig, rootReducer);

//[x] 4 Send the persisted reducers to the store
const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//[x] 5 Create a persisted version of the store
const persistor = persistStore(store);

//[x] 6 Export the persisted version of the store

//[] 7 Use the PersistGate component to give your app access to the persisted store

//[] 8 Tell Redux to ignore all the actions sent by redux-persist

//Before persist
// const store = configureStore({
//   reducer: {
//     TRANSACTION: transactionSlice.reducer,
//   }
// })

export { store, persistor };