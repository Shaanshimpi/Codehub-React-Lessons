import React, { useState } from 'react';
import ProductCard from './ProductCard.jsx';

// Main component - manages product likes
export default function Main() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999, isLiked: false },
    { id: 2, name: 'Mouse', price: 25, isLiked: false },
    { id: 3, name: 'Keyboard', price: 75, isLiked: false },
    { id: 4, name: 'Monitor', price: 300, isLiked: false },
  ]);

  // Function to toggle like status
  const handleLike = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, isLiked: !product.isLiked } : product
    );
    setProducts(updatedProducts);
  };

  const likedCount = products.filter((p) => p.isLiked).length;

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Products - {likedCount} liked:</p>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          isLiked={product.isLiked}
          onLike={handleLike}
        />
      ))}
    </div>
  );
}

