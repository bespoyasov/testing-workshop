import { render, screen } from "@testing-library/react";
import { Quote } from "./Quote";
import { quotes } from "./quotes";

describe("when rendered", () => {
  const quoteStub = quotes[1];
  const { text, author } = quoteStub;

  it("should contain an expected text", () => {
    render(<Quote quote={quoteStub} />);
    const result = screen.getByText(new RegExp(text));
    expect(result).toBeInTheDocument();
  });

  it("should contain an expected author", () => {
    render(<Quote quote={quoteStub} />);
    const result = screen.getByText(new RegExp(author));
    expect(result).toBeInTheDocument();
  });
});
