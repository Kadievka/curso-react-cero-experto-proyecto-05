import React, { useRef } from 'react'
import './effects.css';

const FocusScreen = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current!.select();
  }

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />

      <input
        ref={inputRef}
        className="form-control m-2"
        placeholder="Su nombre"
      />

      <button
        className="btn btn-outline-primary m-2"
        onClick={handleClick}
      >
        Focus
      </button>
    </div>
  )
}

export default FocusScreen