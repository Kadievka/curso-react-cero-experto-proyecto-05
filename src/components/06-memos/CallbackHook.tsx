import React, { useCallback, useState } from 'react'
import './effects.css';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

  const [ counter, setCounter ] = useState(10);

  // Esto es un espacio en memoria que cambia cada vez que se renderiza
  // const increment = () => {
  //   setCounter(counter + 1);
  // }

  const increment = useCallback(
    (num: number) => {
      setCounter((c)=>(c + num));
    },
    [setCounter],
  );

  return (
    <div>
      <h1>CallbackHook: { counter }</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  )
}

export default CallbackHook