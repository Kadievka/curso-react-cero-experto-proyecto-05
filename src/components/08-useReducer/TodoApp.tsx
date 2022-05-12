import React, { useEffect, useReducer } from "react";
import "./styles.css";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import todoReducer, { TodoStateInterface, actionTypes } from "./todoReducer";

const TodoApp = () => {
  //Reducer init

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

  //LocalStorage save

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //Lista

  const handleDelete = (todo: TodoStateInterface) => {
    dispatch({
      type: actionTypes.DELETE,
      payload: todo,
    });
  };

  const handleComplete = (todo: TodoStateInterface) => {
    dispatch({
      type: actionTypes.COMPLETE,
      payload: todo,
    });
  };

  // Formulario

  const handleAdd = (todo: TodoStateInterface) => {
    todo.description &&
      dispatch({
        type: actionTypes.ADD,
        payload: todo,
      });
  };

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

        <TodoAdd handleAdd={handleAdd} />
      </div>
    </div>
  );
};

export default TodoApp;
