import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard.jsx'

const NASA_IMAGES_ENDPOINT = 'https://images-api.nasa.gov/search'
const DEFAULT_TERM = 'moon'

// Simple NASA image search that fetches when the user presses the button
export default function Main() {
  const [query, setQuery] = useState(DEFAULT_TERM)
  const [searchTerm, setSearchTerm] = useState(DEFAULT_TERM)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchImages = async () => {
      if (!searchTerm) {
        setResults([])
        return
      }

      try {
        setLoading(true)
        setError(null)

        const url = `${NASA_IMAGES_ENDPOINT}?q=${encodeURIComponent(searchTerm)}&media_type=image`
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Could not load NASA images. Try a different word.')
        }

        const data = await response.json()
        setResults(data.collection?.items ?? [])
      } catch (fetchError) {
        setError(fetchError.message)
        setResults([])
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [searchTerm])

  return (
    <div style={{ display: 'grid', gap: '16px' }}>
      <h2>Hello CodeHub</h2>
      <p>
        Search NASA&apos;s public image library. Type a word (for example: moon, shuttle, nebula) and click search.
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter a topic"
          style={{ padding: '10px', flex: '1 1 220px' }}
        />
        <button
          type="button"
          onClick={() => setSearchTerm(query.trim())}
          style={{ padding: '10px 16px', background: '#1b263b', color: 'white', border: 'none' }}
        >
          Search
        </button>
      </div>

      {loading && <p>Loading images...</p>}
      {error && <p style={{ color: '#c0392b' }}>{error}</p>}
      {!loading && !error && results.length === 0 && <p>No images found. Try another word.</p>}

      <div
        style={{
          display: 'grid',
          gap: '12px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        }}
      >
        {results.map((item) => (
          <ImageCard key={item.href} item={item} />
        ))}
      </div>
    </div>
  )
}



