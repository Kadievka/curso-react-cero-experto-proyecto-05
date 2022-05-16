import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import TodoAdd from '../../../components/08-useReducer/TodoAdd';
import TodoAddPropsInterface from '../../../interfaces/TodoAddPropsInterface';


describe('TodoListItem tests', () => {

  beforeEach( () => {
    jest.clearAllMocks();
    cleanup();
  });

  const mockHandleAdd = jest.fn();


  it('should show the component successfully with init values', () => {

    const props: TodoAddPropsInterface = {
      handleAdd: mockHandleAdd,
    };

    const wrapper = render(<TodoAdd {...props} />);

    const inputElement = screen.getByTestId("todo-add-input");
    const buttonElement = screen.getByTestId("todo-add-submit-button");

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(inputElement).toHaveAttribute("value", "");
    expect(buttonElement.innerHTML.trim()).toBe("Agregar");

    wrapper.unmount();

  });

  it('should write correctly in the form input and call handleAdd when submit', () => {

    const props: TodoAddPropsInterface = {
      handleAdd: mockHandleAdd,
    };

    const wrapper = render(<TodoAdd {...props} />);

    const inputElement = screen.getByTestId("todo-add-input");
    const buttonElement = screen.getByTestId("todo-add-submit-button");

    fireEvent.change(inputElement, {target: {value: 'mock-description'}});
    expect(inputElement).toHaveAttribute("value", "mock-description");

    fireEvent.click(buttonElement);
    expect(mockHandleAdd).toHaveBeenCalledTimes(1);

    wrapper.unmount();

  });

});