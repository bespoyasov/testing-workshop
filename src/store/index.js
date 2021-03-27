import { configureStore } from "@reduxjs/toolkit";
import course from "./features/course/slice";

export const store = configureStore({
  reducer: {
    course,
  },
});
