import React from 'react';

// Exercise 1: Basic props (single prop)
function Greeting() {
  // TODO 1: Add { name } parameter via destructuring
  return <h3>Hello {/* TODO 2: show name here */}</h3>;
}

function Example1_BasicProps() {
  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      {/* TODO 3: Render Greeting with name="Alice" */}
      {/* TODO 4: Render Greeting with name="Bob" */}
    </div>
  );
}

export default Example1_BasicProps;

