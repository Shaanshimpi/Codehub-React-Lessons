import React, { useState } from 'react';
import BlogCard from './BlogCard.jsx';

// Main component - manages blog list state
export default function Main() {
  // TODO 1: Create blogs state with initial array of blog objects
  // Each blog should have: id, title, author
  // const [blogs, setBlogs] = useState([
  //   { id: 1, title: 'React Basics', author: 'Alice' },
  //   { id: 2, title: 'Props Explained', author: 'Bob' },
  //   { id: 3, title: 'State Management', author: 'Charlie' },
  //   { id: 4, title: 'Event Handling', author: 'Diana' },
  // ]);

  // TODO 2: Create handleDelete function
  // - It should receive an id parameter
  // - Use .filter() to create a new array without the blog with that id
  // - Update state with setBlogs(filteredBlogs)
  // const handleDelete = (id) => {
  //   const filteredBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(filteredBlogs);
  // };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Blog Posts (?):</p>
      {/* TODO 3: Map blogs array to BlogCard components */}
      {/* Pass id, title, author, and onDelete={handleDelete} as props */}
      
      {/* TODO 4: Show "No blog posts available." when blogs array is empty */}
      {/* Hint: {blogs.length === 0 && <p>No blog posts available.</p>} */}
    </div>
  );
}
