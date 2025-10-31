import React from 'react';

// Exercise 6: Boolean props affecting output
function StatusBadge({ isActive }) {
  return <span>{/* TODO 2: If isActive show 'Active' else 'Inactive' */}</span>;
}

function Example6_BooleanProps() {
  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      {/* TODO 1: Render StatusBadge with isActive={true} and isActive={false} */}
    </div>
  );
}

export default Example6_BooleanProps;


