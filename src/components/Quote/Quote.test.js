import { render, screen } from "@testing-library/react";
import { Quote } from "./Quote";
import { quotes } from "./quotes";

describe("when rendered", () => {
  const testQuote = quotes[0];

  it("should contain an expected text", () => {
    render(<Quote />);
    const result = screen.getByText(testQuote.text);
    expect(result).toBeInTheDocument();
  });
});
