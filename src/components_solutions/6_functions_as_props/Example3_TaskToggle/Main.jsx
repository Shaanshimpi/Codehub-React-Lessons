import React, { useState } from 'react';
import TaskCard from './TaskCard.jsx';

// Main component - manages task completion
export default function Main() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React basics', isCompleted: true },
    { id: 2, text: 'Understand props', isCompleted: true },
    { id: 3, text: 'Master state management', isCompleted: false },
    { id: 4, text: 'Practice event handling', isCompleted: false },
  ]);

  // Function to toggle task completion
  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const completedCount = tasks.filter((t) => t.isCompleted).length;

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Tasks - {completedCount} of {tasks.length} completed:</p>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          text={task.text}
          isCompleted={task.isCompleted}
          onToggle={handleToggleComplete}
        />
      ))}
    </div>
  );
}

