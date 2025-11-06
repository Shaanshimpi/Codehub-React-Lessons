import React from 'react';

// StudentCard component displays individual student information
export default function StudentCard({ name, marks }) {
  // Determine grade based on marks
  const getGrade = (marks) => {
    if (marks >= 90) return 'A+';
    if (marks >= 80) return 'A';
    if (marks >= 70) return 'B';
    if (marks >= 60) return 'C';
    return 'D';
  };

  const grade = getGrade(marks);
  const gradeColor = marks >= 80 ? '#27ae60' : marks >= 70 ? '#f39c12' : '#e74c3c';

  return (
    <div
      style={{
        padding: '15px',
        border: '2px solid #3498db',
        borderRadius: '8px',
        margin: '10px 0',
        backgroundColor: '#ecf0f1',
      }}
    >
      <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>{name}</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
          Marks: <span style={{ color: '#2980b9' }}>{marks}</span>
        </p>
        <p
          style={{
            margin: 0,
            padding: '4px 12px',
            backgroundColor: gradeColor,
            color: 'white',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          Grade: {grade}
        </p>
      </div>
    </div>
  );
}

