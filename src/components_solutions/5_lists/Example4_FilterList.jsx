import React, { useState } from 'react';

// Student component
function StudentCard({ name, age, grade }) {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
      <h3>{name}</h3>
      <p>Age: {age} | Grade: {grade}</p>
    </div>
  );
}

// Example 4: Filter list based on condition
export default function Example4_FilterList() {
  const students = [
    { id: 1, name: 'Alice', age: 20, grade: 'A' },
    { id: 2, name: 'Bob', age: 22, grade: 'B' },
    { id: 3, name: 'Charlie', age: 21, grade: 'A' },
    { id: 4, name: 'Diana', age: 23, grade: 'C' },
  ];

  const [showOnlyA, setShowOnlyA] = useState(false);

  // Filter students with grade 'A'
  const filteredStudents = showOnlyA 
    ? students.filter((student) => student.grade === 'A')
    : students;

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <button onClick={() => setShowOnlyA(!showOnlyA)}>
        {showOnlyA ? 'Show All' : 'Show Only Grade A'}
      </button>
      <p>Showing {filteredStudents.length} students:</p>
      {filteredStudents.map((student) => (
        <StudentCard 
          key={student.id} 
          name={student.name} 
          age={student.age} 
          grade={student.grade} 
        />
      ))}
    </div>
  );
}

