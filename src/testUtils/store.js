import { initialCourseState } from "../store/features/course/slice";

export const loadingCourseState = {
  ...initialCourseState,
  status: "loading",
};

export const errorCourseState = {
  ...initialCourseState,
  error: "Something went wrong.",
};
