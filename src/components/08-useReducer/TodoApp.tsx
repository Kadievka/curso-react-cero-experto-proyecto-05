import React, { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import "./styles.css";
import TodoList from "./TodoList";
import todoReducer, {
  TodoStateInterface,
  actionTypes,
  TodoActionInterface,
} from "./todoReducer";

const TodoApp = () => {
  const initTodos = () => {
    const todosString = localStorage.getItem("todos");
    return todosString
      ? JSON.parse(todosString)
      : [
          {
            id: new Date().getTime(),
            description: "Aprender React",
            done: false,
          },
        ];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], initTodos);

  const initialFormState = {
    description: "",
  };

  const [formValues, handleInputChange, resetFormValues] =
    useForm(initialFormState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo: TodoStateInterface = {
      id: new Date().getTime(),
      description: formValues.description,
      done: false,
    };

    const action: TodoActionInterface = {
      type: actionTypes.ADD,
      payload: newTodo,
    };

    newTodo.description && dispatch(action);

    resetFormValues(initialFormState);
  };

  const handleDelete = (todo: TodoStateInterface) => {
    const action: TodoActionInterface = {
      type: actionTypes.DELETE,
      payload: todo,
    };
    dispatch(action);
  };

  const handleComplete = (todo: TodoStateInterface) => {
    const action: TodoActionInterface = {
      type: actionTypes.COMPLETE,
      payload: todo,
    };
    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>TodoApp ( {todos?.length} ) </h1>
      <hr />

      <div className="row">
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              className="form-control"
              name="description"
              onChange={handleInputChange}
              placeholder="Aprender ..."
              type="text"
              value={formValues.description}
            />
            <button
              className="btn btn-outline-primary mt-1 w-100"
              type="submit"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
