import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import "./layout.css";


const Layout = () => {

  const INITIAL_STATE = 1;

  const { counter, increment, decrement, reset } = useCounter(INITIAL_STATE);

  const { data } = useFetch(counter < INITIAL_STATE ? `https://www.breakingbadapi.com/api/quotes/1`: `https://www.breakingbadapi.com/api/quotes/${counter}`);
  // console.log({ loading, data }, counter)

  const { quote } = data ? {...data[0]} : { quote: ''};

  useEffect(()=>{
    (counter < INITIAL_STATE) && reset();
  }, [counter, reset]);

  const pTag = useRef<HTMLParagraphElement>(null);
  const [boxSize, setBoxSize] = useState<DOMRect | undefined>();

  useLayoutEffect(() => {
    setBoxSize(pTag.current?.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-6"> {quote} </p>
      </blockquote>

      <pre>
        {JSON.stringify(boxSize, null, 3)}
      </pre>

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

export default Layout