import React, { useEffect, useState } from 'react';

// Example 3: Simple ticking clock (setInterval + cleanup)
export default function Example3_IntervalClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Time: {now.toLocaleTimeString()}</p>
    </div>
  );
}


