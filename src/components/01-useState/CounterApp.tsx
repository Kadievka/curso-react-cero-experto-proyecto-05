import React, { useState } from 'react'
import "./counter.css";

const CounterApp = () => {

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 50,
    counter5: 40,
  });

  const {counter1, counter2} = state;

  const handleClick = () => {
    setState(() => {
      return {
        ...state,
        counter1: counter1 + 1
      }
    });
  }

  return (
    <>
      <h1>Counter { counter1 }</h1>
      <h1>Counter { counter2 }</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={ handleClick }
      >
        +1
      </button>
    </>
  )
}

export default CounterApp