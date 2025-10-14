import React, { useState } from 'react';

// Example: State with events (Day 3 Events + Day 4 State)
export default function Example1_Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}


