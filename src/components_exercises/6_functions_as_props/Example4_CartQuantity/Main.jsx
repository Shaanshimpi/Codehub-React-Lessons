import React, { useState } from 'react';
import CartItem from './CartItem.jsx';

// Main component - manages shopping cart
export default function Main() {
  // TODO 1: Create cartItems state with array of cart item objects
  // Each item should have: id, name, price, quantity
  // const [cartItems, setCartItems] = useState([
  //   { id: 1, name: 'Laptop', price: 999, quantity: 1 },
  //   { id: 2, name: 'Mouse', price: 25, quantity: 2 },
  //   { id: 3, name: 'Keyboard', price: 75, quantity: 1 },
  // ]);

  // TODO 2: Create handleIncrement function
  // - Receives id parameter
  // - Use .map() to increase quantity by 1 for item with matching id
  // - Update state with setCartItems
  // const handleIncrement = (id) => {
  //   const updatedItems = cartItems.map((item) =>
  //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //   );
  //   setCartItems(updatedItems);
  // };

  // TODO 3: Create handleDecrement function
  // - Receives id parameter
  // - Use .map() to decrease quantity by 1 (but don't go below 1)
  // - Only decrease if quantity > 1
  // const handleDecrement = (id) => {
  //   const updatedItems = cartItems.map((item) =>
  //     item.id === id && item.quantity > 1
  //       ? { ...item, quantity: item.quantity - 1 }
  //       : item
  //   );
  //   setCartItems(updatedItems);
  // };

  // TODO 4: Calculate totalPrice using .reduce()
  // Sum up all (price × quantity) for each item
  // const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Shopping Cart:</p>
      {/* TODO 5: Map cartItems to CartItem components */}
      {/* Pass id, name, price, quantity, onIncrement, onDecrement as props */}
      
      {/* TODO 6: Show total price */}
      {/* Display: Total: $999.00 */}
    </div>
  );
}

