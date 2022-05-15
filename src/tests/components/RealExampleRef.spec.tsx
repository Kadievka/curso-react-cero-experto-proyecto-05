import React from 'react';
import {
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
    const multipleCustomHooksComponent = screen.queryByTestId("multiple-custom-hooks-component");

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(h1Element.innerHTML.trim()).toBe("RealExampleRef");
    expect(multipleCustomHooksComponent).toBe(null);

    wrapper.unmount();

  });

  it('should show the component successfully with init values', () => {

    const wrapper = render(<RealExampleRef />);

    const multipleCustomHooksComponent = screen.queryByTestId("multiple-custom-hooks-component");
    const showButton = screen.getByTestId("real-example-ref-show-button");

    expect(wrapper.asFragment()).toMatchSnapshot();

    fireEvent.click(showButton);

    expect(multipleCustomHooksComponent).toBe(null);

    wrapper.unmount();

  });


});