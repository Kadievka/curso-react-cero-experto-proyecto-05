import React, { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import './effects.css';

const RealExampleRef = () => {

  const [show, setShow] = useState(false)

  return (
    <div>
      <h1 data-testid="real-example-ref-h1" >RealExampleRef</h1>
      <hr />

      { show && <MultipleCustomHooks data-testid="multiple-custom-hooks-component" /> }

      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
        data-testid="real-example-ref-show-button"
      >
        Show/Hide
      </button>
    </div>
  )
}

export default RealExampleRef