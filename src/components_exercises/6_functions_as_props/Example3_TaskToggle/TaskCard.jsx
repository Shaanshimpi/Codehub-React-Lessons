import React from 'react';

// TODO: Create TaskCard component that receives { id, text, isCompleted, onToggle } props
// - Display checkbox input that is checked when isCompleted is true
// - Call onToggle(id) when checkbox changes
// - Display text with line-through when completed
// - Background color should be light purple (#f3e5f5) when completed, white otherwise

export default function TaskCard({ id, text, isCompleted, onToggle }) {
  return (
    <div style={{ 
      padding: '15px', 
      border: '2px solid #9c27b0', 
      borderRadius: '8px',
      margin: '10px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
      // TODO 1: Add backgroundColor that changes based on isCompleted
    }}>
      {/* TODO 2: Add checkbox input with checked={isCompleted} */}
      {/* Call onToggle(id) in onChange */}
      
      {/* TODO 3: Add paragraph with text */}
      {/* Apply line-through textDecoration when isCompleted is true */}
      
    </div>
  );
}

