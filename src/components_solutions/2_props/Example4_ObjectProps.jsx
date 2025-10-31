import React from 'react';

// Example 4: Passing an object as a prop
function Profile({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
    </div>
  );
}

function Example4_ObjectProps() {
  const user = { name: 'Nina', age: 26, city: 'Berlin' };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <Profile user={user} />
    </div>
  );
}

export default Example4_ObjectProps;


