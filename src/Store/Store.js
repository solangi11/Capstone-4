import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../Slices/Value";

export const store = configureStore({
  reducer: {
  
    Location: locationReducer,
  },
});
