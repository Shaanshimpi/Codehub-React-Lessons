import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard.jsx';

// Main component - manages students array and filters based on marks threshold
export default function Main() {
  const [students] = useState([
    { id: 1, name: 'Alice', marks: 85 },
    { id: 2, name: 'Bob', marks: 92 },
    { id: 3, name: 'Charlie', marks: 78 },
    { id: 4, name: 'Diana', marks: 95 },
    { id: 5, name: 'Eve', marks: 65 },
    { id: 6, name: 'Frank', marks: 88 },
    { id: 7, name: 'Grace', marks: 72 },
    { id: 8, name: 'Henry', marks: 90 },
  ]);

  const [marksThreshold, setMarksThreshold] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);

  // useEffect to filter students whenever marksThreshold changes
  useEffect(() => {
      if (marksThreshold === '') {
        // If input is empty, show all students
        setFilteredStudents(students);
      } else {
        const threshold = Number(marksThreshold);
        // Filter students with marks greater than or equal to threshold
        const filtered = students.filter((student) => student.marks >= threshold);
        setFilteredStudents(filtered);
      }
    }, []);

  const handleInputChange = (e) => {
    setMarksThreshold(e.target.value);
  };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="marks-input" style={{ display: 'block', marginBottom: '8px' }}>
          Filter by Minimum Marks:
        </label>
        <input
          id="marks-input"
          type="number"
          value={marksThreshold}
          onChange={handleInputChange}
          placeholder="Enter minimum marks (e.g., 80)"
          style={{
            padding: '8px 12px',
            fontSize: '16px',
            border: '2px solid #3498db',
            borderRadius: '5px',
            width: '250px',
          }}
        />
        {marksThreshold !== '' && (
          <p style={{ marginTop: '8px', color: '#7f8c8d' }}>
            Showing students with marks ≥ {marksThreshold}
          </p>
        )}
      </div>

      <div>
        <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Students ({filteredStudents.length}):
        </p>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              marks={student.marks}
            />
          ))
        ) : (
          <p style={{ color: '#e74c3c', fontStyle: 'italic' }}>
            No students found with marks ≥ {marksThreshold}
          </p>
        )}
      </div>
    </div>
  );
}

