import React from 'react';

// Example 7: Passing arrays as props
function Tags({ items }) {
  return (
    <div>
      {items.map((tag, index) => (
        <span key={index} style={{ marginRight: '6px' }}>#{tag}</span>
      ))}
    </div>
  );
}

function Example7_ArrayProps() {
  const tags = ['react', 'props', 'basics'];

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <Tags items={tags} />
    </div>
  );
}

export default Example7_ArrayProps;


