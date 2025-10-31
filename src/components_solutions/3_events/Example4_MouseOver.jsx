import React from 'react';

// Example: Mouse over and out events
export default function Example4_MouseOver() {
  const handleOver = () => console.log('mouse over');
  const handleOut = () => console.log('mouse out');

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <button onMouseOver={handleOver} onMouseOut={handleOut}>Hover me</button>
    </div>
  );
}


