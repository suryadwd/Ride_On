import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Import your slices
import userSlice from "./userSlice";
import captionSlice from "./captionSlice";
import vehicleSlice from "./vehicleSlice";
import socketSlice from "./socketSlice";

// Combine reducers
const rootReducer = combineReducers({
  user: userSlice,
  caption: captionSlice,
  vehicle: vehicleSlice,
  socketio: socketSlice,
});

// Persist configuration
const persistConfig = {
  key: "root", // Key for the storage
  version: 1,
  storage, // Use localStorage
};

// Wrap the root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Avoid errors related to non-serializable data
    }),
});

export const persistor = persistStore(store); // Create the persistor
export default store;
