import React, { useState } from 'react';

// TODO 1: Create EmployeeCard component that receives {name, salary} props
// Display salary formatted with toLocaleString()

// Exercise 6: Sort list
export default function Example6_SortList() {
  const employees = [
    { id: 1, name: 'Alice', salary: 50000 },
    { id: 2, name: 'Bob', salary: 75000 },
    { id: 3, name: 'Charlie', salary: 60000 },
    { id: 4, name: 'Diana', salary: 90000 },
  ];

  // TODO 2: Create sortOrder state starting at 'asc'
  // const [sortOrder, setSortOrder] = useState('asc');

  // TODO 3: Create sortedEmployees by sorting a copy of employees array
  // Use [...employees].sort() to avoid mutating original array
  // If sortOrder is 'asc', sort low to high: a.salary - b.salary
  // If sortOrder is 'desc', sort high to low: b.salary - a.salary
  const sortedEmployees = employees; // Replace this

  return (
    <div>
      <h2>Hello CodeHub</h2>
      {/* TODO 4: Add button to toggle sortOrder between 'asc' and 'desc' */}
      {/* Button text should show current sort direction */}
      <p>Employees:</p>
      {/* TODO 5: Map sortedEmployees to EmployeeCard components */}
    </div>
  );
}

