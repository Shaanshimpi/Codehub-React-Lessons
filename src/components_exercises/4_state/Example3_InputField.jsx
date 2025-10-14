import React, { useState } from 'react';

// Exercise 3: Controlled input (mirror the solution)
export default function Example3_InputField() {
  // TODO 1: Create text state starting with empty string ''
  // Hint: const [text, setText] = useState('');

  return (
    <div>
      <h2>Hello CodeHub</h2>
      {/* TODO 2: Add input with value={text} and onChange={(e) => setText(e.target.value)} */}
      {/* TODO 3: Add placeholder "Type something..." */}
      {/* TODO 4: Display "You typed: {text}" in a paragraph */}
    </div>
  );
}

