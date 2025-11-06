import React from 'react';

// ProductCard component displays individual product information
export default function ProductCard({ name, price }) {
  const getPriceCategory = (price) => {
    if (price >= 500) return 'Premium';
    if (price >= 100) return 'Standard';
    return 'Budget';
  };

  const category = getPriceCategory(price);
  const categoryColor = price >= 500 ? '#9b59b6' : price >= 100 ? '#3498db' : '#27ae60';

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
      <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>{name}</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
          Price: <span style={{ color: '#2980b9' }}>${price}</span>
        </p>
        <p
          style={{
            margin: 0,
            padding: '4px 12px',
            backgroundColor: categoryColor,
            color: 'white',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          {category}
        </p>
      </div>
    </div>
  );
}

