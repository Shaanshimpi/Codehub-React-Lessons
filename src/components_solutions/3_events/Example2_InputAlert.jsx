import React from 'react';

// Example: Input change and button alert (no state used)
function Example2_InputAlert() {
  const handleAlert = () => {
    alert('Hello CodeHub');
  };
  const handleChange = () => {
    console.log('changed');
  };
  return (
    <div>
      <h2>Hello CodeHub</h2>
      <input onChange={handleChange} placeholder="Lorem ipsum" />
      <button onClick={handleAlert}>Show Alert</button>
    </div>
  );
}

export default Example2_InputAlert;


