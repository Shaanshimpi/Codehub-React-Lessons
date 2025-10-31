import React, { useState } from 'react';

// Example 8: Simple client-side pagination
export default function Example8_Paginated() {
  const data = Array.from({ length: 12 }, (_, i) => ({ id: i + 1, name: 'Item ' + (i + 1) }));
  const [page, setPage] = useState(1);
  const pageSize = 4;
  const start = (page - 1) * pageSize;
  const visible = data.slice(start, start + pageSize);

  const next = () => setPage((p) => Math.min(p + 1, Math.ceil(data.length / pageSize)));
  const prev = () => setPage((p) => Math.max(p - 1, 1));

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <ul>
        {visible.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={prev} disabled={page === 1}>Prev</button>
      <button onClick={next} disabled={page === Math.ceil(data.length / pageSize)}>Next</button>
      <p>Page {page}</p>
    </div>
  );
}


