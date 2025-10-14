import React, { useState } from 'react';
import TaskCard from './TaskCard.jsx';

// Main component - manages task completion
export default function Main() {
  // TODO 1: Create tasks state with array of task objects
  // Each task should have: id, text, isCompleted
  // const [tasks, setTasks] = useState([
  //   { id: 1, text: 'Learn React basics', isCompleted: true },
  //   { id: 2, text: 'Understand props', isCompleted: true },
  //   { id: 3, text: 'Master state management', isCompleted: false },
  //   { id: 4, text: 'Practice event handling', isCompleted: false },
  // ]);

  // TODO 2: Create handleToggleComplete function
  // - Receives id parameter
  // - Use .map() to toggle isCompleted for the task with matching id
  // - Update state with setTasks
  // const handleToggleComplete = (id) => {
  //   const updatedTasks = tasks.map((task) =>
  //     task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
  //   );
  //   setTasks(updatedTasks);
  // };

  // TODO 3: Calculate completedCount using .filter()
  // const completedCount = tasks.filter((t) => t.isCompleted).length;

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Tasks - ? of ? completed:</p>
      {/* TODO 4: Map tasks to TaskCard components */}
      {/* Pass id, text, isCompleted, and onToggle={handleToggleComplete} */}
    </div>
  );
}

