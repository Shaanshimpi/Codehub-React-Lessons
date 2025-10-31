import React from 'react';

// Example 5: Using children prop
function Panel({ title, children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '8px', margin: '6px 0' }}>
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
}

function Example5_ChildrenProp() {
  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <Panel title="Info">
        <p>This content is passed as children.</p>
      </Panel>
      <Panel title="Note">
        <ul>
          <li>Item A</li>
          <li>Item B</li>
        </ul>
      </Panel>
    </div>
  );
}

export default Example5_ChildrenProp;


