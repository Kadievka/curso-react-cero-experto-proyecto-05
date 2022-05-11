
export interface TodoStateInterface {
  id: number,
  description: string,
  done: boolean,
}

export interface TodoActionInterface {
  type: string,
  payload: TodoStateInterface,
}

export const actionTypes: Record<string, string> = {
  ADD: "add",
  DELETE: "delete",
  EDIT: "edit",
}

const todoReducer = (state: TodoStateInterface[] = [], action: TodoActionInterface) => {

  switch (action.type) {
    case actionTypes.ADD:
      console.log("Estoy en add new todo", state)
      return [...state, action.payload]
    case actionTypes.DELETE:
      console.log("Estoy en delete todo", state)
    break;
      case actionTypes.EDIT:
    console.log("Estoy en edit todo", state)
    break;
    default:
      return state;
  }

}

export default todoReducer;