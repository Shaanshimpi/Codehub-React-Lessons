import React from 'react';

// Example 2: Multiple props (just text output)
function UserCard({ name, age, city }) {
  return (
    <p>
      {name} - {age} - {city}
    </p>
  );
}

function Example2_MultipleProps() {
  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <UserCard name="Emma" age={28} city="New York" />
      <UserCard name="James" age={34} city="San Francisco" />
    </div>
  );
}

export default Example2_MultipleProps;

