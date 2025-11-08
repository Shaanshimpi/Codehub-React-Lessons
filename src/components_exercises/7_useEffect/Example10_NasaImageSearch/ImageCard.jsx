import React from 'react'

// TODO: Display NASA image data
export default function ImageCard({ item }) {
  // TODO 1: Grab the first entry from item.data (call it dataBlock)
  // TODO 2: Find the image link from item.links where render === 'image'
  // TODO 3: If dataBlock or image link is missing, return null

  // TODO 4: Pull title, description, date_created, center from dataBlock (provide fallbacks)

  return (
    <div style={{ border: '1px solid #dce2f0', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
      {/* TODO 5: Render the image using image link href, add a fallback if it fails */}

      <div style={{ padding: '12px', display: 'grid', gap: '8px' }}>
        {/* TODO 6: Show title in an h3 */}
        {/* TODO 7: Show truncated description (max 120 chars) */}
        {/* TODO 8: Show formatted date + center */}
      </div>
    </div>
  )
}


