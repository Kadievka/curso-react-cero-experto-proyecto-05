import React, { useEffect, useState } from 'react';
import "./effects.css";

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  //Cada vez que algo cambie, se ejecuta
  // useEffect(()=>{
  //   console.log("hey!")
  // });

  //Al enviarle un array vacío de dependencia, sólo se ejecutará una sola vez
  useEffect(()=>{
    console.log("hey!")
  }, []);

  //Si quiero que algo esté escuchando un cambio, se recomienda pasar al array de dependencias ese estado
  useEffect(()=>{
    console.log("formState cambió")
  }, [formState]);

  useEffect(()=>{
    console.log("email cambió")
  }, [email]);

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(target.name, target.value);
    setFormState(() => ({
      ...formState,
      [target.name]: target.value
    }))
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder='email@example.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>

    </>
  )
}

export default SimpleForm