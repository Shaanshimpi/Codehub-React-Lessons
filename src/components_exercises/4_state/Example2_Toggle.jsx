import React, { useState } from 'react';

// Exercise 2: Toggle visibility (mirror the solution)
export default function Example2_Toggle() {
  // TODO 1: Create isVisible state starting at true
  // Hint: const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h2>Hello CodeHub</h2>
      {/* TODO 2: Add button that toggles isVisible using !isVisible */}
      {/* TODO 3: Button text should show "Hide" when visible, "Show" when hidden */}
      {/* TODO 4: Show <p>Lorem ipsum dolor sit amet.</p> only when isVisible is true */}
      {/* Hint: {isVisible && <p>...</p>} */}
    </div>
  );
}

