import React from 'react';

// Example: Key down event on input
export default function Example6_KeyDown() {
  const handleKeyDown = (e) => {
    console.log('key:', e.key);
  };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <input onKeyDown={handleKeyDown} placeholder="Press any key" />
    </div>
  );
}


