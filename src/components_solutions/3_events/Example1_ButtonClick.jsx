import React from 'react';

// Example: Minimal click counter
export default function Example1_ButtonClick() {
  const handleClick = () => {
    alert('Button clicked');
  };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}


