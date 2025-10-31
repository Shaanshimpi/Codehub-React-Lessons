import React, { useState } from 'react';

// Example: Counter with configurable step
export default function Example4_StepCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + step)}>+{step}</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <div>
        <label>
          Step: 
          <input value={step} onChange={(e) => setStep(Number(e.target.value) || 0)} />
        </label>
      </div>
    </div>
  );
}


