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

  console.log(todos);

  return (
    <div>
      <h1>TodoApp ( { todos?.length } ) </h1>
      <hr />

      <div className="row">

        <div className="col-7">
          <ul className="list-group-flush">
          {
            todos?.map( ({id, description}, index) => {
              return (
                <li
                  key={id}
                  className="list-group-item"
                >
                  <p className="text-center">
                    { index + 1 }. { description }
                  </p>
                  <button
                    className="btn btn-danger"
                  >
                    Borrar
                  </button>
                </li>
              )
            })
          }
        </ul>
        </div>

        <div className="col-5">

          <h4>Agregar TODO</h4>
          <hr />

          <form>
            <input
              autoComplete="off"
              className="form-control"
              name="description"
              placeholder="Aprender ..."
              type="text"
            />
            <button
              className="btn btn-outline-primary mt-1 w-100"
            >
              Agregar
            </button>
          </form>

        </div>

      </div>

    </div>
  )
}

export default TodoApp