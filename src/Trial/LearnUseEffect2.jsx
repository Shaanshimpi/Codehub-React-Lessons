import { useEffect, useState } from "react";

 function StudentCard({ name, age, course, grade }) {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}

export default function LearnUseEffect2(){
  const [students, setStudents] = useState([
  { id: 1, name: "Aarav Patel", age: 19, course: "C++", grade: "A" },
  { id: 2, name: "Sneha Sharma", age: 20, course: "JavaScript", grade: "B+" },
  { id: 3, name: "Rohan Deshmukh", age: 18, course: "Python", grade: "A-" },
  { id: 4, name: "Isha Singh", age: 21, course: "Java", grade: "B" },
  { id: 5, name: "Kunal Joshi", age: 22, course: "React", grade: "A+" },
  { id: 6, name: "Meera Kulkarni", age: 19, course: "Node.js", grade: "B+" },
  { id: 7, name: "Tanishq Verma", age: 20, course: "HTML & CSS", grade: "A" },
  { id: 8, name: "Priya Nair", age: 18, course: "SQL", grade: "A-" }
])
  const filteredStudents = students.filter((ele)=>ele.age>20) 
  useEffect(()=>{
    setStudents(filteredStudents)
  })

  return<div>
    {
      students.map((ele)=><StudentCard {...ele} key={ele.id}/>)
    }
  </div>
}