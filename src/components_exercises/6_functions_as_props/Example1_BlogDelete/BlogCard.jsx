import React from 'react';

// TODO: Create BlogCard component that receives { id, title, author, onDelete } as props
// - Display title in h3
// - Display "by {author}" in a paragraph with color: '#7f8c8d'
// - Add a Delete button that calls onDelete(id) when clicked
// - Style the button with red background (#e74c3c), white text, padding, no border, rounded corners

export default function BlogCard({ id, title, author, onDelete }) {
  return (
    <div style={{ 
      padding: '15px', 
      border: '2px solid #3498db', 
      borderRadius: '8px',
      margin: '10px 0' 
    }}>
      {/* TODO 1: Add h3 with title */}
      
      {/* TODO 2: Add paragraph with "by {author}" */}
      
      {/* TODO 3: Add Delete button that calls onDelete(id) */}
      
    </div>
  );
}

