
export interface TodoStateInterface {
  id: number,
  description: string,
  done: boolean,
}

export interface TodoActionInterface {
  type: string,
  payload: Record<string, string>,
}

const todoReducer = (state: TodoStateInterface[] = [], action: TodoActionInterface) => {

  switch (action.type) {
    case "add":
      console.log("Estoy en add new todo", state)
      break;
    case "delete":
      console.log("Estoy en delete todo", state)
    break;
      case "edit":
    console.log("Estoy en edit todo", state)
    break;
    default:
      return state;
  }

}

export default todoReducer;