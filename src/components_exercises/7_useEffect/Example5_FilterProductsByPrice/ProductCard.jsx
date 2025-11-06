import React from 'react';

// ProductCard component displays individual product information
// TODO: Create ProductCard component that receives { name, price } as props
export default function ProductCard({ name, price }) {
  // TODO 1: Create getPriceCategory function that returns category based on price
  // - price >= 500: return 'Premium'
  // - price >= 100: return 'Standard'
  // - else: return 'Budget'
  // const getPriceCategory = (price) => {
  //   if (price >= 500) return 'Premium';
  //   if (price >= 100) return 'Standard';
  //   return 'Budget';
  // };

  // TODO 2: Determine categoryColor based on price
  // - price >= 500: '#9b59b6' (purple)
  // - price >= 100: '#3498db' (blue)
  // - else: '#27ae60' (green)
  // const categoryColor = price >= 500 ? '#9b59b6' : price >= 100 ? '#3498db' : '#27ae60';

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
      {/* TODO 3: Add h3 element with product name */}
      {/* Style: margin: '0 0 8px 0', color: '#2c3e50' */}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* TODO 4: Display price in a paragraph */}
        {/* Format: "Price: ${price}" with price in blue color (#2980b9) */}
        {/* Style: margin: 0, fontSize: '18px', fontWeight: 'bold' */}
        
        {/* TODO 5: Display category badge */}
        {/* - Show category from getPriceCategory(price) */}
        {/* - Style: backgroundColor: categoryColor, color: 'white', padding, borderRadius, fontWeight */}
      </div>
    </div>
  );
}

