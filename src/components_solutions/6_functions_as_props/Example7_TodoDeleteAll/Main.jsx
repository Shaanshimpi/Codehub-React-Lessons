import React, { useState } from 'react';
import TodoItem from './TodoItem.jsx';

export default function Main() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Read docs' },
    { id: 2, text: 'Write examples' },
    { id: 3, text: 'Review PRs' },
  ]);

  const deleteOne = (id) => setTodos(todos.filter((t) => t.id !== id));
  const deleteAll = () => setTodos([]);

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <button onClick={deleteAll} disabled={todos.length === 0}>Delete All</button>
      {todos.map((t) => (
        <TodoItem key={t.id} id={t.id} text={t.text} onDelete={deleteOne} />
      ))}
      {todos.length === 0 && <p style={{ color: '#7f8c8d' }}>No todos left.</p>}
    </div>
  );
}


