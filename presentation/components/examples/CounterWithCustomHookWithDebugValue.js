import React, { useState, useDebugValue } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  useDebugValue(`This is value added by mpelekh. count is equal ${count}`);

  return [count, onIncrease, onDecrease];
};

export const CounterWithCustomHookWithDebugValue = () => {
  const [count, onIncrease, onDecrease] = useCounter();

  return (
    <div>
      <div>Current count: {count}</div>
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};
