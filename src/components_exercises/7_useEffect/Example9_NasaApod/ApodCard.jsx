import React from 'react'

// TODO: Style and display the Astronomy Picture of the Day
export default function ApodCard({ title, explanation, mediaType, url, hdUrl, copyright, date }) {
  // TODO 1: Format the date string so it looks friendly (use toLocaleDateString)

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
      {/* TODO 2: If mediaType is "image", render the image with the provided url */}
      {/* Hint: Add a gradient overlay and simple hover effect if you want */}

      <div style={{ padding: '28px 30px 32px', display: 'grid', gap: '18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            {/* TODO 3: Show a small label with the formatted date */}
            {/* TODO 4: Render the APOD title in a heading */}
          </div>
          {/* TODO 5: If copyright exists, show it in a pill badge */}
        </div>

        {/* TODO 6: Show the explanation text */}

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          {/* TODO 7: Link to the HD image (hdUrl if available, otherwise url). Open in new tab */}
          {/* TODO 8: Add a secondary link to https://apod.nasa.gov/apod/astropix.html */}
        </div>
      </div>
    </div>
  )
}


