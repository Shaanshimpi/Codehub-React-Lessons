import React from 'react'

// TODO: Display article details nicely
export default function ArticleCard({ title, summary, imageUrl, newsSite, publishedAt, url }) {
  // TODO 1: Create helper function formatDate to format publishedAt (use new Date + toLocaleDateString)
  // TODO 2: Create helper function truncateSummary to shorten summary to 150 characters

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
      {/* TODO 3: If imageUrl exists render an <img> with width 150px and height 100px */}
      {/* Hint: Use onError to hide the image if it fails to load */}

      <div style={{ flex: 1 }}>
        {/* TODO 4: Render article title inside an h3 */}

        <div style={{ marginBottom: '8px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* TODO 5: Show the news site inside a styled span (badge look) */}
          {/* TODO 6: Show formatted publish date using formatDate helper */}
        </div>

        {/* TODO 7: Render truncated summary in a paragraph */}

        {/* TODO 8: Render a link to the full article that opens in a new tab */}
      </div>
    </div>
  )
}


