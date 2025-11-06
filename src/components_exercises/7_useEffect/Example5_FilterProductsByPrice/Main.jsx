import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';

// Main component - manages products array and filters based on price threshold
export default function Main() {
  // TODO 1: Create products state with initial array of product objects
  // Each product should have: id, name, price
  // Hint: const [products] = useState([
  //   { id: 1, name: 'Laptop', price: 999 },
  //   { id: 2, name: 'Mouse', price: 25 },
  //   { id: 3, name: 'Keyboard', price: 75 },
  //   { id: 4, name: 'Monitor', price: 299 },
  //   { id: 5, name: 'Headphones', price: 150 },
  //   { id: 6, name: 'Webcam', price: 50 },
  //   { id: 7, name: 'Speaker', price: 120 },
  //   { id: 8, name: 'Tablet', price: 399 },
  // ]);

  // TODO 2: Create minPrice state starting with empty string ''
  // Hint: const [minPrice, setMinPrice] = useState('');

  // TODO 3: Create filteredProducts state
  // - Initialize with products array (from TODO 1)
  // - This will hold the filtered list of products
  // Hint: const [filteredProducts, setFilteredProducts] = useState(products);

  // TODO 4: Create useEffect hook to filter products when minPrice changes
  // - Dependencies should include minPrice and products
  // - If minPrice is empty, show all products
  // - Otherwise, filter products with price >= threshold
  // Hint: useEffect(() => { ... }, [minPrice, products]);
  // useEffect(() => {
  //   if (minPrice === '') {
  //     setFilteredProducts(products);
  //   } else {
  //     const threshold = Number(minPrice);
  //     const filtered = products.filter((product) => product.price >= threshold);
  //     setFilteredProducts(filtered);
  //   }
  // }, [minPrice, products]);

  // TODO 5: Create handleInputChange function
  // - It should receive event (e) as parameter
  // - Update minPrice state with e.target.value
  // const handleInputChange = (e) => {
  //   setMinPrice(e.target.value);
  // };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="price-input" style={{ display: 'block', marginBottom: '8px' }}>
          Filter by Minimum Price:
        </label>
        {/* TODO 6: Add input element */}
        {/* - type="number" */}
        {/* - value={minPrice} */}
        {/* - onChange={handleInputChange} */}
        {/* - placeholder="Enter minimum price (e.g., 100)" */}
        {/* - Add styling: padding, fontSize, border, borderRadius, width */}
        
        {/* TODO 7: Conditionally show message when minPrice is not empty */}
        {/* Show: "Showing products with price ≥ ${minPrice}" */}
        {/* Hint: {minPrice !== '' && <p>...</p>} */}
      </div>

      <div>
        <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Products (?):
        </p>
        {/* TODO 8: Map filteredProducts array to ProductCard components */}
        {/* - Pass name and price as props */}
        {/* - Add key prop using product.id */}
        
        {/* TODO 9: Show "No products found" message when filteredProducts is empty */}
        {/* Hint: {filteredProducts.length === 0 && <p>No products found...</p>} */}
      </div>
    </div>
  );
}

