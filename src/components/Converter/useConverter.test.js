import { renderHook } from "@testing-library/react-hooks";
import { useConverter } from "./useConverter";

const course = 42;
const testRubAmount = 100;
const calculatedUsdAmount = 2.38;

describe("when rendered", () => {
  it("RUB value should be equal to initial RUB amount", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));
    expect(result.current.rub).toEqual(testRubAmount);
  });

  it("USD value should be equal to calculated USD amount", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));
    expect(result.current.usd).toEqual(calculatedUsdAmount);
  });
});

describe("when called an `updateRub` method", () => {
  it.todo("should update the RUB value");
  it.todo("should recalculate the USD value");
});

describe("when called an `updateUsd` method", () => {
  it.todo("should update the USD value");
  it.todo("should recalculate the RUB value");
});

describe("when re-rendered", () => {
  it.todo("should update its values");
});
