import React from 'react';

// Example 2: Simple variables in JSX
function Example2_UserGreeting() {
  const greeting = 'Hello CodeHub';
  const subtitle = 'Welcome back!';
  const count = 3; // simple number variable

  return (
    <div>
      <h2>{greeting}</h2>
      <p>{subtitle}</p>
      <p>Today you have {count} new messages.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default Example2_UserGreeting;

