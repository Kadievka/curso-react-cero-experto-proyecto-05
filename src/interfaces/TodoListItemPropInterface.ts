import TodoStateInterface from "./TodoStateInterface";

export default interface TodoListItemPropInterface {
  todo: TodoStateInterface;
  index: number;
  handleDelete: Function;
  handleComplete: Function;
}
