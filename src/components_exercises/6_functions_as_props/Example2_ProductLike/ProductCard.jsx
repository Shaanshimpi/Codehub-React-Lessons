import React from 'react';

// TODO: Create ProductCard component that receives { id, name, price, isLiked, onLike } props
// - Display name in h3 and price in p tag with green color (#27ae60)
// - Add a button that calls onLike(id) when clicked
// - Button should show ❤️ when isLiked is true, 🤍 when false
// - Style: transparent background, no border, large font size (2rem)

export default function ProductCard({ id, name, price, isLiked, onLike }) {
  return (
    <div style={{ 
      padding: '15px', 
      border: '2px solid #27ae60', 
      borderRadius: '8px',
      margin: '10px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        {/* TODO 1: Add h3 with name */}
        
        {/* TODO 2: Add p with price (show as $99) */}
        
      </div>
      {/* TODO 3: Add button that calls onLike(id) */}
      {/* Show ❤️ if isLiked is true, 🤍 if false */}
      
    </div>
  );
}

