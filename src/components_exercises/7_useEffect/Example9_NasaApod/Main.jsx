import React, { useState, useEffect } from 'react'
import ApodCard from './ApodCard.jsx'

const APOD_ENDPOINT = 'https://api.nasa.gov/planetary/apod'
const APOD_DATE = '2024-10-08'
const API_KEY = 'DEMO_KEY' // TODO 0: Replace with your own key if you have one

// TODO: Fetch NASA Astronomy Picture of the Day for a specific date
export default function Main() {
  // TODO 1: Create apod state (start with null)
  // TODO 2: Create loading state (start with true)
  // TODO 3: Create error state (start with null)

  useEffect(() => {
    const fetchApod = async () => {
      try {
        // TODO 4: Set loading true and reset error

        const params = new URLSearchParams({
          api_key: API_KEY,
          date: APOD_DATE,
        })

        // TODO 5: Fetch `${APOD_ENDPOINT}?${params.toString()}`

        // TODO 6: If response not ok throw new Error('Unable to load NASA APOD right now. Please try again later.')

        // TODO 7: Parse JSON and store the fields you need in apod state
        // Hint: title, explanation, media_type, url, hdurl, date, copyright
      } catch (fetchError) {
        // TODO 8: Set error message from fetchError.message
      } finally {
        // TODO 9: Set loading to false
      }
    }

    fetchApod()
  }, []) // TODO 10: Keep dependency array empty so the effect runs once

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      <header style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '6px' }}>Hello CodeHub</h2>
        <p style={{ margin: 0, color: '#5c6c8a' }}>
          Journey to space with the NASA Astronomy Picture of the Day
        </p>
      </header>

      {/* TODO 11: Show loading state (e.g., "Scanning the cosmos…") when loading */}

      {/* TODO 12: Show an error box with helpful message and a link to api.nasa.gov when error exists */}

      {/* TODO 13: When not loading, no error, and apod data exists, render <ApodCard {...apodProps} /> */}
    </div>
  )
}


