import React from 'react';
import {
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import TodoList from '../../../components/08-useReducer/TodoList';
import TodoListPropsInterface from '../../../interfaces/TodoListPropsInterface';


describe('TodoListItem tests', () => {

  beforeEach( () => {
    jest.clearAllMocks();
    cleanup();
  });

  const mockHandleDelete = jest.fn();
  const mockHandleComplete = jest.fn();


  it('should show the component successfully with init values', () => {

    const props: TodoListPropsInterface = {
      todos: [{
        id: 1,
        description: "mock-description",
        done: false,
      }, {
        id: 2,
        description: "mock-description-2",
        done: true,
      }],
      handleDelete: mockHandleDelete,
      handleComplete: mockHandleComplete,
    };

    const wrapper = render(<TodoList {...props} />);

    const pElements = screen.getAllByTestId("todo-list-item-p");
    const buttonElements = screen.getAllByTestId("todo-list-item-delete-button");

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(pElements[0].innerHTML.trim()).toBe("1. mock-description");
    expect(pElements[0]).toHaveClass("text-center ");
    expect(buttonElements[0].innerHTML.trim()).toBe("Borrar");

    expect(pElements[1].innerHTML.trim()).toBe("2. mock-description-2");
    expect(pElements[1]).toHaveClass("text-center complete");
    expect(buttonElements[1].innerHTML.trim()).toBe("Borrar");

    wrapper.unmount();

  });

});