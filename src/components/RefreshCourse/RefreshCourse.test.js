import { screen } from "@testing-library/react";
import { renderWithStore } from "../../testUtils";
import { loadingCourseState, errorCourseState } from "../../testUtils/store";
import { RefreshCourse } from "./RefreshCourse";

describe("when the button is in initial state", () => {
  it("should contain the default text", () => {
    renderWithStore(<RefreshCourse />);
    expect(screen.getByText(/Обновить курс/)).toBeInTheDocument();
  });
});

describe("when the button is in the loading state", () => {
  it("should contain the corresponding text", () => {
    renderWithStore(<RefreshCourse />, {
      state: {
        course: loadingCourseState,
      },
    });
    expect(screen.getByText(/Обновляем курс.../)).toBeInTheDocument();
  });
});

describe("when the button is in an error state", () => {
  it("should contain the error message", () => {
    renderWithStore(<RefreshCourse />, {
      state: {
        course: errorCourseState,
      },
    });

    expect(screen.getByText(/Something went wrong./)).toBeInTheDocument();
  });
});
