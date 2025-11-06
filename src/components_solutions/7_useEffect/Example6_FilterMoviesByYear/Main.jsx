import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard.jsx';

// Main component - manages movies array and filters based on year threshold
export default function Main() {
  const [movies] = useState([
    { id: 1, title: 'The Matrix', year: 1999, genre: 'Sci-Fi' },
    { id: 2, title: 'Inception', year: 2010, genre: 'Sci-Fi' },
    { id: 3, title: 'The Dark Knight', year: 2008, genre: 'Action' },
    { id: 4, title: 'Pulp Fiction', year: 1994, genre: 'Crime' },
    { id: 5, title: 'Interstellar', year: 2014, genre: 'Sci-Fi' },
    { id: 6, title: 'The Godfather', year: 1972, genre: 'Crime' },
    { id: 7, title: 'Avatar', year: 2009, genre: 'Sci-Fi' },
    { id: 8, title: 'Titanic', year: 1997, genre: 'Romance' },
  ]);

  const [minYear, setMinYear] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // useEffect to filter movies whenever minYear changes
  useEffect(() => {
    if (minYear === '') {
      // If input is empty, show all movies
      setFilteredMovies(movies);
    } else {
      const threshold = Number(minYear);
      // Filter movies with year greater than or equal to threshold
      const filtered = movies.filter((movie) => movie.year >= threshold);
      setFilteredMovies(filtered);
    }
  }, [minYear, movies]);

  const handleInputChange = (e) => {
    setMinYear(e.target.value);
  };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="year-input" style={{ display: 'block', marginBottom: '8px' }}>
          Filter by Minimum Year:
        </label>
        <input
          id="year-input"
          type="number"
          value={minYear}
          onChange={handleInputChange}
          placeholder="Enter minimum year (e.g., 2000)"
          style={{
            padding: '8px 12px',
            fontSize: '16px',
            border: '2px solid #3498db',
            borderRadius: '5px',
            width: '250px',
          }}
        />
        {minYear !== '' && (
          <p style={{ marginTop: '8px', color: '#7f8c8d' }}>
            Showing movies from year ≥ {minYear}
          </p>
        )}
      </div>

      <div>
        <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Movies ({filteredMovies.length}):
        </p>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              genre={movie.genre}
            />
          ))
        ) : (
          <p style={{ color: '#e74c3c', fontStyle: 'italic' }}>
            No movies found from year ≥ {minYear}
          </p>
        )}
      </div>
    </div>
  );
}

