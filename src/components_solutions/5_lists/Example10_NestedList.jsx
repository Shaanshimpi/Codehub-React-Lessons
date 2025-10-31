import React from 'react';

// Example 10: Nested lists (categories with items)
export default function Example10_NestedList() {
  const data = [
    { id: 1, title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
    { id: 2, title: 'Backend', items: ['Node', 'Express'] },
  ];

  return (
    <div>
      <h2>Hello CodeHub</h2>
      {data.map((group) => (
        <div key={group.id} style={{ margin: '8px 0' }}>
          <h4>{group.title}</h4>
          <ul>
            {group.items.map((it, idx) => (
              <li key={idx}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}


