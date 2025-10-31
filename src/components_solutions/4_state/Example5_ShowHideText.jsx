import React, { useState } from 'react';

// Example: Disable submit button when input is empty
export default function Example5_ShowHideText() {
  const [text, setText] = useState('');

  const isDisabled = text.trim().length === 0;

  const handleSubmit = () => {
    alert('Submitted: ' + text);
    setText('');
  };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type to enable submit"
      />
      <button onClick={handleSubmit} disabled={isDisabled} style={{ marginLeft: '8px' }}>
        Submit
      </button>
      <p>Status: {isDisabled ? 'Disabled' : 'Ready'}</p>
    </div>
  );
}


