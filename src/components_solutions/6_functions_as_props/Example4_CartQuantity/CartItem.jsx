import React from 'react';

// CartItem component with +/- buttons
export default function CartItem({ id, name, price, quantity, onIncrement, onDecrement }) {
  return (
    <div style={{ 
      padding: '15px', 
      border: '2px solid #ff9800', 
      borderRadius: '8px',
      margin: '10px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h3 style={{ margin: '0 0 5px 0' }}>{name}</h3>
        <p style={{ margin: 0, color: '#ff9800', fontWeight: 'bold' }}>
          ${price} × {quantity} = ${(price * quantity).toFixed(2)}
        </p>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button 
          onClick={() => onDecrement(id)}
          disabled={quantity <= 1}
          style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '5px',
            cursor: quantity > 1 ? 'pointer' : 'not-allowed',
            fontSize: '1.2rem',
            opacity: quantity <= 1 ? 0.5 : 1
          }}
        >
          −
        </button>
        <span style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          minWidth: '30px',
          textAlign: 'center'
        }}>
          {quantity}
        </span>
        <button 
          onClick={() => onIncrement(id)}
          style={{
            backgroundColor: '#27ae60',
            color: 'white',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1.2rem'
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

