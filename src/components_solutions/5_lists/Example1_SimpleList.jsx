import React from 'react';

// Student component receives props
function StudentCard({ name, age }) {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

// Example 1: Map array of objects to components
export default function Example1_SimpleList() {
  const students = [
    { id: 1, name: 'Alice', age: 20 },
    { id: 2, name: 'Bob', age: 22 },
    { id: 3, name: 'Charlie', age: 21 },
  ];

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Student List:</p>
      {students.map((student) => (
        <StudentCard key={student.id} name={student.name} age={student.age} />
      ))}
    </div>
  );
}
