import React from 'react';

// Exercise 2: Multiple props (mirror the solution)
// TODO 1: Add { name, age, city } parameters via destructuring
function UserCard() {
  return (
    <p>
      {/* TODO 2: Show name, age, and city like: Emma - 28 - New York */}
    </p>
  );
}

function Example2_MultipleProps() {
  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      {/* TODO 3: Render <UserCard name="Emma" age={28} city="New York" /> */}
      {/* TODO 4: Render <UserCard name="James" age={34} city="San Francisco" /> */}
    </div>
  );
}

export default Example2_MultipleProps;

