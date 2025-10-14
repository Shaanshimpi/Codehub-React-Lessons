import React from 'react';

// Example 1: Basic props (single prop)
function Greeting({ name }) {
  return <h3>Hello {name}</h3>;
}

function Example1_BasicProps() {
  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}

export default Example1_BasicProps;

