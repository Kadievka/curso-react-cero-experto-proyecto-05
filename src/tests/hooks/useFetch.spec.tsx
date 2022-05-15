import { renderHook } from "@testing-library/react";
import useFetch from "../../hooks/useFetch";

const mockData = [{
  id: "mock-id",
  title: "mock-title"}];

const mockFetch = () => ( Promise.resolve({
  json: () => Promise.resolve({
    data: mockData
  }),
}));

const fakeFetch = jest.fn();
window.fetch = fakeFetch;

describe("Test useCounter hook", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return default values when nothing is passed", () => {

    const useFetchHookResult = renderHook(() => useFetch());

    const state = useFetchHookResult.result.current;

    expect(state).toStrictEqual({data: null, loading: true, error: null});
  });

  it("should pass through useEffect, make fetch and setState", async () => {

    fakeFetch.mockImplementationOnce(mockFetch);

    renderHook(() => useFetch('valid-url'));

    expect(fakeFetch).toHaveBeenCalledTimes(1);

  });

  it("should catch the error", () => {

    const mockFailedFetch = () => ( Promise.resolve({
      json: () => Promise.reject(() => {
        throw new Error("random error");
      }),
    }));

    fakeFetch.mockImplementationOnce(mockFailedFetch);

    try {
      renderHook(() => useFetch('valid-url'));
    } catch (error) {
      expect(fakeFetch).toHaveBeenCalledTimes(1);
      expect(error).toHaveProperty("message", "random error");
    }

  });
});