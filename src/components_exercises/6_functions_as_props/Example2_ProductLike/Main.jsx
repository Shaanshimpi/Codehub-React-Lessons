import React, { useState } from 'react';
import ProductCard from './ProductCard.jsx';

// Main component - manages product likes
export default function Main() {
  // TODO 1: Create products state with array of product objects
  // Each product should have: id, name, price, isLiked (starting as false)
  // const [products, setProducts] = useState([
  //   { id: 1, name: 'Laptop', price: 999, isLiked: false },
  //   { id: 2, name: 'Mouse', price: 25, isLiked: false },
  //   { id: 3, name: 'Keyboard', price: 75, isLiked: false },
  //   { id: 4, name: 'Monitor', price: 300, isLiked: false },
  // ]);

  // TODO 2: Create handleLike function
  // - It should receive an id parameter
  // - Use .map() to create new array where the product with matching id has isLiked toggled
  // - Hint: product.id === id ? { ...product, isLiked: !product.isLiked } : product
  // - Update state with setProducts
  // const handleLike = (id) => {
  //   const updatedProducts = products.map((product) =>
  //     product.id === id ? { ...product, isLiked: !product.isLiked } : product
  //   );
  //   setProducts(updatedProducts);
  // };

  // TODO 3: Calculate likedCount using .filter()
  // const likedCount = products.filter((p) => p.isLiked).length;

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Products - ? liked:</p>
      {/* TODO 4: Map products to ProductCard components */}
      {/* Pass id, name, price, isLiked, and onLike={handleLike} as props */}
    </div>
  );
}

