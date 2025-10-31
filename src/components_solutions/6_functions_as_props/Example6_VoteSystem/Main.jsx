import React, { useState } from 'react';
import PostCard from './PostCard.jsx';

export default function Main() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Intro to React', votes: 0 },
    { id: 2, title: 'Understanding Props', votes: 2 },
  ]);

  const onVote = (id, delta) => {
    setPosts(posts.map((p) => (p.id === id ? { ...p, votes: p.votes + delta } : p)));
  };

  return (
    <div>
      <h2>Hello CodeHub</h2>
      {posts.map((p) => (
        <PostCard key={p.id} id={p.id} title={p.title} votes={p.votes} onVote={onVote} />
      ))}
    </div>
  );
}


