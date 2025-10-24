import { useState } from "react";

// Custom hook in solution
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

export default function CounterSolution() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}
