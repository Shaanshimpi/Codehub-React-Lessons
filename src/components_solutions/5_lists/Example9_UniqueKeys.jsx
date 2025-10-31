import React from 'react';

// Example 9: Unique keys with map
export default function Example9_UniqueKeys() {
  const animals = [
    { id: 'a1', name: 'Cat' },
    { id: 'a2', name: 'Dog' },
    { id: 'a3', name: 'Bird' },
  ];

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <ul>
        {animals.map((a) => (
          <li key={a.id}>{a.name}</li>
        ))}
      </ul>
    </div>
  );
}


