import React from 'react'

export default function ImageCard({ item }) {
  const dataBlock = item.data?.[0]
  const imageLink = item.links?.find((link) => link.render === 'image')

  if (!dataBlock || !imageLink) {
    return null
  }

  const { title = 'Untitled image', description = 'No description available.', date_created, center = 'NASA' } = dataBlock

  return (
    <div style={{ border: '1px solid #dce2f0', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
      <img
        src={imageLink.href}
        alt={title}
        style={{ width: '100%', height: '160px', objectFit: 'cover' }}
        onError={(event) => {
          event.currentTarget.src = 'https://images.nasa.gov/assets/img/general/apod.jpg'
        }}
      />

      <div style={{ padding: '12px', display: 'grid', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '16px' }}>{title}</h3>
        <p style={{ margin: 0, fontSize: '13px', color: '#4a5568' }}>
          {description.length > 120 ? `${description.slice(0, 117)}...` : description}
        </p>
        <p style={{ margin: 0, fontSize: '12px', color: '#718096' }}>
          {date_created ? new Date(date_created).toLocaleDateString() : 'Unknown date'} · {center}
        </p>
      </div>
    </div>
  )
}




