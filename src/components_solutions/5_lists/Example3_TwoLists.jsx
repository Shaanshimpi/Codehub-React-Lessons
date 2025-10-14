import React from 'react';

// Teacher component
function TeacherCard({ name, subject }) {
  return (
    <div style={{ padding: '10px', border: '1px solid #3498db', margin: '5px' }}>
      <h4>{name}</h4>
      <p>Subject: {subject}</p>
    </div>
  );
}

// Student component
function StudentCard({ name, grade }) {
  return (
    <div style={{ padding: '10px', border: '1px solid #27ae60', margin: '5px' }}>
      <h4>{name}</h4>
      <p>Grade: {grade}</p>
    </div>
  );
}

// Example 3: Two different lists with different components
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
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} name={teacher.name} subject={teacher.subject} />
          ))}
        </div>
        <div>
          <h3>Students:</h3>
          {students.map((student) => (
            <StudentCard key={student.id} name={student.name} grade={student.grade} />
          ))}
        </div>
      </div>
    </div>
  );
}
