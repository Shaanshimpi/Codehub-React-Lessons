import React from 'react';

// BlogCard component receives blog data and delete function as props
export default function BlogCard({ id, title, author, onDelete }) {
  return (
    <div style={{ 
      padding: '15px', 
      border: '2px solid #3498db', 
      borderRadius: '8px',
      margin: '10px 0' 
    }}>
      <h3>{title}</h3>
      <p style={{ color: '#7f8c8d' }}>by {author}</p>
      <button 
        onClick={() => onDelete(id)}
        style={{
          backgroundColor: '#e74c3c',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </div>
  );
}

