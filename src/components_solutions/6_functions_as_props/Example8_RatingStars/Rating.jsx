import React from 'react';

export default function Rating({ value, onChange }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div>
      {stars.map((s) => (
        <button
          key={s}
          onClick={() => onChange(s)}
          style={{ color: s <= value ? '#f1c40f' : '#bdc3c7', fontSize: '18px', marginRight: '4px' }}
        >
          ★
        </button>
      ))}
    </div>
  );
}


