import userEvent from "@testing-library/user-event";
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

describe("when the button is clicked", () => {
  it("should call the required action", () => {
    const dispatchMock = jest.fn();
    renderWithStore(<RefreshCourse />, {
      dispatch: dispatchMock,
    });

    userEvent.click(screen.getByRole("button"));
    expect(dispatchMock).toHaveBeenCalled();
  });
});
