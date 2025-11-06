import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard.jsx';

// Main component - manages items array and filters based on category
export default function Main() {
  const [categories] = useState([
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Books' },
  ]);

  const [items] = useState([
    { id: 1, name: 'Laptop', categoryId: 1, category: 'Electronics', price: 999 },
    { id: 2, name: 'T-Shirt', categoryId: 2, category: 'Clothing', price: 25 },
    { id: 3, name: 'Book', categoryId: 3, category: 'Books', price: 15 },
    { id: 4, name: 'Headphones', categoryId: 1, category: 'Electronics', price: 150 },
    { id: 5, name: 'Jeans', categoryId: 2, category: 'Clothing', price: 60 },
    { id: 6, name: 'Notebook', categoryId: 3, category: 'Books', price: 8 },
    { id: 7, name: 'Phone', categoryId: 1, category: 'Electronics', price: 699 },
    { id: 8, name: 'Jacket', categoryId: 2, category: 'Clothing', price: 120 },
  ]);

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [filteredItems, setFilteredItems] = useState(items);

  // useEffect to filter items whenever selectedCategoryId changes
  useEffect(() => {
    if (selectedCategoryId === null) {
      // If no category selected, show all items
      setFilteredItems(items);
    } else {
      // Filter items by categoryId
      const filtered = items.filter((item) => item.categoryId === selectedCategoryId);
      setFilteredItems(filtered);
    }
  }, [selectedCategoryId, items]);

  const handleCategoryClick = (categoryId) => {
    // Toggle: if same category clicked, deselect it
    if (selectedCategoryId === categoryId) {
      setSelectedCategoryId(null);
    } else {
      setSelectedCategoryId(categoryId);
    }
  };

  const getSelectedCategoryName = () => {
    if (selectedCategoryId === null) return null;
    const category = categories.find((cat) => cat.id === selectedCategoryId);
    return category ? category.name : null;
  };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <div style={{ marginBottom: '20px' }}>
        <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Filter by Category:
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                border: '2px solid #3498db',
                borderRadius: '5px',
                backgroundColor: selectedCategoryId === category.id ? '#3498db' : 'white',
                color: selectedCategoryId === category.id ? 'white' : '#3498db',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s',
              }}
            >
              {category.name}
            </button>
          ))}
          <button
            onClick={() => setSelectedCategoryId(null)}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              border: '2px solid #95a5a6',
              borderRadius: '5px',
              backgroundColor: selectedCategoryId === null ? '#95a5a6' : 'white',
              color: selectedCategoryId === null ? 'white' : '#95a5a6',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s',
            }}
          >
            All
          </button>
        </div>
        {selectedCategoryId !== null && (
          <p style={{ marginTop: '10px', color: '#7f8c8d' }}>
            Showing items in category: <strong>{getSelectedCategoryName()}</strong>
          </p>
        )}
      </div>

      <div>
        <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Items ({filteredItems.length}):
        </p>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
            />
          ))
        ) : (
          <p style={{ color: '#e74c3c', fontStyle: 'italic' }}>
            No items found in category: "{getSelectedCategoryName()}"
          </p>
        )}
      </div>
    </div>
  );
}

