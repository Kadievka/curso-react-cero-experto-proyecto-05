import { useState } from "react"
import UseCounterResponseInterface from "../interfaces/UseCounterResponseInterface";

export const useCounter = (initialState = 10): UseCounterResponseInterface => {

  const [counter, setCounter] = useState<number>(initialState);

  const increment = () => {
    setCounter( counter + 1);
  }

  const decrement = () => {
    setCounter( counter - 1);
  }

  const reset = () => {
    setCounter(initialState);
  }

  return {
    counter,
    increment,
    decrement,
    reset,
  };
}
