import React from 'react';

// TODO 1: Create TeacherCard component that receives {name, subject} props
// Use blue border: border: '1px solid #3498db'

// TODO 2: Create StudentCard component that receives {name, grade} props
// Use green border: border: '1px solid #27ae60'

// Exercise 3: Two different lists with different components
export default function Example3_TwoLists() {
  const teachers = [
    { id: 1, name: 'Mr. Smith', subject: 'Math' },
    { id: 2, name: 'Ms. Johnson', subject: 'Science' },
  ];

  const students = [
    { id: 1, name: 'Alice', grade: 'A' },
    { id: 2, name: 'Bob', grade: 'B' },
  ];

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <h3>Teachers:</h3>
          {/* TODO 3: Map teachers to TeacherCard components */}
        </div>
        <div>
          <h3>Students:</h3>
          {/* TODO 4: Map students to StudentCard components */}
        </div>
      </div>
    </div>
  );
}
