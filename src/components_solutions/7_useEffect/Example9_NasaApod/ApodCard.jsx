import React from 'react'

// Displays NASA Astronomy Picture of the Day in a creative card layout
export default function ApodCard({ title, explanation, mediaType, url, hdUrl, copyright, date }) {
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '18px',
        overflow: 'hidden',
        color: '#f4f6fb',
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 60%, #415a77 100%)',
        boxShadow: '0 18px 40px rgba(12, 18, 31, 0.45)',
      }}
    >
      {mediaType === 'image' && (
        <div style={{ position: 'relative', height: '360px', overflow: 'hidden' }}>
          <img
            src={url}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.85)',
              transition: 'transform 0.6s ease',
            }}
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
            onMouseEnter={(event) => (event.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(event) => (event.currentTarget.style.transform = 'scale(1)')}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(13, 27, 42, 0.05) 0%, rgba(13, 27, 42, 0.85) 100%)',
            }}
          />
        </div>
      )}

      <div style={{ padding: '28px 30px 32px', display: 'grid', gap: '18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <p style={{ margin: 0, fontSize: '14px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#88a2d4' }}>
              NASA APOD • {formattedDate}
            </p>
            <h3 style={{ margin: '12px 0 0', fontSize: '28px', fontWeight: 700, lineHeight: 1.25 }}>{title}</h3>
          </div>
          {copyright && (
            <span
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                borderRadius: '999px',
                padding: '8px 16px',
                fontSize: '13px',
                color: '#e0e6f6',
              }}
            >
              © {copyright}
            </span>
          )}
        </div>

        <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.7, color: '#c8d6f0' }}>{explanation}</p>

        <div
          style={{
            display: 'flex',
            gap: '14px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href={hdUrl ?? url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#e0fbfc',
              color: '#0d1b2a',
              padding: '12px 20px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontWeight: 600,
              letterSpacing: '0.03em',
              boxShadow: '0 8px 20px rgba(224, 251, 252, 0.25)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(event) => (event.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(event) => (event.currentTarget.style.transform = 'translateY(0)')}
          >
            View in HD
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://apod.nasa.gov/apod/astropix.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontWeight: 600,
              color: '#e0fbfc',
              border: '1px solid rgba(224, 251, 252, 0.4)',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.background = 'rgba(224, 251, 252, 0.15)'
              event.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.background = 'transparent'
              event.currentTarget.style.color = '#e0fbfc'
            }}
          >
            More APODs
            <span aria-hidden="true">☄️</span>
          </a>
        </div>
      </div>
    </div>
  )
}


