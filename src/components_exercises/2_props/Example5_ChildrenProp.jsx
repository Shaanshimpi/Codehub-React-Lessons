import React from 'react';

// Exercise 5: Using children prop
function Panel({ title, children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '8px', margin: '6px 0' }}>
      <h4>{title}</h4>
      <div>{/* TODO 2: Render children here */}</div>
    </div>
  );
}

function Example5_ChildrenProp() {
  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      {/* TODO 1: Render <Panel title="Info"> with a paragraph inside as children */}
      {/* TODO 3: Render another Panel with a small list as children */}
    </div>
  );
}

export default Example5_ChildrenProp;


