import React, { useMemo, useState } from 'react'
import procesoPesado from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import './effects.css';

const MemoHook = () => {

  const { counter, increment } = useCounter(500);

  const [show, setShow] = useState(false);

  useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter: <small> { counter } </small> </h3>
      <hr />

      <p> { procesoPesado(counter) } </p>

      <button
        className="btn btn-outline-primary"
        onClick={increment}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={ () => {
          setShow(!show);
        }}
      >
        Show/Hide { JSON.stringify(show) }
      </button>

    </div>
  )
}

export default MemoHook;