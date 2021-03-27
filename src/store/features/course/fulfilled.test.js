import { fetchTodayCourseFulfilled } from "./fulfilled";
import { initialCourseState } from "./slice";

const loadingCourseState = {
  ...initialCourseState,
  status: "loading",
};

const testAction = { payload: 42 };

describe("when called with payload", () => {
  it("should return a state with the updated course", () => {
    const result = fetchTodayCourseFulfilled(loadingCourseState, testAction);

    expect(result.value).toEqual(testAction.payload);
  });

  it("should turn off the loading status", () => {
    const result = fetchTodayCourseFulfilled(loadingCourseState, testAction);

    expect(result.status).toEqual("idle");
  });
});
