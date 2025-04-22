import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

import { combineReducers } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    auth: authReducer,
  });

const persistConfig = {
    key: "root",
    storage,
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // can include other middlewares
  });

export const persistor = persistStore(store);

// const store = configureStore({
//     reducer: {
//         auth: authReducer,
//     }
// });

export default store;