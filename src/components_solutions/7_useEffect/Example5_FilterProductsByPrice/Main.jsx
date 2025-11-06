import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';

// Main component - manages products array and filters based on price threshold
export default function Main() {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Keyboard', price: 75 },
    { id: 4, name: 'Monitor', price: 299 },
    { id: 5, name: 'Headphones', price: 150 },
    { id: 6, name: 'Webcam', price: 50 },
    { id: 7, name: 'Speaker', price: 120 },
    { id: 8, name: 'Tablet', price: 399 },
  ]);

  const [minPrice, setMinPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // useEffect to filter products whenever minPrice changes
  useEffect(() => {
    if (minPrice === '') {
      // If input is empty, show all products
      setFilteredProducts(products);
    } else {
      const threshold = Number(minPrice);
      // Filter products with price greater than or equal to threshold
      const filtered = products.filter((product) => product.price >= threshold);
      setFilteredProducts(filtered);
    }
  }, [minPrice, products]);

  const handleInputChange = (e) => {
    setMinPrice(e.target.value);
  };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="price-input" style={{ display: 'block', marginBottom: '8px' }}>
          Filter by Minimum Price:
        </label>
        <input
          id="price-input"
          type="number"
          value={minPrice}
          onChange={handleInputChange}
          placeholder="Enter minimum price (e.g., 100)"
          style={{
            padding: '8px 12px',
            fontSize: '16px',
            border: '2px solid #3498db',
            borderRadius: '5px',
            width: '250px',
          }}
        />
        {minPrice !== '' && (
          <p style={{ marginTop: '8px', color: '#7f8c8d' }}>
            Showing products with price ≥ ${minPrice}
          </p>
        )}
      </div>

      <div>
        <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Products ({filteredProducts.length}):
        </p>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
            />
          ))
        ) : (
          <p style={{ color: '#e74c3c', fontStyle: 'italic' }}>
            No products found with price ≥ ${minPrice}
          </p>
        )}
      </div>
    </div>
  );
}

