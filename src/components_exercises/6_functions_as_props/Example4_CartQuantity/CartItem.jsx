import React from 'react';

// TODO: Create CartItem component that receives { id, name, price, quantity, onIncrement, onDecrement } props
// - Display name, price, quantity, and subtotal (price × quantity)
// - Add − button that calls onDecrement(id), disabled when quantity is 1
// - Show current quantity between the buttons
// - Add + button that calls onIncrement(id)

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
        {/* TODO 1: Add h3 with name */}
        
        {/* TODO 2: Add paragraph showing price, quantity, and subtotal */}
        {/* Format: $99 × 2 = $198.00 */}
        {/* Hint: Use (price * quantity).toFixed(2) for subtotal */}
        
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {/* TODO 3: Add − button that calls onDecrement(id) */}
        {/* Disable when quantity <= 1 */}
        {/* Style: red background (#e74c3c), white text */}
        
        {/* TODO 4: Display quantity in a span */}
        
        {/* TODO 5: Add + button that calls onIncrement(id) */}
        {/* Style: green background (#27ae60), white text */}
        
      </div>
    </div>
  );
}

