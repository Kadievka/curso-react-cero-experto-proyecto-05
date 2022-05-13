export default interface UseCounterResponseInterface{
  counter: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}