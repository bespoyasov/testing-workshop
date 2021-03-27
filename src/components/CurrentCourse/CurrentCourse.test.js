import { render, screen } from "@testing-library/react";
import { CurrentCourse } from "./CurrentCourse";

describe("when rendered with a course value", () => {
  it("should contain the value in the body", () => {
    render(<CurrentCourse />);
    expect(screen.getByText(/100500₽/)).toBeInTheDocument();
  });
});
