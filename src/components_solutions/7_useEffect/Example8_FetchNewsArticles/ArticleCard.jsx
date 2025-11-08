import React from 'react';

// ArticleCard component displays individual article information
export default function ArticleCard({ title, summary, imageUrl, newsSite, publishedAt, url }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const truncateSummary = (text, maxLength = 150) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div
      style={{
        padding: '15px',
        border: '2px solid #3498db',
        borderRadius: '8px',
        margin: '15px 0',
        backgroundColor: '#ecf0f1',
        display: 'flex',
        gap: '15px',
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '150px',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '5px',
            flexShrink: 0,
          }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      )}
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>
          {title}
        </h3>
        <div style={{ marginBottom: '8px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span
            style={{
              padding: '4px 12px',
              backgroundColor: '#3498db',
              color: 'white',
              borderRadius: '5px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            {newsSite}
          </span>
          <span style={{ fontSize: '14px', color: '#7f8c8d' }}>
            {formatDate(publishedAt)}
          </span>
        </div>
        <p style={{ margin: '0 0 10px 0', color: '#34495e', fontSize: '14px', lineHeight: '1.5' }}>
          {truncateSummary(summary)}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#3498db',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '14px',
          }}
        >
          Read more →
        </a>
      </div>
    </div>
  );
}


