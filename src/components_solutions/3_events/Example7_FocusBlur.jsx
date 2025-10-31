import React from 'react';

// Example: Focus and blur events
export default function Example7_FocusBlur() {
  const onFocus = () => console.log('focused');
  const onBlur = () => console.log('blurred');

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <input onFocus={onFocus} onBlur={onBlur} placeholder="Focus then blur" />
    </div>
  );
}


