export function fetchTodayCoursePending(state, action) {
  return {
    ...state,
    status: "loading",
  };
}
