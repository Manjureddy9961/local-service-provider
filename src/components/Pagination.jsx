import React from 'react'

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null
  return (
    <div className="pagination">
      <button className="page-btn" disabled={page === 1} onClick={() => onChange(page - 1)}>‹</button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button key={n} className={`page-btn ${n === page ? 'active' : ''}`} onClick={() => onChange(n)}>{n}</button>
      ))}
      <button className="page-btn" disabled={page === totalPages} onClick={() => onChange(page + 1)}>›</button>
    </div>
  )
}
