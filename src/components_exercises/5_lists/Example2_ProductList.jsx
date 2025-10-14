import React from 'react';

// TODO 1: Create ProductCard component that receives {name, price} props
// Display name in h3 and price in p tag

// Exercise 2: Map products array to components
export default function Example2_ProductList() {
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Keyboard', price: 75 },
  ];

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Products:</p>
      {/* TODO 2: Map products array to ProductCard components */}
      {/* Pass name and price as props, use product.id as key */}
    </div>
  );
}

