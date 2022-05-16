import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import TodoApp from '../../../components/08-useReducer/TodoApp';


describe('TodoListItem tests', () => {

  beforeEach( () => {
    jest.clearAllMocks();
    cleanup();
  });

  it('should show the component successfully with init values', () => {

    const wrapper = render(<TodoApp />);

    //TodoAdd
    const h1Element = screen.getByTestId("todo-app-h1");

    //TodoList and TodoListItem
    const pElement = screen.getByTestId("todo-list-item-p");
    const buttonDelete = screen.getByTestId("todo-list-item-delete-button");

    //TodoAdd
    const inputElement = screen.getByTestId("todo-add-input");
    const buttonSubmit = screen.getByTestId("todo-add-submit-button");

    expect(wrapper.asFragment()).toMatchSnapshot();

    //TodoAdd
    expect(h1Element.innerHTML.trim()).toBe("TodoApp ( 1 )");

    //TodoList and TodoListItem
    expect(pElement.innerHTML.trim()).toBe("1. Aprender React");
    expect(buttonDelete.innerHTML.trim()).toBe("Borrar");

    //TodoAdd
    expect(inputElement).toHaveAttribute("value", "");
    expect(buttonSubmit.innerHTML.trim()).toBe("Agregar");

    wrapper.unmount();

  });

  it('should complete one todo', () => {

    const wrapper = render(<TodoApp />);

    //TodoList and TodoListItem
    const pElement = screen.getByTestId("todo-list-item-p");

    fireEvent.click(pElement);

    expect(pElement.innerHTML.trim()).toBe("1. Aprender React");
    expect(pElement).toHaveClass("text-center complete");

    wrapper.unmount();

  });

  it('should add one new todo', () => {

    const wrapper = render(<TodoApp />);

    //TodoAdd
    const inputElement = screen.getByTestId("todo-add-input");
    const buttonSubmit = screen.getByTestId("todo-add-submit-button");

    fireEvent.change(inputElement, {target: {value: "todo description 2"}});
    fireEvent.click(buttonSubmit);

    const pElements = screen.getAllByTestId("todo-list-item-p");

    expect(pElements[0].innerHTML.trim()).toBe("1. Aprender React");
    expect(pElements[0]).toHaveClass("text-center ");

    expect(pElements[1].innerHTML.trim()).toBe("2. todo description 2");
    expect(pElements[1]).toHaveClass("text-center ");

    const h1Element = screen.getByTestId("todo-app-h1");
    expect(h1Element.innerHTML.trim()).toBe("TodoApp ( 2 )");

    wrapper.unmount();

  });

  it('should delete one todo', () => {

    const wrapper = render(<TodoApp />);

    const buttonsDelete = screen.getAllByTestId("todo-list-item-delete-button");

    fireEvent.click(buttonsDelete[0]);

    const pElements = screen.getAllByTestId("todo-list-item-p");
    expect(pElements.length).toBe(1);
    expect(pElements[0].innerHTML.trim()).toBe("1. todo description 2");

    const h1Element = screen.getByTestId("todo-app-h1");
    expect(h1Element.innerHTML.trim()).toBe("TodoApp ( 1 )");

    wrapper.unmount();

  });


});