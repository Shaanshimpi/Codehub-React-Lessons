import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard.jsx';

// Main component - manages movies array and filters based on year threshold
export default function Main() {
  // TODO 1: Create movies state with initial array of movie objects
  // Each movie should have: id, title, year, genre
  // Hint: const [movies] = useState([
  //   { id: 1, title: 'The Matrix', year: 1999, genre: 'Sci-Fi' },
  //   { id: 2, title: 'Inception', year: 2010, genre: 'Sci-Fi' },
  //   { id: 3, title: 'The Dark Knight', year: 2008, genre: 'Action' },
  //   { id: 4, title: 'Pulp Fiction', year: 1994, genre: 'Crime' },
  //   { id: 5, title: 'Interstellar', year: 2014, genre: 'Sci-Fi' },
  //   { id: 6, title: 'The Godfather', year: 1972, genre: 'Crime' },
  //   { id: 7, title: 'Avatar', year: 2009, genre: 'Sci-Fi' },
  //   { id: 8, title: 'Titanic', year: 1997, genre: 'Romance' },
  // ]);

  // TODO 2: Create minYear state starting with empty string ''
  // Hint: const [minYear, setMinYear] = useState('');

  // TODO 3: Create filteredMovies state
  // - Initialize with movies array (from TODO 1)
  // - This will hold the filtered list of movies
  // Hint: const [filteredMovies, setFilteredMovies] = useState(movies);

  // TODO 4: Create useEffect hook to filter movies when minYear changes
  // - Dependencies should include minYear and movies
  // - If minYear is empty, show all movies
  // - Otherwise, filter movies with year >= threshold
  // Hint: useEffect(() => { ... }, [minYear, movies]);
  // useEffect(() => {
  //   if (minYear === '') {
  //     setFilteredMovies(movies);
  //   } else {
  //     const threshold = Number(minYear);
  //     const filtered = movies.filter((movie) => movie.year >= threshold);
  //     setFilteredMovies(filtered);
  //   }
  // }, [minYear, movies]);

  // TODO 5: Create handleInputChange function
  // - It should receive event (e) as parameter
  // - Update minYear state with e.target.value
  // const handleInputChange = (e) => {
  //   setMinYear(e.target.value);
  // };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="year-input" style={{ display: 'block', marginBottom: '8px' }}>
          Filter by Minimum Year:
        </label>
        {/* TODO 6: Add input element */}
        {/* - type="number" */}
        {/* - value={minYear} */}
        {/* - onChange={handleInputChange} */}
        {/* - placeholder="Enter minimum year (e.g., 2000)" */}
        {/* - Add styling: padding, fontSize, border, borderRadius, width */}
        
        {/* TODO 7: Conditionally show message when minYear is not empty */}
        {/* Show: "Showing movies from year ≥ {minYear}" */}
        {/* Hint: {minYear !== '' && <p>...</p>} */}
      </div>

      <div>
        <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Movies (?):
        </p>
        {/* TODO 8: Map filteredMovies array to MovieCard components */}
        {/* - Pass title, year, and genre as props */}
        {/* - Add key prop using movie.id */}
        
        {/* TODO 9: Show "No movies found" message when filteredMovies is empty */}
        {/* Hint: {filteredMovies.length === 0 && <p>No movies found...</p>} */}
      </div>
    </div>
  );
}

