import React from 'react';

export default function PostCard({ id, title, votes, onVote }) {
  return (
    <div style={{ padding: '10px', border: '2px solid #8e44ad', borderRadius: '8px', margin: '8px 0' }}>
      <h3>{/* TODO 1: Render title */}</h3>
      <p>Votes: {/* TODO 2: Render votes */}</p>
      {/* TODO 3: Add Upvote and Downvote buttons calling onVote(id, 1) / onVote(id, -1) */}
    </div>
  );
}


