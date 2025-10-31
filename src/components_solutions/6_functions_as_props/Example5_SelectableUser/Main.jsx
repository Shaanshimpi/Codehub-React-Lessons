import React, { useState } from 'react';
import UserCard from './UserCard.jsx';

export default function Main() {
  const [selectedId, setSelectedId] = useState(null);
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  const onSelect = (id) => setSelectedId(id);

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Selected: {selectedId ?? 'None'}</p>
      {users.map((u) => (
        <UserCard key={u.id} id={u.id} name={u.name} onSelect={onSelect} selected={u.id === selectedId} />
      ))}
    </div>
  );
}


