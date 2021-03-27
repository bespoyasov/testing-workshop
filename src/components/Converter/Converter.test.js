import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Converter } from "./Converter";

// jest.mock("./useConverter", () => ({
// useConverter() {
//   return {
//     rub: 100,
//     usd: 2.38,
//     updateRub: mockUpdateRub,
//     updateUsd: mockUpdateUsd,
//   };
// },
// }));

const mockUpdateRub = jest.fn();
const mockUpdateUsd = jest.fn();

function useConverterMock() {
  return {
    rub: 100,
    usd: 2.38,
    updateRub: mockUpdateRub,
    updateUsd: mockUpdateUsd,
  };
}

describe("when rendered", () => {
  it("rub input should have a value with a rub amount", () => {
    render(<Converter useConverter={useConverterMock} />);
    expect(screen.getByLabelText(/Сумма в рублях/)).toHaveValue(100);
  });

  it("usd input should have a value with a usd amount", () => {
    render(<Converter useConverter={useConverterMock} />);
    expect(screen.getByLabelText(/Сумма в долларах/)).toHaveValue(2.38);
  });
});

describe("when typed in a RUB input", () => {
  it("should update its value", () => {
    render(<Converter useConverter={useConverterMock} />);
    const input = screen.getByLabelText(/Сумма в рублях/);

    userEvent.clear(input);
    userEvent.type(input, "42");
    expect(mockUpdateRub).toHaveBeenCalledWith("42");
  });
});

describe("when typed in a USD input", () => {
  it("should update its value", () => {
    render(<Converter useConverter={useConverterMock} />);
    const input = screen.getByLabelText(/Сумма в долларах/);

    userEvent.clear(input);
    userEvent.type(input, "42");
    expect(mockUpdateUsd).toHaveBeenCalledWith("42");
  });
});
