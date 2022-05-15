import React from 'react'
import { useForm } from '../../hooks/useForm';
import TodoStateInterface from '../../interfaces/TodoStateInterface';
import "./styles.css";

export interface TodoAddPropsInterface {
  handleAdd: Function;

}

const TodoAdd = ({handleAdd}: TodoAddPropsInterface) => {

  const initialFormState = {
    description: "",
  };

  const [{description}, handleInputChange, resetFormValues] = useForm(initialFormState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo: TodoStateInterface = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    handleAdd(newTodo);

    resetFormValues(initialFormState);
  };

  return (
    <div className="col-5">
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          className="form-control"
          name="description"
          onChange={handleInputChange}
          placeholder="Aprender ..."
          type="text"
          value={description}
        />
        <button
          className="btn btn-outline-primary mt-1 w-100"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </div>
  )
}

export default TodoAdd