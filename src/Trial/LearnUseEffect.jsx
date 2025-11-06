import { useEffect, useState } from "react";

export default function LearnUseEffect(){
  const [name, setName] = useState("Deepak")
  console.log("hi there!");

  useEffect(()=>{
    setName("Valmik")
  })
  
  return<div>
    <h2>{name}</h2>
  </div>
}