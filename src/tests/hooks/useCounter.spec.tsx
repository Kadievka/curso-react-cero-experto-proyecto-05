import { renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Test useCounter hook', () => {

  it('should return the default initial state', () => {

    const useCounterHook = renderHook(() => useCounter());

    const { counter, increment, decrement, reset} = useCounterHook.result.current;

    expect(counter).toEqual(10);
    expect( typeof increment ).toBe('function');
    expect( typeof decrement ).toBe('function');
    expect( typeof reset ).toBe('function');

  });

  it('should return the initial state', () => {

    const useCounterHook = renderHook(() => useCounter(0));

    const { counter } = useCounterHook.result.current;

    expect(counter).toEqual(0);

  });

})