import { configureStore } from "@reduxjs/toolkit";
import parentSlice from "./features/parent/parentSlice";
import counsellorSlice from "./features/counsellor/counsellorSlice";
import schoolSlice from "./features/school/schoolSlice";
export const Store = () => {
  return configureStore({
    reducer: {
      parent: parentSlice,
      counsellor: counsellorSlice,
      school: schoolSlice,
    },
  });
};
