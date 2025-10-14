import React, { useState } from 'react';
import BlogCard from './BlogCard.jsx';

// Main component - manages blog list state
export default function Main() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'React Basics', author: 'Alice' },
    { id: 2, title: 'Props Explained', author: 'Bob' },
    { id: 3, title: 'State Management', author: 'Charlie' },
    { id: 4, title: 'Event Handling', author: 'Diana' },
  ]);

  // Function to delete a blog post
  const handleDelete = (id) => {
    const filteredBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(filteredBlogs);
  };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Blog Posts ({blogs.length}):</p>
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          author={blog.author}
          onDelete={handleDelete}
        />
      ))}
      {blogs.length === 0 && (
        <p style={{ color: '#95a5a6' }}>No blog posts available.</p>
      )}
    </div>
  );
}
