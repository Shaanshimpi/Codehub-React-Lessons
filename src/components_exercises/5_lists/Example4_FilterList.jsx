import React, { useState } from 'react';

// TODO 1: Create StudentCard component that receives {name, age, grade} props

// Exercise 4: Filter list based on condition
export default function Example4_FilterList() {
  const students = [
    { id: 1, name: 'Alice', age: 20, grade: 'A' },
    { id: 2, name: 'Bob', age: 22, grade: 'B' },
    { id: 3, name: 'Charlie', age: 21, grade: 'A' },
    { id: 4, name: 'Diana', age: 23, grade: 'C' },
  ];

  // TODO 2: Create showOnlyA state starting at false
  // const [showOnlyA, setShowOnlyA] = useState(false);

  // TODO 3: Create filteredStudents using .filter()
  // If showOnlyA is true, filter students where grade === 'A'
  // Otherwise, show all students
  // Hint: students.filter((student) => student.grade === 'A')
  const filteredStudents = students; // Replace this

  return (
    <div>
      <h2>Hello CodeHub</h2>
      {/* TODO 4: Add button to toggle showOnlyA */}
      {/* Button text should change based on showOnlyA state */}
      <p>Showing {filteredStudents.length} students:</p>
      {/* TODO 5: Map filteredStudents to StudentCard components */}
    </div>
  );
}

