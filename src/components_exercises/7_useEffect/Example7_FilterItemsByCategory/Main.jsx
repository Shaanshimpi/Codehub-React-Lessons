import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard.jsx';

// Main component - manages items array and filters based on category
export default function Main() {
  // TODO 1: Create categories state with array of category objects
  // Each category should have: id, name
  // Hint: const [categories] = useState([
  //   { id: 1, name: 'Electronics' },
  //   { id: 2, name: 'Clothing' },
  //   { id: 3, name: 'Books' },
  // ]);

  // TODO 2: Create items state with initial array of item objects
  // Each item should have: id, name, categoryId, category, price
  // Hint: const [items] = useState([
  //   { id: 1, name: 'Laptop', categoryId: 1, category: 'Electronics', price: 999 },
  //   { id: 2, name: 'T-Shirt', categoryId: 2, category: 'Clothing', price: 25 },
  //   { id: 3, name: 'Book', categoryId: 3, category: 'Books', price: 15 },
  //   { id: 4, name: 'Headphones', categoryId: 1, category: 'Electronics', price: 150 },
  //   { id: 5, name: 'Jeans', categoryId: 2, category: 'Clothing', price: 60 },
  //   { id: 6, name: 'Notebook', categoryId: 3, category: 'Books', price: 8 },
  //   { id: 7, name: 'Phone', categoryId: 1, category: 'Electronics', price: 699 },
  //   { id: 8, name: 'Jacket', categoryId: 2, category: 'Clothing', price: 120 },
  // ]);

  // TODO 3: Create selectedCategoryId state starting with null
  // Hint: const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // TODO 4: Create filteredItems state
  // - Initialize with items array (from TODO 2)
  // - This will hold the filtered list of items
  // Hint: const [filteredItems, setFilteredItems] = useState(items);

  // TODO 5: Create useEffect hook to filter items when selectedCategoryId changes
  // - Dependencies should include selectedCategoryId and items
  // - If selectedCategoryId is null, show all items
  // - Otherwise, filter items by categoryId
  // Hint: useEffect(() => { ... }, [selectedCategoryId, items]);
  // useEffect(() => {
  //   if (selectedCategoryId === null) {
  //     setFilteredItems(items);
  //   } else {
  //     const filtered = items.filter((item) => item.categoryId === selectedCategoryId);
  //     setFilteredItems(filtered);
  //   }
  // }, [selectedCategoryId, items]);

  // TODO 6: Create handleCategoryClick function
  // - It should receive categoryId as parameter
  // - If same category clicked, set selectedCategoryId to null (toggle off)
  // - Otherwise, set selectedCategoryId to categoryId
  // const handleCategoryClick = (categoryId) => {
  //   if (selectedCategoryId === categoryId) {
  //     setSelectedCategoryId(null);
  //   } else {
  //     setSelectedCategoryId(categoryId);
  //   }
  // };

  // TODO 7: Create getSelectedCategoryName function
  // - If selectedCategoryId is null, return null
  // - Otherwise, find category in categories array by id
  // - Return category name
  // const getSelectedCategoryName = () => {
  //   if (selectedCategoryId === null) return null;
  //   const category = categories.find((cat) => cat.id === selectedCategoryId);
  //   return category ? category.name : null;
  // };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <div style={{ marginBottom: '20px' }}>
        <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Filter by Category:
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {/* TODO 8: Map categories array to button elements */}
          {/* - Each button should have onClick={() => handleCategoryClick(category.id)} */}
          {/* - Display category.name as button text */}
          {/* - Style button: active state (selectedCategoryId === category.id) should have blue background */}
          {/* - Add key prop using category.id */}
          
          {/* TODO 9: Add "All" button */}
          {/* - onClick should set selectedCategoryId to null */}
          {/* - Active state (selectedCategoryId === null) should have gray background */}
        </div>
        {/* TODO 10: Conditionally show message when selectedCategoryId is not null */}
        {/* Show: "Showing items in category: <strong>{getSelectedCategoryName()}</strong>" */}
        {/* Hint: {selectedCategoryId !== null && <p>...</p>} */}
      </div>

      <div>
        <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Items (?):
        </p>
        {/* TODO 11: Map filteredItems array to ItemCard components */}
        {/* - Pass name, category, and price as props */}
        {/* - Add key prop using item.id */}
        
        {/* TODO 12: Show "No items found" message when filteredItems is empty */}
        {/* Hint: {filteredItems.length === 0 && <p>No items found...</p>} */}
      </div>
    </div>
  );
}

