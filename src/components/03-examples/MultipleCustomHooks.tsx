import React, { useEffect } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
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
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        loading
        ?
          <div className="alert alert-info text-center">
            Loading...
          </div>
        :
        <blockquote className="blockquote text-right">
          <p className="mb-6"> {quote} </p>
          <footer className="blockquote-footer"> {author} </footer>
        </blockquote>
      }

      <button
        className="btn btn-primary m-3"
        onClick={decrement}
      >
        Anterior frase
      </button>

      <button
        className="btn btn-primary"
        onClick={increment}
      >
        Siguiente frase
      </button>

    </div>
  )
}

export default MultipleCustomHooks