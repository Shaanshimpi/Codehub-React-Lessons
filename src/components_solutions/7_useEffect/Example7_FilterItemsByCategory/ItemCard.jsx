import React from 'react';

// ItemCard component displays individual item information
export default function ItemCard({ name, category, price }) {
  const getCategoryColor = (category) => {
    if (category === 'Electronics') return '#3498db';
    if (category === 'Clothing') return '#e74c3c';
    if (category === 'Books') return '#27ae60';
    return '#95a5a6';
  };

  const categoryColor = getCategoryColor(category);

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
        <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
          Price: <span style={{ color: '#2980b9' }}>${price}</span>
        </p>
      </div>
    </div>
  );
}

