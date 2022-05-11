import React, { useReducer } from 'react'
import "./styles.css";
import todoReducer, { TodoStateInterface } from './todoReducer';



const TodoApp = () => {

  const initialState: TodoStateInterface[] = [{
    id: new Date().getTime(),
    description: "Aprender React",
    done: false,
  }];

  const [todos] = useReducer(todoReducer, initialState);

  console.log(todos)

  return (
    <div>
      <h1>TodoApp</h1>
      <hr />

      <ul>
        <li>Hola</li>
        <li>Mundo</li>
        <li>Hola de nuevo</li>
      </ul>

    </div>
  )
}

export default TodoApp