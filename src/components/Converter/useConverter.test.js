import { act, renderHook } from "@testing-library/react-hooks";
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
  it("should update the RUB value", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    act(() => {
      result.current.updateRub(10);
    });

    expect(result.current.rub).toEqual(10);
  });

  it("should recalculate the USD value", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    act(() => {
      result.current.updateRub(10);
    });

    expect(result.current.usd).toEqual(0.24);
  });
});

describe("when called an `updateUsd` method", () => {
  it("should update the USD value", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    act(() => {
      result.current.updateUsd(10);
    });

    expect(result.current.usd).toEqual(10);
  });

  it("should recalculate the RUB value", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    act(() => {
      result.current.updateUsd(10);
    });

    expect(result.current.rub).toEqual(420);
  });
});

describe("when re-rendered", () => {
  it.todo("should update its values");
});
