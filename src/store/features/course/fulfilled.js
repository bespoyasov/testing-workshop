export function fetchTodayCourseFulfilled(state, action) {
  return {
    ...state,
    value: action.payload,
    status: "idle",
  };
}
