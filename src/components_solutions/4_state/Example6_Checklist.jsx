import React, { useState } from 'react';

// Example: Simple checklist state
export default function Example6_Checklist() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn JSX', done: false },
    { id: 2, title: 'Practice Props', done: true },
    { id: 3, title: 'Handle Events', done: false },
  ]);

  const toggle = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      {tasks.map((t) => (
        <label key={t.id} style={{ display: 'block', margin: '4px 0' }}>
          <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} /> {t.title}
        </label>
      ))}
    </div>
  );
}


