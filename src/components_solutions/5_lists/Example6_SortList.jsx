import React, { useState } from 'react';

// Employee component
function EmployeeCard({ name, salary }) {
  return (
    <div style={{ padding: '10px', border: '1px solid #ff9800', margin: '5px' }}>
      <h3>{name}</h3>
      <p>Salary: ${salary.toLocaleString()}</p>
    </div>
  );
}

// Example 6: Sort list
export default function Example6_SortList() {
  const employees = [
    { id: 1, name: 'Alice', salary: 50000 },
    { id: 2, name: 'Bob', salary: 75000 },
    { id: 3, name: 'Charlie', salary: 60000 },
    { id: 4, name: 'Diana', salary: 90000 },
  ];

  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

  // Sort employees by salary
  const sortedEmployees = [...employees].sort((a, b) => {
    return sortOrder === 'asc' ? a.salary - b.salary : b.salary - a.salary;
  });

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort by Salary ({sortOrder === 'asc' ? 'Low to High' : 'High to Low'})
      </button>
      <p>Employees:</p>
      {sortedEmployees.map((employee) => (
        <EmployeeCard 
          key={employee.id} 
          name={employee.name} 
          salary={employee.salary} 
        />
      ))}
    </div>
  );
}

