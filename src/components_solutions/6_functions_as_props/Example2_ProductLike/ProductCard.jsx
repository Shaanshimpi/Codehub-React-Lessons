import React from 'react';

// ProductCard component with like button
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
        <h3 style={{ margin: '0 0 5px 0' }}>{name}</h3>
        <p style={{ margin: 0, color: '#27ae60', fontWeight: 'bold' }}>${price}</p>
      </div>
      <button 
        onClick={() => onLike(id)}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '2rem',
          cursor: 'pointer',
          transition: 'transform 0.2s'
        }}
      >
        {isLiked ? '❤️' : '🤍'}
      </button>
    </div>
  );
}

