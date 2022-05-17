import React from 'react';
import {
  cleanup,
  render,
} from "@testing-library/react";
import Main from '../../../components/09-useContext/Main';

describe('AppRouter tests', () => {

  beforeEach( () => {
    jest.clearAllMocks();
    cleanup();
  });


  it('should show the component successfully', () => {

    const wrapper = render(
      <Main />
    );

    expect(wrapper.asFragment()).toMatchSnapshot();

    wrapper.unmount();

  });

});