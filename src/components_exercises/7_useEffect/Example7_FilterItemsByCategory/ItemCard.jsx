import React from 'react';

// ItemCard component displays individual item information
// TODO: Create ItemCard component that receives { name, category, price } as props
export default function ItemCard({ name, category, price }) {
  // TODO 1: Create getCategoryColor function that returns color based on category
  // - 'Electronics': '#3498db' (blue)
  // - 'Clothing': '#e74c3c' (red)
  // - 'Books': '#27ae60' (green)
  // - else: '#95a5a6' (gray)
  // const getCategoryColor = (category) => {
  //   if (category === 'Electronics') return '#3498db';
  //   if (category === 'Clothing') return '#e74c3c';
  //   if (category === 'Books') return '#27ae60';
  //   return '#95a5a6';
  // };

  return (
    <div
      style={{
        padding: '15px',
        border: '2px solid #3498db',
        borderRadius: '8px',
        margin: '10px 0',
        backgroundColor: '#ecf0f1',
      }}
    >
      {/* TODO 2: Add h3 element with item name */}
      {/* Style: margin: '0 0 8px 0', color: '#2c3e50' */}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* TODO 3: Display category badge */}
        {/* - Show category */}
        {/* - Style: backgroundColor: getCategoryColor(category), color: 'white', padding, borderRadius, fontWeight */}
        
        {/* TODO 4: Display price in a paragraph */}
        {/* Format: "Price: ${price}" with price in blue color (#2980b9) */}
        {/* Style: margin: 0, fontSize: '18px', fontWeight: 'bold' */}
      </div>
    </div>
  );
}

