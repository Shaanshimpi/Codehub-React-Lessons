import React, { useState } from 'react';

// Example 2: Toggle visibility (boolean state)
export default function Example2_Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p>Lorem ipsum dolor sit amet.</p>}
    </div>
  );
}

