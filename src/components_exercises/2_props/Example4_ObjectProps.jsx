import React from 'react';

// Exercise 4: Passing an object as a prop
function Profile({ user }) {
  return (
    <div>
      {/* TODO 2: Show user.name, user.age, user.city */}
    </div>
  );
}

function Example4_ObjectProps() {
  // TODO 1: Create user = { name: 'Nina', age: 26, city: 'Berlin' }

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      {/* TODO 3: Render <Profile user={user} /> */}
    </div>
  );
}

export default Example4_ObjectProps;


