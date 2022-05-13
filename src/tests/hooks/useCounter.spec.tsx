import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";

describe("Test useCounter hook", () => {
  it("should return the default initial state", () => {
    const useCounterHook = renderHook(() => useCounter());

    const { counter, increment, decrement, reset } =
      useCounterHook.result.current;

    expect(counter).toEqual(10);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
  });

  it("should return the initial state", () => {
    const useCounterHook = renderHook(() => useCounter(0));

    const { counter } = useCounterHook.result.current;

    expect(counter).toEqual(0);
  });

  it("should increment the counter in 1", () => {
    const useCounterHook = renderHook(() => useCounter(0));

    const { increment } = useCounterHook.result.current;

    expect(useCounterHook.result.current.counter).toEqual(0);

    act(() => increment());

    expect(useCounterHook.result.current.counter).toEqual(1);
  });

  it("should decrement the counter in 1", () => {
    const useCounterHook = renderHook(() => useCounter());

    const { decrement } = useCounterHook.result.current;

    expect(useCounterHook.result.current.counter).toEqual(10);

    act(() => decrement());

    expect(useCounterHook.result.current.counter).toEqual(9);
  });

  it("should reset the counter", () => {
    const useCounterHook = renderHook(() => useCounter());

    const { increment, reset } = useCounterHook.result.current;

    expect(useCounterHook.result.current.counter).toEqual(10);

    act(() => increment());

    expect(useCounterHook.result.current.counter).toEqual(11);

    act(() => reset());

    expect(useCounterHook.result.current.counter).toEqual(10);
  });
});
