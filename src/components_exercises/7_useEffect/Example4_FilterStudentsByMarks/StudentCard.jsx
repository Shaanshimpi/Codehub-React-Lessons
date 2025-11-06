import React from 'react';

// StudentCard component displays individual student information
// TODO: Create StudentCard component that receives { name, marks } as props
export default function StudentCard({ name, marks }) {
  // TODO 1: Create getGrade function that returns grade based on marks
  // - marks >= 90: return 'A+'
  // - marks >= 80: return 'A'
  // - marks >= 70: return 'B'
  // - marks >= 60: return 'C'
  // - else: return 'D'
  // const getGrade = (marks) => {
  //   if (marks >= 90) return 'A+';
  //   if (marks >= 80) return 'A';
  //   if (marks >= 70) return 'B';
  //   if (marks >= 60) return 'C';
  //   return 'D';
  // };

  // TODO 2: Determine gradeColor based on marks
  // - marks >= 80: '#27ae60' (green)
  // - marks >= 70: '#f39c12' (orange)
  // - else: '#e74c3c' (red)
  // const gradeColor = marks >= 80 ? '#27ae60' : marks >= 70 ? '#f39c12' : '#e74c3c';

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
      {/* TODO 3: Add h3 element with student name */}
      {/* Style: margin: '0 0 8px 0', color: '#2c3e50' */}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* TODO 4: Display marks in a paragraph */}
        {/* Format: "Marks: {marks}" with marks in blue color (#2980b9) */}
        {/* Style: margin: 0, fontSize: '18px', fontWeight: 'bold' */}
        
        {/* TODO 5: Display grade badge */}
        {/* - Show "Grade: {grade}" where grade comes from getGrade(marks) */}
        {/* - Style: backgroundColor: gradeColor, color: 'white', padding, borderRadius, fontWeight */}
      </div>
    </div>
  );
}

