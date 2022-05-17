import React from 'react';
import {
  cleanup,
  render,
} from "@testing-library/react";
import AboutScreen from '../../../components/09-useContext/AboutScreen';

describe('AppRouter tests', () => {

  beforeEach( () => {
    jest.clearAllMocks();
    cleanup();
  });


  it('should show the component successfully', () => {

    const wrapper = render(
      <AboutScreen />
    );

    expect(wrapper.asFragment()).toMatchSnapshot();

    wrapper.unmount();

  });

});