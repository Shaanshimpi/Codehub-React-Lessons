import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard.jsx';

// Main component - fetches and displays news articles using useEffect
export default function Main() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch articles when component mounts
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=10');
        
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        
        const data = await response.json();
        setArticles(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []); // Empty dependency array - fetch only on mount

  return (
    <div>
      <h2>Hello CodeHub</h2>
      <p style={{ marginBottom: '20px', color: '#7f8c8d' }}>
        SpaceFlight News Articles
      </p>

      {loading && (
        <p style={{ color: '#3498db', fontSize: '18px' }}>Loading articles...</p>
      )}

      {error && (
        <p style={{ color: '#e74c3c', fontSize: '18px' }}>
          Error: {error}
        </p>
      )}

      {!loading && !error && (
        <div>
          <p style={{ marginBottom: '15px', fontWeight: 'bold' }}>
            Articles ({articles.length}):
          </p>
          {articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                summary={article.summary}
                imageUrl={article.image_url}
                newsSite={article.news_site}
                publishedAt={article.published_at}
                url={article.url}
              />
            ))
          ) : (
            <p style={{ color: '#95a5a6' }}>No articles found.</p>
          )}
        </div>
      )}
    </div>
  );
}


