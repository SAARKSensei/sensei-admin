import { configureStore } from "@reduxjs/toolkit";
import parentSlice from "./features/parent/parentSlice";
import counsellorSlice from "./features/counsellor/counsellorSlice";
import schoolSlice from "./features/school/schoolSlice";
import studentSlice from "./features/student/studentSlice";
export const Store = () => {
  return configureStore({
    reducer: {
      parent: parentSlice,
      counsellor: counsellorSlice,
      school: schoolSlice,
      student: studentSlice,
    },
  });
};
