import React from "react";
import "./styles.css";
import TodoListItem from "./TodoListItem";
import { TodoStateInterface } from "./todoReducer";

export interface TodoListPropsInterface {
  todos: TodoStateInterface[];
  handleComplete: Function;
  handleDelete: Function;
}

const TodoList = ({
  todos,
  handleDelete,
  handleComplete,
}: TodoListPropsInterface) => {
  return (
    <div className="col-7">
      <ul className="list-group-flush">
        {todos?.map((todo, index) => {
          return (
            <TodoListItem
              key={todo.id}
              todo={todo}
              index={index}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
