import React from 'react';

export default function TodoItem({ id, text, onDelete }) {
  return (
    <div style={{ padding: '8px', border: '2px solid #2ecc71', borderRadius: '6px', margin: '6px 0' }}>
      <span>{text}</span>
      <button onClick={() => onDelete(id)} style={{ marginLeft: '8px' }}>Delete</button>
    </div>
  );
}


