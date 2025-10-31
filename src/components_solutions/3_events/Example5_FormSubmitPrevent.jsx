import React from 'react';

// Example: Prevent default on form submit
export default function Example5_FormSubmitPrevent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form prevented');
  };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Type something" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


