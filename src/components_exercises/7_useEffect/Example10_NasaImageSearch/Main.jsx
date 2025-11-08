import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard.jsx'

const NASA_IMAGES_ENDPOINT = 'https://images-api.nasa.gov/search'
const DEFAULT_TERM = 'moon'

export default function Main() {
  // TODO 1: Create query state with default value DEFAULT_TERM
  // Hint: const [query, setQuery] = useState(DEFAULT_TERM)

  // TODO 2: Create searchTerm state with default value DEFAULT_TERM

  // TODO 3: Create results state (start with empty array [])

  // TODO 4: Create loading state (start with false)

  // TODO 5: Create error state (start with null)

  useEffect(() => {
    const fetchImages = async () => {
      // TODO 6: If searchTerm is empty string return early (no request)

      try {
        // TODO 7: Set loading true and error null

        // TODO 8: Build URL using NASA_IMAGES_ENDPOINT, searchTerm and media_type=image
        // Hint: `${NASA_IMAGES_ENDPOINT}?q=${encodeURIComponent(searchTerm)}&media_type=image`

        // TODO 9: Fetch the URL and store the response

        // TODO 10: If response not ok throw new Error('Could not load NASA images. Try a different word.')

        // TODO 11: Parse response JSON

        // TODO 12: Update results with data.collection?.items ?? []

      } catch (fetchError) {
        // TODO 13: Set error message from fetchError.message
        // TODO 14: Set results to empty array
      } finally {
        // TODO 15: Set loading to false
      }
    }

    fetchImages()
  }, [searchTerm])

  return (
    <div style={{ display: 'grid', gap: '16px' }}>
      <h2>Hello CodeHub</h2>
      <p>Search NASA&apos;s public image library. Type a word and click search.</p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <input
          type="text"
          // TODO 16: Set input value to query state
          // TODO 17: Update query state on change (event.target.value)
          placeholder="Enter a topic"
          style={{ padding: '10px', flex: '1 1 220px' }}
        />
        <button
          type="button"
          // TODO 18: On click update searchTerm with trimmed query value
          style={{ padding: '10px 16px', background: '#1b263b', color: 'white', border: 'none' }}
        >
          Search
        </button>
      </div>

      {/* TODO 19: Show "Loading images..." when loading is true */}

      {/* TODO 20: Show error message text in red when error is not null */}

      {/* TODO 21: When not loading, no error, and results length is 0 show "No images found. Try another word." */}

      <div
        style={{
          display: 'grid',
          gap: '12px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        }}
      >
        {/* TODO 22: Map results array and render <ImageCard key={item.href} item={item} /> */}
      </div>
    </div>
  )
}


