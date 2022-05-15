import React from 'react';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import RealExampleRef from "../../components/04-useRef/RealExampleRef";


describe('RealExampleRef', () => {

  beforeEach( () => {
    jest.clearAllMocks();
    cleanup();
  });


  it('should show the component successfully with init values', () => {

    const wrapper = render(<RealExampleRef />);

    const h1Element = screen.getByTestId("real-example-ref-h1");
    const multipleCustomHoosH1Element = screen.queryByTestId("multiple-custom-hooks-h1");

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(h1Element.innerHTML.trim()).toBe("RealExampleRef");
    expect(multipleCustomHoosH1Element).toBe(null);

    wrapper.unmount();

  });

  it('should show the component successfully with init values', () => {

    const wrapper = render(<RealExampleRef />);

    const showButton = screen.getByTestId("real-example-ref-show-button");

    expect(wrapper.asFragment()).toMatchSnapshot();

    act( () => {

      fireEvent.click(showButton);

    });

    const multipleCustomHoosH1Element = screen.queryByTestId("multiple-custom-hooks-h1");

    expect(multipleCustomHoosH1Element?.innerHTML.trim()).toBe("Breaking Bad Quotes");

    wrapper.unmount();

  });


});