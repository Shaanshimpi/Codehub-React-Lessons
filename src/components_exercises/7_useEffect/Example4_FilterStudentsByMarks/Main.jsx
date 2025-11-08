import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard.jsx';

// Main component - manages students array and filters based on marks threshold
export default function Main() {
  // TODO 1: Create students state with initial array of student objects
  // Each student should have: id, name, marks
  const [students, setStudents] = useState([
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

  useEffect(()=>{
    
    const threshold = Number(marksThreshold);
    const filtered = students.filter((student) => student.marks >= threshold);
    setFilteredStudents(filtered)
  },[marksThreshold])


  return (
    <div>
      <h2>Hello CodeHub</h2>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="marks-input" style={{ display: 'block', marginBottom: '8px' }}>
          Filter by Minimum Marks:
        </label>
        {/* TODO 6: Add input element */}
        {/* - type="number" */}
        {/* - value={marksThreshold} */}
        {/* - onChange={handleInputChange} */}
        {/* - placeholder="Enter minimum marks (e.g., 80)" */}
        {/* - Add styling: padding, fontSize, border, borderRadius, width */}
        <input
         type="number"
         value={marksThreshold}
         onChange={(e)=>setMarksThreshold(e.target.value)}
         
         />
        
        {/* TODO 7: Conditionally show message when marksThreshold is not empty */}
        
        {/* Show: "Showing students with marks ≥ {marksThreshold}" */}
        {/* Hint: {marksThreshold !== '' && <p>...</p>} */}
      </div>

      <div>
        <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Students (?):
        </p>
        {/* TODO 8: Map filteredStudents array to StudentCard components */}
        {/* - Pass name and marks as props */}
        {/* - Add key prop using student.id */}
        {filteredStudents.map((ele)=><StudentCard {...ele} key={ele.id}/>)}
        
        
        {/* TODO 9: Show "No students found" message when filteredStudents is empty */}
        {/* Hint: {filteredStudents.length === 0 && <p>No students found...</p>} */}
      </div>
    </div>
  );
}

