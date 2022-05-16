import React from 'react';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import TodoListItem from '../../../components/08-useReducer/TodoListItem';
import TodoListItemPropInterface from '../../../interfaces/TodoListItemPropInterface';


describe('TodoListItem tests', () => {

  beforeEach( () => {
    jest.clearAllMocks();
    cleanup();
  });

  const mockHandleDelete = jest.fn();
  const mockHandleComplete = jest.fn();


  it('should show the component successfully with init values', () => {

    const props: TodoListItemPropInterface = {
      todo: {
        id: 1,
        description: "mock-description",
        done: false,
      },
      index: 0,
      handleDelete: mockHandleDelete,
      handleComplete: mockHandleComplete,
    };

    const wrapper = render(<TodoListItem {...props} />);

    const pElement = screen.getByTestId("todo-list-item-p");
    const buttonElement = screen.getByTestId("todo-list-item-delete-button");

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(pElement.innerHTML.trim()).toBe("1. mock-description");
    expect(pElement).toHaveClass("text-center ");
    expect(buttonElement.innerHTML.trim()).toBe("Borrar");

    wrapper.unmount();

  });

  it('should show the component successfully with init values with a done todo', () => {

    const props: TodoListItemPropInterface = {
      todo: {
        id: 1,
        description: "mock-description",
        done: true,
      },
      index: 0,
      handleDelete: mockHandleDelete,
      handleComplete: mockHandleComplete,
    };

    const wrapper = render(<TodoListItem {...props} />);

    const pElement = screen.getByTestId("todo-list-item-p");
    const buttonElement = screen.getByTestId("todo-list-item-delete-button");

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(pElement.innerHTML.trim()).toBe("1. mock-description");
    expect(pElement).toHaveClass("text-center complete");
    expect(buttonElement.innerHTML.trim()).toBe("Borrar");

    wrapper.unmount();

  });

  it('should call handleComplete when click on p element', () => {

    const props: TodoListItemPropInterface = {
      todo: {
        id: 1,
        description: "mock-description",
        done: false,
      },
      index: 0,
      handleDelete: mockHandleDelete,
      handleComplete: mockHandleComplete,
    };

    const wrapper = render(<TodoListItem {...props} />);

    const pElement = screen.getByTestId("todo-list-item-p");

    fireEvent.click(pElement);

    expect(mockHandleComplete).toBeCalledTimes(1);

    wrapper.unmount();

  });

  it('should call handleDelete when click on button element', () => {

    const props: TodoListItemPropInterface = {
      todo: {
        id: 1,
        description: "mock-description",
        done: false,
      },
      index: 0,
      handleDelete: mockHandleDelete,
      handleComplete: mockHandleComplete,
    };

    const wrapper = render(<TodoListItem {...props} />);

    const buttonElement = screen.getByTestId("todo-list-item-delete-button");

    fireEvent.click(buttonElement);

    expect(mockHandleDelete).toBeCalledTimes(1);

    wrapper.unmount();

  });


});