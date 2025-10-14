import React from 'react';

// Example 3: Default values via parameters
function Button({ label = 'Click', color = 'blue' }) {
  return <button>{label} - {color}</button>;
}

function Example3_PropsWithDefaults() {
  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <Button />
      <Button label="Save" />
      <Button color="red" />
    </div>
  );
}

export default Example3_PropsWithDefaults;

