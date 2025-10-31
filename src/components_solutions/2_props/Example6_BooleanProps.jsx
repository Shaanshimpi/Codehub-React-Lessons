import React from 'react';

// Example 6: Boolean props affecting output
function StatusBadge({ isActive }) {
  return <span>{isActive ? 'Active' : 'Inactive'}</span>;
}

function Example6_BooleanProps() {
  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>User: <StatusBadge isActive={true} /></p>
      <p>Service: <StatusBadge isActive={false} /></p>
    </div>
  );
}

export default Example6_BooleanProps;


