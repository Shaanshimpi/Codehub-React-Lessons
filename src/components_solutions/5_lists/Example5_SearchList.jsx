import React, { useState } from 'react';

// Book component
function BookCard({ title, author }) {
  return (
    <div style={{ padding: '10px', border: '1px solid #9c27b0', margin: '5px' }}>
      <h3>{title}</h3>
      <p>by {author}</p>
    </div>
  );
}

// Example 5: Search/filter with input
export default function Example5_SearchList() {
  const books = [
    { id: 1, title: 'React Basics', author: 'John Doe' },
    { id: 2, title: 'JavaScript Pro', author: 'Jane Smith' },
    { id: 3, title: 'React Advanced', author: 'Bob Wilson' },
    { id: 4, title: 'CSS Mastery', author: 'Alice Brown' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filter books by title (case-insensitive)
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '5px', marginBottom: '10px', width: '200px' }}
      />
      <p>Found {filteredBooks.length} books:</p>
      {filteredBooks.map((book) => (
        <BookCard key={book.id} title={book.title} author={book.author} />
      ))}
    </div>
  );
}

