import React, { useEffect } from 'react'
import { useCounter } from '../../hooks/useCounter';
import useFetch from "../../hooks/useFetch";
import "./effects.css";


const MultipleCustomHooks = () => {

  const INITIAL_STATE = 1;

  const { counter, increment, decrement, reset } = useCounter(INITIAL_STATE);

  const { loading, data } = useFetch(counter < INITIAL_STATE ? `https://www.breakingbadapi.com/api/quotes/1`: `https://www.breakingbadapi.com/api/quotes/${counter}`);
  // console.log({ loading, data }, counter)

  const { author, quote } = data ? {...data[0]} : {author: '', quote: ''};

  useEffect(()=>{
    (counter < INITIAL_STATE) && reset();
  }, [counter, reset]);

  return (
    <div>
      <h1 data-testid="multiple-custom-hooks-h1">Breaking Bad Quotes</h1>
      <hr />

      {
        loading
        ?
          <div className="alert alert-info text-center" data-testid="multiple-custom-hooks-loading">
            Loading...
          </div>
        :
        <blockquote className="blockquote text-right" data-testid="multiple-custom-hooks-block-quote">
          <p className="mb-6" data-testid="multiple-custom-hooks-quote"> {quote} </p>
          <footer className="blockquote-footer" data-testid="multiple-custom-hooks-author"> {author} </footer>
        </blockquote>
      }

      <button
        className="btn btn-primary m-3"
        onClick={decrement}
        data-testid="multiple-custom-hooks-prev-button"
      >
        Anterior frase
      </button>

      <button
        className="btn btn-primary"
        onClick={increment}
        data-testid="multiple-custom-hooks-next-button"
      >
        Siguiente frase
      </button>

    </div>
  )
}

export default MultipleCustomHooks