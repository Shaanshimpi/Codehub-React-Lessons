import React from 'react';

// Example 5: Conditional rendering basics
function Example5_ConditionalRender() {
  const isMember = true;

  return (
    <div>
      <h2>Hello CodeHub</h2>
      {isMember ? (
        <p>Welcome back, valued member.</p>
      ) : (
        <p>Please sign up to continue.</p>
      )}
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default Example5_ConditionalRender;


