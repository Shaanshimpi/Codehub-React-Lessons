import React, { useState } from 'react';
import UserCard from './UserCard.jsx';

export default function Main() {
  // TODO 1: Create selectedId state
  // TODO 2: Create users array with id and name
  // TODO 3: Implement onSelect(id) to set selectedId

  return (
    <div>
      <h2>Hello CodeHub</h2>
      {/* TODO 4: Show Selected: selectedId or 'None' */}
      {/* TODO 5: Map users to <UserCard ... selected={u.id===selectedId} /> */}
    </div>
  );
}


