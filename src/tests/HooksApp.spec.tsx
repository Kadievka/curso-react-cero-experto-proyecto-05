import React from 'react';
import {
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import HooksApp from "../HooksApp";

describe('HooksApp', () => {

  beforeEach(()=>{
    cleanup();
  });

  it('should show the defined categories', () => {

    const wrapper = render(<HooksApp />);

    expect(wrapper.asFragment()).toMatchSnapshot();

    const container = screen.getByTestId('hooks-app-container-element');

    expect(container.innerHTML.trim()).toBe("HooksApp");

  });

});