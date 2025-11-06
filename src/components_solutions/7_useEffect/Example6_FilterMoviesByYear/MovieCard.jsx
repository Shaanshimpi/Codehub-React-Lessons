import React from 'react';

// MovieCard component displays individual movie information
export default function MovieCard({ title, year, genre }) {
  const getDecade = (year) => {
    return Math.floor(year / 10) * 10 + 's';
  };

  const decade = getDecade(year);
  const genreColor = genre === 'Sci-Fi' ? '#9b59b6' : genre === 'Action' ? '#e74c3c' : genre === 'Crime' ? '#34495e' : '#3498db';

  return (
    <div
      style={{
        padding: '15px',
        border: '2px solid #3498db',
        borderRadius: '8px',
        margin: '10px 0',
        backgroundColor: '#ecf0f1',
      }}
    >
      <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
        <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>
          Year: <span style={{ color: '#2980b9' }}>{year}</span>
        </p>
        <p
          style={{
            margin: 0,
            padding: '4px 12px',
            backgroundColor: genreColor,
            color: 'white',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          {genre}
        </p>
        <p style={{ margin: 0, fontSize: '14px', color: '#7f8c8d' }}>
          ({decade})
        </p>
      </div>
    </div>
  );
}

