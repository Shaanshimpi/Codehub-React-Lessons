import React from 'react';

export default function UserCard({ id, name, onSelect, selected }) {
  return (
    <div style={{ padding: '10px', border: selected ? '2px solid #27ae60' : '2px solid #ccc', margin: '6px 0' }}>
      <h3>{name}</h3>
      <button onClick={() => onSelect(id)}>{selected ? 'Selected' : 'Select'}</button>
    </div>
  );
}


