console.log("Hola");

const initialState = [{
  id: 1,
  todo: "Comprar pan",
  done: false,
}];

const todoReducer = (state = initialState, action) => {
  if(action?.type === "agregar"){
    return [...state, action.payload];
  }
  return state;
}

let todos = todoReducer();

console.log(todos);

const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};

//estructura estandar de la acción
const agregarTodoAction = {
  type: "agregar",
  payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction);

//todos.push está prohibido

console.log(todos);