import React, { useState } from 'react';
import CartItem from './CartItem.jsx';

// Main component - manages shopping cart
export default function Main() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Laptop', price: 999, quantity: 1 },
    { id: 2, name: 'Mouse', price: 25, quantity: 2 },
    { id: 3, name: 'Keyboard', price: 75, quantity: 1 },
  ]);

  // Function to increment quantity
  const handleIncrement = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  // Function to decrement quantity
  const handleDecrement = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedItems);
  };

  // Calculate total
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Shopping Cart:</p>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '8px',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

