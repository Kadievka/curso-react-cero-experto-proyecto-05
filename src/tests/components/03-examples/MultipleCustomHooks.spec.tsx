import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import BreakinBadApiQuoteInterface from '../../../interfaces/BreakinBadApiQuoteInterface';
import UseFetchStateInterface from '../../../interfaces/UseFetchStateInterface';

const mockUseFetchResultData: BreakinBadApiQuoteInterface[] = [{
  quote_id: "mock-quote_id",
  quote: "mock-quote",
  author: "mock-author",
  series: "mock-series",
}];

const mockUseFetch: UseFetchStateInterface = {
  data: null,
  loading: true,
  error: null,
};

jest.mock("../../../hooks/useFetch", () => (
  function useFetch(): UseFetchStateInterface {
    return mockUseFetch;
  }
));


describe('MultipleCustomHooks', () => {

  beforeEach( () => {
    jest.clearAllMocks();
    cleanup();
  });


  it('should show the component successfully with init values', () => {

    const wrapper = render(<MultipleCustomHooks />);

    const h1Element = screen.getByTestId("multiple-custom-hooks-h1");
    const loadingDivElement = screen.getByTestId("multiple-custom-hooks-loading");
    const blockQuoteElement = screen.queryByTestId("multiple-custom-hooks-block-quote");
    const prevButtonElement = screen.getByTestId("multiple-custom-hooks-prev-button");
    const nextButtonElement = screen.getByTestId("multiple-custom-hooks-next-button");

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(h1Element.innerHTML.trim()).toBe("Breaking Bad Quotes");
    expect(loadingDivElement.innerHTML.trim()).toBe("Loading...");
    expect(blockQuoteElement).toBe(null);
    expect(prevButtonElement.innerHTML.trim()).toBe("Anterior frase");
    expect(nextButtonElement.innerHTML.trim()).toBe("Siguiente frase");

    wrapper.unmount();

  });

  it('should show the component successfully after fetch data', async () => {

    mockUseFetch.data = mockUseFetchResultData;
    mockUseFetch.loading = false;

    const wrapper = render(<MultipleCustomHooks />);

    const h1Element = screen.getByTestId("multiple-custom-hooks-h1");
    const loadingDivElement = screen.queryByTestId("multiple-custom-hooks-loading");
    const blockQuoteElement = screen.queryByTestId("multiple-custom-hooks-block-quote");
    const pElement = screen.getByTestId("multiple-custom-hooks-quote");
    const footerElement = screen.getByTestId("multiple-custom-hooks-author");
    const prevButtonElement = screen.getByTestId("multiple-custom-hooks-prev-button");
    const nextButtonElement = screen.getByTestId("multiple-custom-hooks-next-button");

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(h1Element.innerHTML.trim()).toBe("Breaking Bad Quotes");
    expect(loadingDivElement).toBe(null);
    expect(blockQuoteElement).not.toBe(null);
    expect(pElement.innerHTML.trim()).toBe("mock-quote");
    expect(footerElement.innerHTML.trim()).toBe("mock-author");
    expect(prevButtonElement.innerHTML.trim()).toBe("Anterior frase");
    expect(nextButtonElement.innerHTML.trim()).toBe("Siguiente frase");

    wrapper.unmount();

  });

  it('should useEffect to reset when click previous button', async () => {

    mockUseFetch.data = mockUseFetchResultData;
    mockUseFetch.loading = false;

    const wrapper = render(<MultipleCustomHooks />);

    const blockQuoteElement = screen.queryByTestId("multiple-custom-hooks-block-quote");
    const pElement = screen.getByTestId("multiple-custom-hooks-quote");
    const footerElement = screen.getByTestId("multiple-custom-hooks-author");

    const prevButtonElement = screen.getByTestId("multiple-custom-hooks-prev-button");

    fireEvent.click(prevButtonElement);

    expect(blockQuoteElement).not.toBe(null);
    expect(pElement.innerHTML.trim()).toBe("mock-quote");
    expect(footerElement.innerHTML.trim()).toBe("mock-author");

    wrapper.unmount();

  });


});