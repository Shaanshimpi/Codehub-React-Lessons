import React from 'react';

// Example 7: Group items by category (simple render)
export default function Example7_GroupBy() {
  const items = [
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Carrot', category: 'Vegetable' },
    { id: 3, name: 'Banana', category: 'Fruit' },
    { id: 4, name: 'Broccoli', category: 'Vegetable' },
  ];

  const categories = [...new Set(items.map((i) => i.category))];

  return (
    <div>
      <h2>Hello CodeHub</h2>
      {categories.map((cat) => (
        <div key={cat} style={{ margin: '8px 0' }}>
          <h4>{cat}</h4>
          <ul>
            {items.filter((i) => i.category === cat).map((i) => (
              <li key={i.id}>{i.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}


