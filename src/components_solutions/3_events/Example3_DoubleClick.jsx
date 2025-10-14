import React from 'react';

// Example: Double click event
function Example3_DoubleClick() {
  const onDouble = () => alert('Double clicked');
  return (
    <div>
      <h2>Hello CodeHub</h2>
      <button onDoubleClick={onDouble}>Double click me</button>
    </div>
  );
}

export default Example3_DoubleClick;


