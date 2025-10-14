import React, { useState } from 'react';

// TODO 1: Create BookCard component that receives {title, author} props

// Exercise 5: Search/filter with input
export default function Example5_SearchList() {
  const books = [
    { id: 1, title: 'React Basics', author: 'John Doe' },
    { id: 2, title: 'JavaScript Pro', author: 'Jane Smith' },
    { id: 3, title: 'React Advanced', author: 'Bob Wilson' },
    { id: 4, title: 'CSS Mastery', author: 'Alice Brown' },
  ];

  // TODO 2: Create searchTerm state starting with empty string ''
  // const [searchTerm, setSearchTerm] = useState('');

  // TODO 3: Create filteredBooks using .filter()
  // Filter books where title includes searchTerm (case-insensitive)
  // Hint: book.title.toLowerCase().includes(searchTerm.toLowerCase())
  const filteredBooks = books; // Replace this

  return (
    <div>
      <h2>Hello CodeHub</h2>
      {/* TODO 4: Add input with value={searchTerm} and onChange to update searchTerm */}
      {/* Add placeholder="Search books..." */}
      <p>Found {filteredBooks.length} books:</p>
      {/* TODO 5: Map filteredBooks to BookCard components */}
    </div>
  );
}

