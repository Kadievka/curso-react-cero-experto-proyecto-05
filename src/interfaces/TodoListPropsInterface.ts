import TodoStateInterface from "./TodoStateInterface";

export default interface TodoListPropsInterface {
  todos: TodoStateInterface[];
  handleComplete: Function;
  handleDelete: Function;
}