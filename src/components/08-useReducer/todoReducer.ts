export interface TodoStateInterface {
  id: number;
  description: string;
  done: boolean;
}

export interface TodoActionInterface {
  type: string;
  payload: TodoStateInterface;
}

export const actionTypes: Record<string, string> = {
  ADD: "add",
  DELETE: "delete",
  COMPLETE: "complete",
};

const todoReducer = (
  state: TodoStateInterface[] = [],
  action: TodoActionInterface
) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [...state, action.payload];

    case actionTypes.DELETE:
      return state.filter((todo) => todo.id !== action.payload.id);

    case actionTypes.COMPLETE:
      return state.map((todo) => (
        todo.id === action.payload.id
          ? { ...todo, done: !action.payload.done }
          : todo
      ));
  }
  return state;
};

export default todoReducer;
