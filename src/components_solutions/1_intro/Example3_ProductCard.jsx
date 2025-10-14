import React from 'react';

// Example 3: Simple grouped content
function Example3_ProductCard() {
  const title = 'Hello CodeHub';
  const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const note = 'This example shows multiple elements grouped in a parent.';

  return (
    <div>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <p>{paragraph}</p>
      <p>{note}</p>
    </div>
  );
}

export default Example3_ProductCard;

