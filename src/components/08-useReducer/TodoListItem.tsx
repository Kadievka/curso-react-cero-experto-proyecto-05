import React from "react";
import TodoListItemPropInterface from "../../interfaces/TodoListItemPropInterface";
import "./styles.css";

const TodoListItem = ({
  todo,
  index,
  handleDelete,
  handleComplete,
}: TodoListItemPropInterface) => {
  return (
    <li className="list-group-item">
      <p
        data-testid="todo-list-item-p"
        className={"text-center " + (todo.done && "complete")}
        onClick={() => {
          handleComplete(todo);
        }}
      >
        {index + 1}. {todo.description}
      </p>
      <button
        data-testid="todo-list-item-delete-button"
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
