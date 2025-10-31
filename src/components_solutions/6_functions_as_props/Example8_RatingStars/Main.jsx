import React, { useState } from 'react';
import Rating from './Rating.jsx';

export default function Main() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p>Rating: {rating}</p>
      <Rating value={rating} onChange={setRating} />
    </div>
  );
}


