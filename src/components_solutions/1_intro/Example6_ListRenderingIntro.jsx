import React from 'react';

// Example 6: Rendering a small array inline
function Example6_ListRenderingIntro() {
  const items = ['One', 'Two', 'Three'];

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Inline list:</p>
      <ul>
        {items.map((label, index) => (
          <li key={index}>{label}</li>
        ))}
      </ul>
    </div>
  );
}

export default Example6_ListRenderingIntro;


