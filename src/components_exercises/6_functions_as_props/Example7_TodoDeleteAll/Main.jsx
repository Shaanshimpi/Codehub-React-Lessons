import React, { useState } from 'react';
import TodoItem from './TodoItem.jsx';

export default function Main() {
  // TODO 1: Create todos state (array of {id, text})
  // TODO 2: deleteOne(id) removes one; deleteAll() clears array

  return (
    <div>
      <h2>Hello CodeHub</h2>
      {/* TODO 3: Delete All button (disabled when none) */}
      {/* TODO 4: Map todos to <TodoItem ... onDelete={deleteOne} /> */}
      {/* TODO 5: Show fallback when no todos */}
    </div>
  );
}


