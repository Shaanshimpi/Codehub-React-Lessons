import React from 'react';

export default function PostCard({ id, title, votes, onVote }) {
  return (
    <div style={{ padding: '10px', border: '2px solid #8e44ad', borderRadius: '8px', margin: '8px 0' }}>
      <h3>{title}</h3>
      <p>Votes: {votes}</p>
      <button onClick={() => onVote(id, 1)}>Upvote</button>
      <button onClick={() => onVote(id, -1)} style={{ marginLeft: '6px' }}>Downvote</button>
    </div>
  );
}


