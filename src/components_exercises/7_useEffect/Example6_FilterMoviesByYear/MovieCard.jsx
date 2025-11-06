import React from 'react';

// MovieCard component displays individual movie information
// TODO: Create MovieCard component that receives { title, year, genre } as props
export default function MovieCard({ title, year, genre }) {
  // TODO 1: Create getDecade function that returns decade string
  // - Calculate decade: Math.floor(year / 10) * 10 + 's'
  // - Example: 1999 -> '1990s', 2010 -> '2010s'
  // const getDecade = (year) => {
  //   return Math.floor(year / 10) * 10 + 's';
  // };

  // TODO 2: Determine genreColor based on genre
  // - 'Sci-Fi': '#9b59b6' (purple)
  // - 'Action': '#e74c3c' (red)
  // - 'Crime': '#34495e' (dark gray)
  // - else: '#3498db' (blue)
  // const genreColor = genre === 'Sci-Fi' ? '#9b59b6' : genre === 'Action' ? '#e74c3c' : genre === 'Crime' ? '#34495e' : '#3498db';

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
      {/* TODO 3: Add h3 element with movie title */}
      {/* Style: margin: '0 0 8px 0', color: '#2c3e50' */}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
        {/* TODO 4: Display year in a paragraph */}
        {/* Format: "Year: {year}" with year in blue color (#2980b9) */}
        {/* Style: margin: 0, fontSize: '16px', fontWeight: 'bold' */}
        
        {/* TODO 5: Display genre badge */}
        {/* - Show genre */}
        {/* - Style: backgroundColor: genreColor, color: 'white', padding, borderRadius, fontWeight */}
        
        {/* TODO 6: Display decade in a paragraph */}
        {/* - Show decade from getDecade(year) */}
        {/* - Format: "({decade})" */}
        {/* - Style: margin: 0, fontSize: '14px', color: '#7f8c8d' */}
      </div>
    </div>
  );
}

