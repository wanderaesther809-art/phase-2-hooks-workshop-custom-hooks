import { useState } from "react";

// ✅ Create a custom hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

// ✅ Component using the custom hook
export default function Counter() {
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
