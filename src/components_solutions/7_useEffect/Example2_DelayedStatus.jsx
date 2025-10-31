import React, { useEffect, useState } from 'react';

// Example 2: Show "Ready" after a short delay (setTimeout + cleanup)
export default function Example2_DelayedStatus() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(id);
  }, []);

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Status: {ready ? 'Ready ✅' : 'Loading...'}</p>
      <div style={{ width: '120px', height: '10px', background: '#eee' }}>
        <div style={{ width: ready ? '100%' : '40%', height: '100%', background: ready ? '#2ecc71' : '#f39c12', transition: 'width 0.3s' }} />
      </div>
    </div>
  );
}


