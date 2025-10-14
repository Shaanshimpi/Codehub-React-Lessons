import React from 'react';

// Product component receives props
function ProductCard({ name, price }) {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

// Example 2: Map products array to components
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
      {products.map((product) => (
        <ProductCard key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
}

