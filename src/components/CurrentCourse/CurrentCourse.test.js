import { render, screen } from "@testing-library/react";
import { CurrentCourse } from "./CurrentCourse";
import { renderWithStore } from "../../testUtils";

describe("when rendered with a course value", () => {
  it("should contain the value in the body", () => {
    const stateMock = { course: { value: 100500 } };
    renderWithStore(<CurrentCourse />, { state: stateMock });
    expect(screen.getByText(/100500₽/)).toBeInTheDocument();
  });
});
