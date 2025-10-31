import React, { useState } from 'react';

// Example: Input with live character count
export default function Example7_CharacterCount() {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here" />
      <p>Length: {text.length}</p>
    </div>
  );
}


