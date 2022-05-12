import React from "react";
import "./styles.css";
import { TodoStateInterface } from "./todoReducer";

export interface TodoListItemPropInterface {
  todo: TodoStateInterface;
  index: number;
  handleDelete: Function;
  handleComplete: Function;
}

const TodoListItem = ({
  todo,
  index,
  handleDelete,
  handleComplete,
}: TodoListItemPropInterface) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        className={"text-center " + (todo.done && "complete")}
        onClick={() => {
          handleComplete(todo);
        }}
      >
        {index + 1}. {todo.description}
      </p>
      <button
        className="btn btn-danger"
        onClick={() => {
          handleDelete(todo);
        }}
      >
        Borrar
      </button>
    </li>
  );
};

export default TodoListItem;
