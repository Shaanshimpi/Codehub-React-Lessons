import React, { useState, useEffect } from 'react';
function ExampleUseEffect() {
  console.log("ExampleUseEffect");

  const [msg, setMsg] = useState("Hello");

    useEffect(() => {
        setMsg("Hi");
    },[])
  return (
    <div>
        <h1>{msg} CodeHub</h1>
    </div>
  );
}

export default ExampleUseEffect;
