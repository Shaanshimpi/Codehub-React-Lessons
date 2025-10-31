import React from 'react';

// Example 4: Inline expressions in JSX
function Example4_InlineExpressions() {
  const a = 5;
  const b = 7;
  const user = { firstName: 'Dana', lastName: 'Lee' };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Sum: {a + b}</p>
      <p>User: {user.firstName} {user.lastName}</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default Example4_InlineExpressions;


