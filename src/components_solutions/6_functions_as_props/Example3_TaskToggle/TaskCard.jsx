import React from 'react';

// TaskCard component with checkbox
export default function TaskCard({ id, text, isCompleted, onToggle }) {
  return (
    <div style={{ 
      padding: '15px', 
      border: '2px solid #9c27b0', 
      borderRadius: '8px',
      margin: '10px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: isCompleted ? '#f3e5f5' : 'white'
    }}>
      <input 
        type="checkbox" 
        checked={isCompleted}
        onChange={() => onToggle(id)}
        style={{ 
          width: '20px', 
          height: '20px',
          cursor: 'pointer' 
        }}
      />
      <p style={{ 
        margin: 0,
        textDecoration: isCompleted ? 'line-through' : 'none',
        color: isCompleted ? '#9e9e9e' : '#2c3e50',
        flex: 1
      }}>
        {text}
      </p>
    </div>
  );
}

