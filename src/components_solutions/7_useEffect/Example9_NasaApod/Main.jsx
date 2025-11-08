import React, { useState, useEffect } from 'react'
import ApodCard from './ApodCard.jsx'

const APOD_ENDPOINT = 'https://api.nasa.gov/planetary/apod'
const APOD_DATE = '2024-10-08' // Astronomy Picture of the Day for October 8
const API_KEY = 'DtbbD5dgzdBgCimQ06I6voFqlLV427g1hWPzgbgJ' // Replace with your own key for production use

// Fetches NASA Astronomy Picture of the Day (APOD) for a specific date
export default function Main() {
  const [apod, setApod] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchApod = async () => {
      try {
        setLoading(true)
        setError(null)

        const params = new URLSearchParams({
          api_key: API_KEY,
          date: APOD_DATE,
        })
        const response = await fetch(`${APOD_ENDPOINT}?${params.toString()}`)

        if (!response.ok) {
          throw new Error('Unable to load NASA APOD right now. Please try again later.')
        }

        const data = await response.json()
        console.log(data)
        setApod({
          title: data.title,
          explanation: data.explanation,
          mediaType: data.media_type,
          url: data.url,
          hdUrl: data.hdurl,
          date: data.date,
          copyright: data.copyright,
        })
      } catch (fetchError) {
        setError(fetchError.message)
      } finally {
        setLoading(false)
      }
    }

    fetchApod()
  }, [])

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      <header style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '6px' }}>Hello CodeHub</h2>
        <p style={{ margin: 0, color: '#5c6c8a' }}>
          Journey to space with the NASA Astronomy Picture of the Day
        </p>
      </header>

      {loading && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            color: '#2c3e50',
          }}
        >
          <div
            style={{
              width: '54px',
              height: '54px',
              border: '6px solid #c5d6f6',
              borderTopColor: '#4a6cf7',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
          <p style={{ margin: 0, fontWeight: 600 }}>Scanning the cosmos…</p>
          <style>{'@keyframes spin { to { transform: rotate(360deg); } }'}</style>
        </div>
      )}

      {error && (
        <div
          role="alert"
          style={{
            padding: '20px',
            borderRadius: '12px',
            background: 'rgba(231, 76, 60, 0.12)',
            border: '1px solid rgba(231, 76, 60, 0.35)',
            color: '#992d22',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0 }}>{error}</p>
          <small>
            Tip: If you see API limit errors, request your own key from{' '}
            <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">
              api.nasa.gov
            </a>
            .
          </small>
        </div>
      )}

      {!loading && !error && apod && (
        <ApodCard
          title={apod.title}
          explanation={apod.explanation}
          mediaType={apod.mediaType}
          url={apod.url}
          hdUrl={apod.hdUrl}
          copyright={apod.copyright}
          date={apod.date}
        />
      )}
    </div>
  )
}


