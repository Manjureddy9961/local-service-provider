import React from 'react'

export default function RatingStars({ rating = 0, count }) {
  const full = Math.round(rating)
  return (
    <span className="row" style={{ gap: 6 }}>
      <span className="stars">
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={n <= full ? '' : 'star-empty'}>★</span>
        ))}
      </span>
      <span className="mono muted" style={{ fontSize: '0.78rem' }}>
        {rating.toFixed(1)}{count != null ? ` (${count})` : ''}
      </span>
    </span>
  )
}
