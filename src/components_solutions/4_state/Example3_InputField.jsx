import React, { useState } from 'react';

// Example 3: Controlled input (text state)
export default function Example3_InputField() {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}

