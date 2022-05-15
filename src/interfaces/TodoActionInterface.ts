
import { ActionTypesEnum } from "../enum/ActionTypesEnum";
import TodoStateInterface from "./TodoStateInterface";

export default interface TodoActionInterface {
  type: ActionTypesEnum;
  payload: TodoStateInterface;
}