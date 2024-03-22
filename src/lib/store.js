import { configureStore } from "@reduxjs/toolkit";
import parentSlice from "./features/parent/parentSlice";

export const Store = () => {
  return configureStore({
    reducer: {
      parent: parentSlice,
    },
  });
};
