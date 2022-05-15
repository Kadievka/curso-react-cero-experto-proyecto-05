import { ActionTypesEnum } from "../../enum/ActionTypesEnum";
import TodoActionInterface from "../../interfaces/TodoActionInterface";
import TodoStateInterface from "../../interfaces/TodoStateInterface";

const todoReducer = (
  state: TodoStateInterface[] = [],
  action: TodoActionInterface
) => {

  if (action){

    switch (action.type) {

      case ActionTypesEnum.ADD:
        return [...state, action.payload];

      case ActionTypesEnum.DELETE:
        return state.filter((todo) => todo.id !== action.payload.id);

      case ActionTypesEnum.COMPLETE:
        return state.map((todo) => (
          todo.id === action.payload.id
            ? { ...todo, done: !action.payload.done }
            : todo
        ));

    }
  }

  return state;
};

export default todoReducer;
